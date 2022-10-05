import React, { useEffect, useState, useContext } from 'react';
import { Orders } from './styled';
import SectionTitle from '../../components/SectionTitle';

import { Context } from '../../contexts/context';
import utils from '../../utils/utils';

import { api } from '../../api';

const App = () => {

    const [ orders, setOrders ] = useState([]);
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const getOrders = async () => {
            const data = state.user && state.user.id ? await api.findOrdersByIdClient(state.user.id) : [];
            for(let i in data) {
                data[i].products = '';
            };
            setOrders(data);
        }
        getOrders();
    }, []);

    const getProducts = (order) => {
        let products = '';
        for(let i in order.orderItem) {
            products += Number(i) === 0 || Number(i) === order.orderItem[i].length - 1
                ? order.orderItem[i].product.name
                : `, ${order.orderItem[i].product.name}`;
        };
        return products;
    };

    return (
        <Orders>
            <SectionTitle title="Meus pedidos" width="300" colorBar="#C4C4C4" colorTitle="#000"/>
            <div className='orders'>
                {orders.length > 0 ?
                    <ul className='orders__list'>
                        {orders.map((order, key) => (
                            <li key={key} className='orders__item'>
                                <div className='item__date'>{order.orderDate}</div>
                                <div className='item__products'>{getProducts(order)}</div>
                                <div className='item__value'>{utils.formatDoubleToMoney(order.payment.value)}</div>
                                <div className='item__situation'>{order.situation}</div>
                            </li>
                        ))
                        }
                    </ul>
                : <div className='withoutOrdersTitle'>
                    <h1>Você não possui pedidos registrados</h1>
                </div>
                }
            </div>
        </Orders>
    );

};

export default App;