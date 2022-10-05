import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Cart } from './styled';
import SectionTitle from '../../components/SectionTitle';
import Confirmation from '../../components/Confirmation';

import { BsCartDash } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

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

    const [ cart, setCart ] = useState([]);
    const [ showConfirmation, setShowConfirmation ] = useState(false);
    const [ textConfirmation, setTextConfirmation ] = useState('');
    const [ idCartRemove, setIdCartRemove ] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const cart = [...state.cart];
        setCart(cart);
    }, [state.cart.length]);

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

    const addFavorite = async (e) => {
        const product = state.cart.find(item => item.id.toString() === e.target.parentNode.accessKey);

        if (state.user && state.user.id) {
            await api.addFavorite(state.user.id, product.id);

            const favorites = await api.getFavoritesByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_FAVORITES',
                payload: {
                    favorites
                }

            });
        }
    };

    const removeFavorite = async (e) => {
        const favorite = state.favorites.find(item => item.id.toString() === e.target.parentNode.parentNode.accessKey);

        if (state.user && state.user.id) {
            await api.removeFavorite(state.user.id, favorite.id);
            const favorites = await api.getFavoritesByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_FAVORITES',
                payload: {
                    favorites
                }
            });
            setShowConfirmation(false);
        };
    };

    const isFavorite = (product) => {
        return state.favorites.some(item => item.id === product.id);
    };

    const goToPayment = (e) => {
        navigate(`/payment/${e.target.accessKey}`);
    };

    const cancel = () => {
        setShowConfirmation(false);
    };

    const confirm = async () => {
        if (state.user && state.user.id) {
            await api.removeFromCart(state.user.id, idCartRemove);
            const cart = await api.getCartByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_CART',
                payload: {
                    cart
                }
            });
            setShowConfirmation(false);
        }
    };

    const handleToRemoveFromCart = (e) => {
        setTextConfirmation('Tem certeza que deseja remover este item do seu carrinho?');
        setShowConfirmation(true);
        if (e.target.parentNode.accessKey){
            setIdCartRemove(Number(e.target.parentNode.accessKey));
        } else {
            setIdCartRemove(Number(e.target.parentNode.parentNode.accessKey));
        }
    };


    return (
        <>
            <Confirmation cancelAction={cancel}
                confirmAction={confirm}
                showConfirmation={showConfirmation}
                textConfirmation={textConfirmation}
            />
            <Cart>
                <SectionTitle title="Meu carrinho" width="300" colorBar="#C4C4C4" colorTitle="#000" />
                <div className='cart'>
                    {cart.length > 0 ?
                        <ul className='cartList'>
                            {cart.length > 0 && cart.map((item, key) => (
                                <li key={key} className='item'>
                                    <div className='item__image'>
                                        <img src={getImage(item.nameImage)} className='image' />
                                    </div>
                                    <div className='item__description'>{item.description}</div>
                                    <div className='item__actions'>
                                        <div className='item__removeFromCart' accessKey={item.id}>
                                            <BsCartDash onClick={handleToRemoveFromCart} />
                                        </div>
                                        <div className='item__removeFavorite' accessKey={item.id}>
                                            {isFavorite(item) ?
                                                <AiFillHeart style={{ color: '#DC4428' }} onClick={removeFavorite}/>
                                                :
                                                <AiOutlineHeart onClick={addFavorite}/>
                                            }
                                        </div>
                                        <div className='item__btnComprar' onClick={goToPayment} accessKey={item.id}>Comprar</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        :
                        <div className='withoutCartTitle'>
                            <h1>Você não possui nenhum item no carrinho</h1>
                        </div>
                    }
                </div>
            </Cart>
        </>
    );

};

export default App;