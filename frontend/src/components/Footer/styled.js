import styled from 'styled-components';

export const Footer = styled.footer`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-darkness);
    padding: 30px 0;

    .footer__social-icons {
        display: flex;
        gap: 40px;
        margin-top: 30px;

        .footer__icon {
            color: #443C3C;
            font-size: 3.5rem;
        }
    }
`;