import styled from 'styled-components';

export const Signin = styled.div`

    @keyframes fadeIn {
        from {top: 100px; opacity: 0;}
        to {top: 200px; opacity: 1;}
    }

    width: 100%;
    max-width: 1440px;
    height: ${props => props.height}px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 998;
    display: flex;
    justify-content: center;
    display: ${props => props.display};

    .signin__area {
        width: 50%;
        height: 500px;
        background-color: #FFF;
        border-radius: 40px;
        position: relative;
        top: 200px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: fadeIn 0.5s;

        .signin__inputs {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 80%;
            gap: 30px;

            .signin__label-input {
                font-weight: 700;
            }

            .signin__input {
                display: block;
                padding: 8px;
                width: 400px;
                border-radius: 4px;
            }

            .signin__button {
                border: 0;
                outline: 0;
                padding: 8px;
                background-color: var(--bg-darkness);
                color: var(--color-font-secondary);
                width: 400px;
                text-align: center;
                font-size: 1rem;

                &:hover {
                    background-color: var(--bg-secondary);
                }
            }
        }
    }

    @media (max-width: 970px) {

        .signin__area {

            padding: 0;
            justify-content: center;
            width: 70%;

            .signin__inputs {
                width: 100%;
                .signin__inputs-block, .signin__button-area {
                    width: 80%;

                    .signin__input, .signin__button {
                        width: 100%;
                    }
                }
            }
        }
    }

    @media (max-width: 680px) {

        .signin__area {
            height: 400px;
        }
    }

    @media (max-width: 450px) {

        .signin__area {
            width: 90%;
        }
    }
`;