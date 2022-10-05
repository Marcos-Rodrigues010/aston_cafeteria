import styled from 'styled-components';

export const SectionTitle = styled.div`

    width: ${props => props.width}px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .section__bar {
        width: 50%;
        height: 8px;
        background-color: ${props => props.colorBar}
    }

    .section__title {
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: 2px;
        color: ${props => props.colorTitle}
    }
`;