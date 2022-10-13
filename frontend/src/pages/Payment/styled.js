import styled from 'styled-components';

export const Page = styled.div`

    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    animation: fade 0.8s;

    .payment__listProducts-area, 
    .payment__deliveryArea, 
    .payment__message, 
    .payment__type,
    .payment__summary {
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        background-color: #F1F1F1;
        border-radius: 20px;

        .payment__listProducts-title, 
        .payment__deliveryTitle,
        .payment__typeTitle,
        .payment__summaryTitle {
            font-size: 2.5rem;
            color: var(--color-font-default-dark);
        }

        .payment__totalArea {
            display: flex;
            justify-content: space-between;

            .payment__totalLabel, .payment__totalValue {
                font-weight: 700;
            }
        }

        .payment__deliveryInfos,
        .payment__typeInfos,
        .payment__installment,
        .payment__dataCards {
            display: flex;
            flex-direction: column;
            gap: 10px;

            label {
                color: #666;
                font-size: 0.9rem;
            }

            .payment__deliveryInput {
                padding: 10px;
                width: 50%;
                border-radius: 8px;
                outline: 0;
            }

            input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }

            input[type=number] {
                -moz-appearance: textfield;
            }
        }

        .messageArea h1{
            text-align: center;
        }

        .payment__typeSelect, .payment__installmentSelect, .payment__dataCard {
            padding: 10px;
            width: 250px;
            border-radius: 8px;
            outline: 0;
        }

        .payment__summaryInfos {
            display: flex;
            gap: 30px;
            margin-bottom: 10px;

            label {
                color: #666;
                font-size: 0.9rem;
                width: 200px;
            }

            span {
                font-weight: 700;
                color: var(--color-font-default-dark);
            }

            .money {
                color: var(--color-default-money);
            }
        }
    }

    .finishBtn {
        padding: 10px;
        background-color: var(--bg-darkness);
        color: var(--color-font-secondary);
        cursor: pointer;

        &:hover {
            background-color: var(--bg-default);
        }
    }

    @media(max-width: 650px) {

        .payment__deliveryInput, .payment__typeSelect, .payment__dataCard, .payment__installmentSelect {
            width: 100% !important;
        }
    }

    @media(max-width: 470px) {
        .payment__listProducts-title,
        .payment__deliveryTitle,
        .payment__typeTitle,
        .payment__summaryTitle {
            text-align: center;
        }
    }

    @media(max-width: 510px) {
        

        .payment__summaryInfo {
            width: 100%;
            text-align: right;
        }
    }
`;