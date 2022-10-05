import styled from 'styled-components';

export const Orders = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    .orders {
        padding: 20px;
        width: 100%;
    }

    .orders__list {
        list-style: none;
        width: 100%;
    }

    .orders__item {
        display: flex;
        gap: 20px;
        border-radius: 20px;
        border: 1px solid #000;
        padding: 20px;
        margin-bottom: 20px;
    }

    .item__products {
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .item__value {
        color: var(--color-default-money);
    }

    .item__date, .item__products, .item__situation {
        color: var(--color-font-default-dark);
    }

    .withoutOrdersTitle {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 8px;
        background-color: var(--bg-default-light);
        border-radius: 20px;
        margin-bottom: 30px;

        h1 {
            color: #707070;
            text-align: center;
        }
    }

    @media(max-width: 650px) {
        .orders__item {
            flex-direction: column;
        }
    }

    @media(max-width: 900px) {
        .withoutOrdersTitle h1{
            font-size: 1.7rem;
        }
    }

    @media(max-width: 760px) {
        .withoutOrdersTitle h1{
            font-size: 1.3rem;
        }
    }
`;