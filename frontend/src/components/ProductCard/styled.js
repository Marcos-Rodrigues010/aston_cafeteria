import styled from 'styled-components';

import burntTimber from '../../assets/burntTimber.jpg';
import jamesCoffee from '../../assets/jamesCoffee.jpg';
import kalinaw from '../../assets/kalinaw.jpg';
import kalinawKit from '../../assets/kalinawKit.jpg';
import mnl from '../../assets/mnl.jpg';
import pause from '../../assets/pause.jpg';
import stir from '../../assets/stir.jpg';
import tallinh from '../../assets/tallinh.jpg';

const getImage = (name) => {
    
    switch (name) {
        case "burntTimber":
            return burntTimber;
        case "jamesCoffee":
            return jamesCoffee;
        case "kalinaw":
            return kalinaw;
        case "kalinawKit":
            return kalinawKit;
        case "mnl":
            return mnl;
        case "pause":
            return pause;
        case "stir":
            return stir;
        case "tallinh":
            return tallinh;
    }
}

export const ProductCard = styled.div`

    width: 280px;
    height: 430px;
    background-color: #EEE;
    position: relative;
    bottom: 0;
    right: 0;
    transition: all 0.3s ease;
    box-shadow: 5px 5px 15px 1px #CCC;
    
    &:hover {
        bottom: 10px;
        right: 5px;
        box-shadow: 5px 5px 15px 1px #DDD;
    }

    .product-card__image {
        height: 200px;
        background-image: url(${props => getImage(props.url)});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
    }

    .product-card__infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 130px;
        padding: 10px;
        cursor: pointer;

        .product-card__infos-title, .product-card__infos-value {
            text-align: center;
            font-weight: 700;
            letter-spacing: 2px;
        }

        .product-card__infos-value {
            font-size: 1.2rem;
            padding-top: 10px;
        }

        .product-card__infos-wheight {
            font-weight: 700;
            font-size: 0.8rem;
            color: #BBB;
        }
    }

    .product-card__purchase-information {
        height: 100px;
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 12px;
        cursor: pointer;

        .product-card__purchase-information-icons {

            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-size: 1.5rem;
            }
        }

        .product-card__btn-purchase {
            display: flex;
            justify-content: center;

            .btn-purchase {
                text-align: center;
                width: 200px;
                background-color: #FFF;
                border-radius: 5px;
                padding: 5px 0;
                font-weight: 700;
                letter-spacing: 2px;
                cursor: pointer;

                &:hover {
                    background-color: #999;
                    color: #FFF;
                }
            }
        }
    }
    
`;