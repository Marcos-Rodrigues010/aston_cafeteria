import styled from 'styled-components';

export const Confirmation = styled.div`

    @keyframes fadeIn {
        from {top: ${props => props.scrollPosition}px; opacity: 0;}
        to {top: ${props => props.scrollPosition + 100}px; opacity: 1;}
    }

    @keyframes fadeOut {
        from {opacity: 1;}
        to {opacity: 0;}
    }
    
    position: absolute;
    width: 100vw;
    height: ${props => props.height}px;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    display: none;

    .confirmation__container {
        width: 50%;
        height: 500px;
        background-color: #FFF;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        position: relative;
        top: ${props => props.scrollPosition + 100}px;
    }

    .confirmation__icon {
        font-size: 8rem;
        color: #FFC700;
    }

    .confirmation__message {
        font-size: 2.8rem;
        text-align: center;
        color: #707070;
    }

    .confirmation__butons {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 60px;
    }

    .btnCancelar, .btnConfirmar {
        padding: 12px 0;
        width: 150px;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        font-weight: 700;
    }

    .btnCancelar {
        background-color: var(--bg-default-light);
        color: #707070;

        &:hover {
            background-color: #5A5A5A;
            color: #FFF;
        }
    }

    .btnConfirmar {
        background-color: #176EE2;
        color: #FFF;

        &:hover {
            background-color: #0656BF;
            color: ;
        }
    }

    @media(max-width: 1100px) {
        .confirmation__container {
            width: 60%;
        }
    }

    @media(max-width: 920px) {
        .confirmation__message {
            font-size: 2.3rem;
        }
    }

    @media(max-width: 770px) {
        .confirmation__container {
            width: 70%;
        }

        .confirmation__message {
            font-size: 2rem;
        }
    }

    @media(max-width: 600px) {
        .confirmation__container {
            width: 80%;
        }

        .confirmation__icon {
            font-size: 7rem;
        }
    }

    @media(max-width: 500px) {

        .confirmation__container {
            padding: 0 10px;
            width: 90%;
        }

        .btnCancelar, .btnConfirmar {
            width: 120px;
        }
    }

    @media(max-width: 430px) {

        .confirmation__message {
            font-size: 1.7rem;
        }
    }
`;