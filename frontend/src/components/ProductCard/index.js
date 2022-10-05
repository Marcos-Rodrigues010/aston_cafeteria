import React, { useContext } from 'react';
import { ProductCard } from './styled';

import { BsCartPlus } from 'react-icons/bs';
import { BsCartDash } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

import utils from '../../utils/utils';
import { useNavigate } from "react-router-dom";
import { Context } from '../../contexts/context';
import { api } from '../../api';

const App = ({ product }) => {

    const navigate = useNavigate();

    const { state, dispatch } = useContext(Context);

    const goToProductPage = (e) => {
        e.target.classList.contains('linkToProductPage') && navigate(`/product/${product.id}`);
    };

    const addFavorite = async () => {
        if (state.user && state.user.id) {
            await api.addFavorite(state.user.id, product.id);
            const favorites = await api.getFavoritesByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_FAVORITES',
                payload: {
                    favorites
                }

            });
        } else {
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    text: 'Você precisa estar logado para adicionar um poduto aos seus favoritos.',
                    icon: 'BiError',
                    colorIcon: '#FFC700',
                    colorText: '#707070'
                }

            });
        }
    };

    const removeFavorite = async () => {
        if (state.user && state.user.id) {
            await api.removeFavorite(state.user.id, product.id);
            const favorites = await api.getFavoritesByUserId(state.user.id);
            dispatch({
                type: 'UPDATE_FAVORITES',
                payload: {
                    favorites
                }

            });
        }
    };

    const addToCart = async () => {
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

    const removeFromCart = async () => {
        if (state.user && state.user.id) {
            await api.removeFromCart(state.user.id, product.id);
            const cart = await api.getCartByUserId(state.user.id);
            dispatch({
                type:   'UPDATE_CART',
                payload: {
                    cart
                }
            });
        }
    };

    const isFavoriteItem = () => {
        return state.favorites.some(item => item.id === product.id);
    };

    const isPresentCart = () => {
        return state.cart.some(item => item.id === product.id);
    };

    const goToPayment = () => {
        navigate(`/payment/${product.id}`);
    };

    return (
        <ProductCard url={product.nameImage}>
            <div className='product-card__image linkToProductPage' id='ok' onClick={goToProductPage}></div>
            <div className='product-card__infos linkToProductPage' onClick={goToProductPage}>
                <div className='product-card__infos-title'>{product.name}</div>
                <div className='product-card__infos-value'>{utils.formatDoubleToMoney(product.price)}</div>
                <div className='product-card__infos-wheight'>{product.weight}gr</div>
            </div>
            <div className='product-card__purchase-information linkToProductPage' onClick={goToProductPage}>
                <div className='product-card__purchase-information-icons linkToProductPage'>
                    {isPresentCart() ?
                        <span><BsCartDash onClick={removeFromCart}/></span>
                    :
                        <span><BsCartPlus onClick={addToCart}/></span>
                    }
                    {isFavoriteItem() ?
                        <span><AiFillHeart style={{color: '#DC4428'}} onClick={removeFavorite}/></span>
                    :
                        <span><AiOutlineHeart onClick={addFavorite}/></span>
                    }
                </div>
                <div className='product-card__btn-purchase'>
                    <div className='btn-purchase' onClick={goToPayment}>Comprar</div>
                </div>
            </div>
        </ProductCard>
    );
};

export default App;