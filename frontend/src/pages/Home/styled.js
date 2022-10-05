import styled from 'styled-components';

export const Home = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 0 0;
    animation: fade 0.3s;

    .home__content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 130px;
        margin-top: 140px;
        padding-bottom: 100px;
    }

    .home__feedback-section {
        background-color: var(--bg-secondary);
        width: 100%;
        padding: 50px;
    }
`;