import styled from 'styled-components';
import banner from '../../assets/banner-cafeteria.jpeg';

export const Banner = styled.div`

    height: 400px;

    .banner {
        width: 100%;
        height: 400px;
        background-image: url(${banner});
        background-position: 0px -800px;
        background-repeat: no-repeat;
        background-size: cover;

        .banner__slogan {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 400px;
            background-color: rgba(0, 0, 0, 0.5);
            color: var(--color-font-secondary);

            .banner__brand {
                font-family: 'Allura', Arial, sans-serif;
                font-size: 7rem;
            }

            .banner__message {
                font-family: 'Inter', Arial, sans-serif;
                font-size: 1.7rem;
                font-weight: 700;
                letter-spacing: 4px;
                margin-top: -10px;
            }
        }
    }

    @media (max-width: 1200px) {

        .banner {
            background-position: 0px -600px;
        }
    }

    @media (max-width: 1000px) {

        .banner {
            background-position: 0px -500px;
        }
    }

    @media (max-width: 900px) {

        .banner {
            background-position: 0px -400px;
        }
    }

    @media (max-width: 800px) {

        .banner {

            background-position: 0px -200px;

            .banner__slogan {
                .banner__brand {
                    font-size: 6rem;
                }
            }
        }
    }

    @media (max-width: 600px) {

        .banner {

            background-position: 0px -80px;

            .banner__slogan {

                .banner__brand {
                    font-size: 5rem;
                }
                .banner__message {
                    font-size: 1.3rem;
                }
            }
        }
    }

    @media (max-width: 480px) {

        .banner {

            background-position: 0px 0px;

            .banner__slogan {

                .banner__brand {
                    font-size: 4rem;
                }
                .banner__message {
                    font-size: 1rem;
                }
            }
        }
    }
`;