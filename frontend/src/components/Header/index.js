import React, { useContext, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import { Header } from './styled';
import { FiLogIn } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io'
import { FaSignOutAlt } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';

import Logo from '../../components/Logo';

import { Context } from '../../contexts/context';

const App = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);
    const [showDropDown, setShowDropDown] = useState(false);

    const menu = useRef();
    const menuArea = useRef();


    const navigateToSignUp = () => {
        navigate('/signup');
    }

    const navigateToHome = () => {
        navigate('/');
    }

    const openModal = (e) => {
        dispatch({
            type: 'CHANGE_SHOW_MODAL',
            payload: {
                display: 'flex'
            }
        });
        changeAnimationMenuMobile(e);
    };

    const handleShowDropDown = () => {
        setShowDropDown(!showDropDown);
    }

    const signout = () => {
        dispatch({
            type: 'CHANGE_USER',
            payload: {
                name: '',
                id: null
            }
        });
        dispatch({
            type: 'UPDATE_FAVORITES',
            payload: {
                favorites: []
            }
        });
        dispatch({
            type: 'UPDATE_CART',
            payload: {
                cart: []
            }
        })
        navigate('/');
    };

    const showMenuMobile = () => {
        menuArea.current.style.animation = 'fade 0.5s';
        menu.current.style.animation = 'slideIn 0.5s'
        menuArea.current.style.display = 'flex';
    };

    const changeAnimationMenuMobile = (e) => {
        if (!e.target.classList.contains('header__containerMobile')) {
            menuArea.current.style.animationName = 'fadeOut 0.5s';
            menu.current.style.animation = 'slideOut 0.5s';
            if (menuArea.current.style.display === 'flex') {
                const idTimeOut = setTimeout(() => {
                    closeMenuMobile(idTimeOut);
                }, 400);
            };
        };
    };

    const closeMenuMobile = (idTimeOut) => {
        menuArea.current.style.display = 'none';
        clearTimeout(idTimeOut);
    };

    const goToFavorites = () => {
        navigate('/favorites');
    };

    const goToCart = () => {
        navigate('/cart');
    };

    const goToOrders = () => {
        navigate('/orders');
    };

    return(
        <Header itemsCart={state.cart.length}>
            <div className='header__container'>
                <div className='header__logo' onClick={navigateToHome}>
                    <Logo />
                </div>
                <div className='header__user-area'>
                    <div className='header__cartArea'>
                        <span className='header__user-area-icon cart' onClick={goToCart}><BsCart /></span>
                    </div>
                    {state.user.id ?
                        <div className='welcome' onClick={handleShowDropDown}>
                            <span>Olá, {state.user.name}</span>
                            <IoIosArrowDown />
                            {showDropDown &&
                                <div className='dropDown'>
                                    <ul>
                                        <li onClick={signout}>
                                            Sair
                                            <FaSignOutAlt />
                                        </li>
                                        <li onClick={goToFavorites}>
                                            Favoritos
                                            <AiFillHeart />
                                        </li>
                                        <li onClick={goToOrders}>
                                            Pedidos
                                            <BsFillBagFill />
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    :
                        <>
                            <div className='header__containerAuxiliar' ref={menuArea} onClick={changeAnimationMenuMobile}>
                                <div className='header__containerMobile' ref={menu}>
                                    <div className='header__login-area' onClick={openModal}>
                                        <span>Entrar</span>
                                        <span className='header__user-area-icon'><FiLogIn /></span>
                                    </div>
                                    <div className='header__signup-area' onClick={navigateToSignUp}>
                                        <span>Cadastre-se</span>
                                        <span className='header__user-area-icon'><FiUser /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='header__menu-mobile'>
                                <span className='header__menu-mobile-icon' onClick={showMenuMobile}><FiMenu /></span>
                            </div>
                        </>
                    }
                </div>
            </div>
        </Header>
    );
};

export default App;