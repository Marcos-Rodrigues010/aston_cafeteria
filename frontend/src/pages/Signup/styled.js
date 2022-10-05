import styled from 'styled-components';

export const Signup = styled.div`
    
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .signup__form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .signup__form-inputs-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 60px;
        padding: 40px;
    }

    .signup__input{
        width: 300px;
        padding: 10px;
    }

    .signup__btn {
        width: 300px;
        padding: 10px;
        border: 0;
        outline: 0;
        background-color: var(--bg-darkness);
        color: var(--color-font-secondary);
        font-size: 0.9rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: var(--bg-default);
        }
    }

    input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`;