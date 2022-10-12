import styled from 'styled-components';

export const Favorites = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    animation: fade 0.8s;

    .favorites {
        width: 100%;
        margin-top: 30px;
    }
    .favoritesList {
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        width: 100%;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
    }

    .item__description, .item__addCart, .item__removeFavorite {
        padding: 0 10px;
    }

    .item__description {
        flex: 1;
    }

    .item__actions {
        display: flex;
    }

    .item__addCart, .item__removeFavorite {
        font-size: 1.3rem;
    }

    .item__btnComprar {
        cursor: pointer;

        &:hover {
            color: #176EE2
        }
    }

    .withoutFavoriteTitle {
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
        .withoutFavoriteTitle h1{
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
        .withoutFavoriteTitle h1{
            font-size: 1.3rem;
        }
    }
`;
