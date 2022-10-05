import styled from 'styled-components';

export const Message = styled.div`

    .message__container {
        width: 100vw;
        max-width: 1440px;
        height: ${props => props.height}px;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 999;
        display: ${props => props.display};
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        animation: fade 0.3s;
    }

    .message__area {
        width: 50%;
        height: 500px;
        padding: 20px;
        background-color: #FFF;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        animation: fade 0.5s;
        top: ${props => props.scrollPosition + 100}px;

        .message__icon {
            font-size: 8rem;
            color: ${props => props.colorIcon};
        }

        .message__text {
            text-align: center;
            font-size: 3rem;
            color: ${props => props.colorText};
        }
    }


    @media(max-width: 950px) {
        .message__area {
            width: 70%;
        }
    }

    @media(max-width: 700px) {

        .message__area .message__text {
            font-size: 2.7rem;
        }
    }

    @media(max-width: 600px) {
        .message__area {
            width: 80%;
        }
    }

    @media(max-width: 530px) {

        .message__area {

            height: 400px;
        
            .message__text {
                font-size: 2.3rem;
            }
        }
    }

    @media(max-width: 460px) {

        .message__area .message__text {
            font-size: 2rem;
        }
    }

    @media(max-width: 460px) {

        .message__area {

            .message__icon {
                font-size: 6rem;
            }
        
            .message__text {
                font-size: 1.8rem;
            }
        }
    }
    
`;