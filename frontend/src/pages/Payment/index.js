import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Page } from './styled';
import ItemCartPayment from '../../components/ItemCartPayment';
import SectionTitle from '../../components/SectionTitle';
import utils from '../../utils/utils';

import { api } from '../../api';
import { Context } from '../../contexts/context';



const App = () => {

    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();
    
    const [ items, setItems ] = useState([]);
    const [ selectedItems, setSelectedItems ] = useState([]);
    const [ totalValue, setTotalValue ] = useState(0.0);
    const [ name, setName ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ postcode, setPostcode ] = useState('');
    const [ houseNumber, setHouseNumber ] = useState('');
    const [ district, setDistrict ] = useState('');
    const [ paymentOption, setPaymentOption ] = useState('');
    const [ installment, setInstallment ] = useState(null);
    const [ installmentList, setInstallmentList] = useState('');
    const [ discount, setDiscount ] = useState(0.0);
    const [ freight, setFreight ] = useState(0.0);
    const [ subtotal, setSubtotal ] = useState('');
    const [ fees, setFees ] = useState(0);
    const [ cardNumber, setCardNumber ] = useState('');
    const [ cardName, setCardName ] = useState('');
    const [ cvcCard, setCvcCard ] = useState('');
    const paymentOptions = [
        {
            id: 1,
            name: 'Boleto bancário',
            codigo: 'BOLETO_BANCARIO'
        },
        {
            id: 2,
            name: 'Cartão de crédito',
            codigo: 'CARTAO_CREDITO'
        },
        {
            id: 3,
            name: 'Cartão débito',
            codigo: 'CARTAO_DEBITO'
        }
    ];

    const params = useParams();

    useEffect(() => {
        params.idProduct && prepareList();
        getClient();
    }, []);

    useEffect(() => {
        setValueSelectedItems();
    }, [selectedItems]);

    useEffect(() => {
        calculateDiscount();
    }, [totalValue]);

    useEffect(() => {
        calculateFreigth();
    }, [discount, totalValue]);

    useEffect(() => {
        calculateSubtotal();
    }, [freight, totalValue]);

    useEffect(() => {
        calculateFees();
    }, [installment]);

    useEffect(() => {
        calculateSubtotal();
    }, [fees]);

    useEffect(() => {
        const value = utils.parseMoneyToDouble(totalValue);
        const aux = [];
        if(value > 150 && paymentOption !== '3') {
            const total = value + (value*0.05);
            for(let i = 1; i <= 3; i++) {
                const installment = i === 1 ? value : (total/i);
                const option = i === 1 
                    ? {installment: i, label:`${i}x de ${utils.formatDoubleToMoney(installment)}`} 
                    : {installment: i, label:`${i}x de ${utils.formatDoubleToMoney(installment)} (valor com juros)`};
                aux.push(option);
            };
        };
        if (value < 150 || paymentOption === '3') {
            const option = {installment: 1, label:`1x de ${totalValue}`};
            aux.push(option);
        }
        setInstallmentList(aux);
    }, [totalValue, paymentOption]);

    const setValueSelectedItems = () => {
        let total = 0.0;
        selectedItems.map(item => {
          total = total + item.price;
        });
        total = Number(total.toFixed(2));
        setTotalValue(utils.formatDoubleToMoney(total));
    };

    const prepareList = async () => {
        const productOrigin = await getProduct();
        if (productOrigin) {
            const isAddedToCart = state.cart.some(item => item.id === productOrigin.id);

            if(!isAddedToCart) {
                setItems([...state.cart, productOrigin]);
            } else setItems([...state.cart]);

            setSelectedItems([productOrigin]);
        } else {
            setItems([...state.cart]);
            
        }
    };

    const getProduct = async () => {
        return await api.findProduct(params.idProduct);
    }

    const getClient = async () => {
        const client = state.user.id ? await api.findClientById(state.user.id) : null;
        if (client) {
            const { name, street, postcode, houseNumber, district } = client;

            setName(name);
            setStreet(street);
            setPostcode(postcode);
            setHouseNumber(houseNumber);
            setDistrict(district);
        }
    };

    const calculateDiscount = () => {
        const value = utils.parseMoneyToDouble(totalValue);
        let discount = 0;
        if (value > 150) {
            discount = value * 0.2;
        }
        setDiscount(utils.formatDoubleToMoney(discount));
    };

    const calculateFreigth = () => {
        let totalWeight = 0;
        selectedItems.map(item => {
            totalWeight += item.weight;
        });
        const freight = utils.formatDoubleToMoney(totalWeight * 0.01);
        setFreight(freight);
    };

    const calculateSubtotal = () => {
        const total = utils.parseMoneyToDouble(totalValue);
        const discountValue = utils.parseMoneyToDouble(discount);
        const freightValue = utils.parseMoneyToDouble(freight);
        const feesValue = utils.parseMoneyToDouble(fees);
        const subtotal = total - discountValue + freightValue + feesValue;
        setSubtotal(utils.formatDoubleToMoney(subtotal));
    };

    const calculateFees = () => {
        const total = utils.parseMoneyToDouble(totalValue);
        let fees = 0;
        if (installment > 1) {
            fees = total * 0.05;
        }
        setFees(utils.formatDoubleToMoney(fees));
    };

    const handleToFinishPayment = async () => {
        const isValidData = validateData();
        const isValidDataCards = paymentOption !== '1' ? validateDataCards() : true;
        if (!isValidData || !isValidDataCards) {
            return dispatch({
                type:   'ADD_MESSAGE',
                payload: {
                    text: 'Preencha todos os campos para finalizar sua compra.',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }
            });
        }

        try {
            const paymentType = paymentOptions.find(option => option.id === Number(paymentOption));

            const payment = {
                paymentType: paymentType.name,
                installments: Number(installment),
                value: utils.parseMoneyToDouble(subtotal)
            };

            const payload = {
                client: state.user,
                freightValue: utils.parseMoneyToDouble(freight),
                orderItem: selectedItems,
                payment 
            };
            
            const message = await api.saveOrder(payload);

            gotToHome();
            dispatch({
                type:   'ADD_MESSAGE',
                payload: {
                    text: message.body,
                    icon: 'BsCheck2Circle',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }
            });
        } catch (error){
            console.error(error);
        }
    };

    const validateData = () => {
        return utils.isValidString(name) && utils.isValidString(street) && utils.isValidString(postcode)
            && utils.isValidString(houseNumber) && utils.isValidString(district)
            && utils.isValidString(paymentOption) && utils.isValidString(installment);
    };

    const validateDataCards = () => {
        return utils.isValidString(cardNumber) && cardNumber.length !== 16
            && utils.isValidString(cardName) && utils.isValidString(cvcCard); 
    };

    const gotToHome = () => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    return (
        <Page>
            <SectionTitle title='Pagamento' width='200' colorBar="#C4C4C4" colorTitle="#000"/>
            <div className='payment__listProducts-area'>
                <h1 className='payment__listProducts-title'>Produtos</h1>
                <div className='payment__listProducts'>
                    <div>
                        {items.length > 0 && items.map((item, key) => {
                            return <ItemCartPayment 
                                selectedItems={selectedItems} 
                                setSelectedItems={setSelectedItems} 
                                items={items}
                                item={item} 
                                id={item.id} 
                                key={key}/>
                        })}
                    </div>
                </div>
                <div  className='payment__totalArea'>
                    <div className='payment__totalLabel'>Total:</div>
                    <div className='payment__totalValue'>{totalValue}</div>
                </div>
            </div>
            {selectedItems.length > 0 && state.user.id ?
                <>
                    <div className='payment__deliveryArea'>
                        <h1 className='payment__deliveryTitle'>Dados da entrega</h1>
                        <div className='payment__deliveryInfos'>
                            <label className='payment__deliveryLabel'>Cliente:</label>
                            <span>{name}</span>
                        </div>
                        <div className='payment__deliveryInfos'>
                            <label className='payment__deliveryLabel'>Rua:</label>
                            <input className='payment__deliveryInput' 
                                type='text' value={street} 
                                onChange={(e) => setStreet(e.target.value)}>
                            </input>
                        </div>
                        <div className='payment__deliveryInfos'>
                            <label className='payment__deliveryLabel'>CEP:</label>
                            <input className='payment__deliveryInput' 
                                type='number' value={postcode} 
                                onChange={(e) => setPostcode(e.target.value)}>
                            </input>
                        </div>
                        <div className='payment__deliveryInfos'>
                            <label className='payment__deliveryLabel'>Número:</label>
                            <input className='payment__deliveryInput' 
                                type='number' 
                                value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}>
                            </input>
                        </div>
                        <div className='payment__deliveryInfos'>
                            <label className='payment__deliveryLabel'>Bairro:</label>
                            <input className='payment__deliveryInput' 
                                type='text' value={district} 
                                onChange={(e) => setDistrict(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className='payment__type'>
                        <h1 className='payment__typeTitle'>Forma de pagamento</h1>
                        <div className='payment__typeInfos'>
                            <label>Escolha a forma de pagamento:</label>
                            <select className='payment__typeSelect' onChange={(e) => setPaymentOption(e.target.value)}>
                                <option value={null}></option>
                                {paymentOptions.map(option => (
                                    <option value={option.id}>{option.name}</option>
                                ))}
                            </select>
                        </div>
                        { paymentOption !== '1' && paymentOption !== '' &&
                            <>
                                <div className='payment__dataCards'>
                                    <label>Número do cartão</label>
                                    <input type='number' value={cardNumber} onChange={e => setCardNumber(e.target.value)} className='payment__dataCard'/>
                                </div>
                                <div className='payment__dataCards'>
                                    <label>Nome do cartão</label>
                                    <input type='text' value={cardName} onChange={e => setCardName(e.target.value)} className='payment__dataCard'/>
                                </div>
                                <div className='payment__dataCards'>
                                    <label>Código de verificação do cartão (CVC)</label>
                                    <input type='number' value={cvcCard} onChange={e => setCvcCard(e.target.value)} className='payment__dataCard'/>
                                </div>
                            </>
                        }
                        {installmentList.length > 0 && paymentOption &&
                            <div className='payment__installment'>
                                <label>Escolha a forma de parcelamento:</label>
                                <select className='payment__installmentSelect' onChange={e => setInstallment(e.target.value)}>
                                    <option value={null}></option>
                                    {installmentList.length > 0 && installmentList.map(option => (
                                        <option value={option.installment}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        }
                    </div>
                    <div className='payment__summary'>
                        <h1 className='payment__summaryTitle'>Resumo da compra</h1>
                        <div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Endereço de entrega</label>
                                <span className='payment__summaryInfo'>{`${street}, nº${houseNumber}, ${district}`}</span>
                            </div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Valor dos itens</label>
                                <span className='payment__summaryInfo'>{totalValue}</span>
                            </div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Parcelamento</label>
                                <span className='payment__summaryInfo'>{utils.isValidString(installment) ? `${installment}x` : ''}</span>
                            </div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Juros de parcelamento</label>
                                <span className='payment__summaryInfo'>{fees}</span>
                            </div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Desconto</label>
                                <span className='payment__summaryInfo'>{discount}</span>
                            </div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Frete</label>
                                <span className='payment__summaryInfo'>{freight}</span>
                            </div>
                            <div className='payment__summaryInfos'>
                                <label className='payment__summaryLabel'>Subtotal</label>
                                <span className='payment__summaryInfo money'>{subtotal}</span>
                            </div>
                        </div>
                    </div>
                    <div className='finish__payment'>
                        <div className='finishBtn' onClick={handleToFinishPayment}>Finalizar compra</div>
                    </div>
                </>
            :
                <div className='payment__message'>
                    <div className='messageArea'>
                        {!state.user.id &&
                            <h1>Você precisa estar logado para dar prosseguimento à compra</h1>
                        }
                        {selectedItems.length === 0 && state.user.id &&
                            <h1>Selecione um item para dar prosseguimento à sua compra</h1>
                        }
                    </div>
                </div>
            }
        </Page>
    );
    
};

export default App;