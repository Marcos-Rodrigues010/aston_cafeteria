import styled from 'styled-components';

export const Feedback = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    .feedback__title {
        letter-spacing: 3px;
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--color-font-default-dark);
    }

    .feedback__input-name {
        width: 300px;
        height: 35px;
        padding: 0 12px;
    }

    .feedback__input-text {
        width: 800px;
        height: 200px;
        padding: 12px;
        resize: none;
    }

    .feedback__input-text, .feedback__input-name {
        background-color: var(--bg-default-light);
        border-radius: 10px;
        font-weight: 700;
        border: 0;
        outline: 0;

        &::placeholder {
            color: #736767;
            font-size: 1rem;
            letter-spacing: 2px;
        }
    }

    .feedback__btn {
        padding: 10px;
        background-color: var(--bg-default-light);
        width: 100px;
        text-align: center;
        border: 0;
        outline: 0;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            background-color: var(--bg-darkness);
            color: #FFF;
        }
    }

    @media (max-width: 900px) {
        .feedback__input-text {
            width: 600px;
        }
    }

    @media (max-width: 680px) {

        align-items: center;

        .feedback__input-text {
            width: 400px;
        }
    }

    @media (max-width: 500px) {

        .feedback__title {
            text-align: center;
            font-size: 1.5rem;
        }

        .feedback__input-text {
            width: 300px;
        }
    }
`;