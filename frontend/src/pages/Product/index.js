import React, { useEffect, useState } from 'react';
import { Page } from './styled';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../api';

import SectionTitle from '../../components/SectionTitle';

import burntTimber from '../../assets/burntTimber.jpg';
import jamesCoffee from '../../assets/jamesCoffee.jpg';
import kalinaw from '../../assets/kalinaw.jpg';
import kalinawKit from '../../assets/kalinawKit.jpg';
import mnl from '../../assets/mnl.jpg';
import pause from '../../assets/pause.jpg';
import stir from '../../assets/stir.jpg';
import tallinh from '../../assets/tallinh.jpg';


const App = () => {

    const BASE_PATH_IMAGES = '../../assets';
    const { idProduct } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    useEffect(() => {
        window.scroll(0, 600);

        const findProduct = async (idProduct) => {
            const product = await api.findProduct(idProduct);
            
            if (product) {
                setProduct(product);
            } else {
                alert('Produto não encontrado!');
            }
        }
        findProduct(idProduct);
    }, []);

    const formatPrice = (value) => {
        if (value) {
            const format = {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            };
            return value.toLocaleString('pt-BR', format);
        }
    };

    const getImage = (name) => {
    
        switch (name) {
            case "burntTimber":
                return burntTimber;
            case "jamesCoffee":
                return jamesCoffee;
            case "kalinaw":
                return kalinaw;
            case "kalinawKit":
                return kalinawKit;
            case "mnl":
                return mnl;
            case "pause":
                return pause;
            case "stir":
                return stir;
            case "tallinh":
                return tallinh;
        }
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <>
            <div style={{display: "flex", justifyContent: 'center', paddingTop: '30px'}}>
                <SectionTitle title='Produto' colorBar='#C4C4C4' colorTitle='#000' width='180' />
            </div>
            <Page>
                <div className='product__image-area'>
                    <img src={getImage(product.nameImage)} className='product__image'/>
                </div>
                <div className='rightSide'>
                    <div className='nameProductArea'>
                        <div className='nameProduct'>{product.name}</div>
                    </div>
                    <div className='infosProductArea'>
                        <div className='infoProduct'>
                            <div className='labelInfo'>Peso:</div>
                            <span className='info'>{product.weight}gr</span>
                        </div>
                        <div className='infoProduct'>
                            <div className='labelInfo'>dimensões:</div>
                            <span className='info'>{product.dimensions}</span>
                        </div>
                        <div className='infoProduct'>
                            <div className='labelInfo'>Descrição:</div>
                            <span className='info'>{product.description}</span>
                        </div>
                        <div className='infoProduct'>
                            <div className='labelInfo'>Valor:</div>
                            <div className='info value'>{formatPrice(product.price)}</div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='btnComprar'>Comprar</div>
                        <div className='btnHome' onClick={goToHome}>Voltar à tela inicial</div>
                    </div>
                </div>
            </Page>
        </>
    );
    
};

export default App;