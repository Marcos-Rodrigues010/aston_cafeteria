import styled from 'styled-components';

export const Page = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 50px;
    align-items: center;
    padding: 100px 50px;
    animation: fade 0.3s;

    .rightSide {
        height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .nameProductArea {
        padding-top: 15px;

        .nameProduct {
            font-weight: 700;
            font-size: 2rem;
            color: var(--color-font-default-dark);
        }
    }

    .infosProductArea {
        background-color: #EEE;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;

        .infoProduct {
            display: flex;
            gap: 10px;

            .labelInfo {
                font-weight: 700;
                color: #777;
            }

            .info {
                color: #555;
            }

            .value {
                color: var(--color-default-money);
            }
        }
    }

    .buttons {
        display: flex;
        gap: 12px;
        cursor: pointer;

        .btnComprar, .btnHome {
            padding: 8px;
            text-align: center;
            width: 50%;
        }

        .btnComprar {
            background-color: var(--bg-darkness);
            color: var(--color-font-default);

            &:hover {
                background-color: var(--bg-default);
            }
        }

        .btnHome:hover {
            background-color: var(--bg-darkness);
            color: var(--color-font-default);
        }
    }

    @media (max-width: 1120px) {
        flex-direction: column;
    }

    @media (max-width: 700px) {

        .product__image-area {
            width: 90%;
            max-height: 600px;

            .product__image {
                width: 100%;
                max-height: 600px;
            }
        }

        .nameProduct {
            text-align: center;
        }

        .buttons {
            margin-top: 20px;
        }
    }

    @media (max-width: 520px) {


        margin-bottom: 80px;

        .product__image-area {
            max-height: 250px;

            .product__image {
                max-height: 250px;
            }
        }
    }

    @media (max-width: 440px) {

        padding: 20px;
        height: 800px;
        margin-bottom: 150px;

        .product__image-area {
            max-height: 300px;

            .product__image {
                max-height: 400px;
            }
        }

        .buttons {
            flex-direction: column;

            .btnComprar, .btnHome {
                width: auto;
            }
        }
    }
`;