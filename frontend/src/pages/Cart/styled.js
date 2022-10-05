import styled from 'styled-components';

export const Cart = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    .cart {
        width: 100%;
        margin-top: 30px;
    }
    .CartList {
        list-style: none;
    }

    .item {
        border: 1px solid #000;
        display: flex;
        padding: 10px;
        align-items: center;
        margin-bottom: 20px;
        border-radius: 20px;
    }

    .item__image, .image {
        width: 70px;
        height: 70px;
        display: block;
    }

    .image {
        width: 95%;
        margin: 0 auto;
        border-radius: 50%;
    }

    .item__description, .item__removeFromCart, .item__removeFavorite {
        padding: 0 10px;
    }

    .item__description {
        flex: 1;
    }

    .item__actions {
        display: flex;
    }

    .item__removeFromCart, .item__removeFavorite {
        font-size: 1.3rem;
    }

    .item__btnComprar {
        cursor: pointer;

        &:hover {
            color: #176EE2
        }
    }

    .withoutCartTitle {
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

    @media(max-width: 900px) {
        .withoutCartTitle h1{
            font-size: 1.7rem;
        }
    }

    @media(max-width: 500px) {
        .item {
            flex-direction: column;
            gap: 20px;
        }

        .item__description {
            text-align: center;
        }
    }
    
    @media(max-width: 760px) {
        .withoutCartTitle h1{
            font-size: 1.3rem;
        }
    }
`;