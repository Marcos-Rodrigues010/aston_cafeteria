import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Favorites } from './styled';
import SectionTitle from '../../components/SectionTitle';
import Confirmation from '../../components/Confirmation';

import { BsCartPlus } from 'react-icons/bs';
import { BsCartDash } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

import { Context } from '../../contexts/context';
import { api } from '../../api';

import burntTimber from '../../assets/burntTimber.jpg';
import jamesCoffee from '../../assets/jamesCoffee.jpg';
import kalinaw from '../../assets/kalinaw.jpg';
import kalinawKit from '../../assets/kalinawKit.jpg';
import mnl from '../../assets/mnl.jpg';
import pause from '../../assets/pause.jpg';
import stir from '../../assets/stir.jpg';
import tallinh from '../../assets/tallinh.jpg';


const App = () => {

    const { state, dispatch } = useContext(Context);

    const [ favorites, setFavorites ] = useState([]);
    const [ showConfirmation, setShowConfirmation ] = useState(false);
    const [ textConfirmation, setTextConfirmation ] = useState('');
    const [ idFavoriteRemove, setIdFavoriteRemove ] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const favorites = [...state.favorites];
        setFavorites(favorites);
    }, [state.favorites.length]);

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
    }

    const addToCart = async (e) => {
        const product = state.favorites.find(item => item.id.toString() === e.target.parentNode.accessKey);
        
        if (state.user && state.user.id) {
            await api.addToCart(state.user.id, product.id);
            const cart = await api.getCartByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_CART',
                payload: {
                    cart
                }
            });
        } else {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Você precisa estar logado para adicionar um poduto ao seu carrinho.',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }

            });
        }
    };

    const removeFromCart = async (e) => {
        const product = state.favorites.find(item => item.id.toString() === e.target.parentNode.accessKey);

        if (state.user && state.user.id) {
            await api.removeFromCart(state.user.id, product.id);
            const cart = await api.getCartByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_CART',
                payload: {
                    cart
                }
            });
        }
    };

    const isPresentCart = (product) => {
        return state.cart.some(item => item.id === product.id);
    };

    const goToPayment = (e) => {
        navigate(`/payment/${e.target.accessKey}`);
    };

    const cancel = () => {
        setShowConfirmation(false);
    };

    const confirm = async () => {
        if (state.user && state.user.id) {
            await api.removeFavorite(state.user.id, idFavoriteRemove);
            const favorites = await api.getFavoritesByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_FAVORITES',
                payload: {
                    favorites
                }

            });
            setShowConfirmation(false);
        }
    };

    const handleToRemoveFavorite = (e) => {
        setTextConfirmation('Tem certeza que deseja remover este item dos seus favoritos?');
        setShowConfirmation(true);
        setIdFavoriteRemove(Number(e.target.parentNode.parentNode.accessKey));
    };


    return (
        <>
            <Confirmation cancelAction={cancel}
            confirmAction={confirm}
            showConfirmation={showConfirmation}
            textConfirmation={textConfirmation}/>
            <Favorites>
                <SectionTitle title="Meus favoritos" width="300" colorBar="#C4C4C4" colorTitle="#000" />
                <div className='favorites'>
                    {favorites.length > 0 ?
                        <ul className='favoritesList'>
                            {favorites.length > 0 && favorites.map((item, key) => (
                                <li key={key} className='item'>
                                    <div className='item__image'>
                                        <img src={getImage(item.nameImage)} className='image' />
                                    </div>
                                    <div className='item__description'>{item.description}</div>
                                    <div className='item__actions'>
                                        <div className='item__addCart' accessKey={item.id}>
                                            {isPresentCart(item) ?
                                                <BsCartDash onClick={removeFromCart} />
                                                :
                                                <BsCartPlus onClick={addToCart} />
                                            }
                                        </div>
                                        <div className='item__removeFavorite' accessKey={item.id}>
                                            <AiFillHeart style={{ color: '#DC4428' }} onClick={handleToRemoveFavorite}/>
                                        </div>
                                        <div className='item__btnComprar' onClick={goToPayment} accessKey={item.id}>Comprar</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        :
                        <div className='withoutFavoriteTitle'>
                            <h1>Você não possui nenhum item na lista de favoritos</h1>
                        </div>
                    }
                </div>
            </Favorites>
        </>
    );

};

export default App;