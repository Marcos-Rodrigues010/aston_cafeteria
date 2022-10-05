import styled from 'styled-components';

export const Header = styled.header`

    @keyframes slideIn {
        from {right: 250px;}
        to {right: 0;}
    }

    @keyframes slideOut {
        from {right: 0;}
        to {right: 250px;}
    }

    @keyframes fadeOut {
        from {opacity: 1;}
        to {opacity: 0;}
    }

    padding: 0 20px;
    background-color: var(--bg-default);

    .header__container {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;

        .header__user-area {
            display: flex;
            gap: 30px;
            color: var(--color-font-default);

            .welcome {
                position: relative;

                .dropDown {
                    width: 100%;
                    min-width: 140px;
                    position: absolute;
                    background-color: #FFF;
                    top: 120%;
                    right: 0px;
                    border-radius: 5px;
                    animation: fade 0.2s;

                    ul, li {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }

                    ul {
                        padding: 5px 0;
                    }

                    li {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: #555;
                        padding: 8px 12px;

                        &:hover {
                            background-color: #CCC;
                        }
                    }
                }
            }

            .header__containerMobile {
                display: flex;
                align-items: center;
                gap: 30px;
            }

            .header__login-area, .header__signup-area, .welcome, .header__cartArea {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;

                .header__user-area-icon {
                    display: flex;
                    align-items: center;
                }
            }

            .cart::after {
                content: '${props => props.itemsCart}';
                background-color: #DC4428;
                position: relative;
                height: 15px;
                width: 15px;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                right: 8px;
                bottom: 8px;
                font-size: 0.7rem;
                font-weight: 700;
            }

            .header__menu-mobile {

                display: none;

                .header__menu-mobile-icon {
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (max-width: 620px) {

        .header__container {
            position: relative;

            .header__containerAuxiliar{
                width: 100vw;
                min-height: 100vh;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.5);
                left: -20px;
                top: 0;
                display: none;
                justify-content: flex-start;
                z-index: 999;

                .header__containerMobile {
                    border: 1px solid #000;
                    position: relative;
                    background-color: #FFF;
                    flex-direction: column;
                    width: 250px;
                    align-items: flex-start;
                    padding: 20px;
                    gap: 10px;
                }

                .header__login-area, .header__signup-area {

                    width: 100%;
                    padding: 10px;
                    color: #707070;

                    &:hover {
                        background-color: var(--bg-default-light);
                        color: var(--color-font-secondary);
                    }
                }
            }

            .header__user-area .header__menu-mobile {
                display: flex;
            }
        }
    }

    @media (max-width: 420px) {
        .welcome span {
            font-size: 1rem;
        }
    }
`;