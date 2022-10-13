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

export const ItemCartPayment = styled.div`

.itemCartPayment__container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding: 12px;
  background-color: #D5D5D5;
  border-radius: 15px;
  margin-bottom: 20px;
  bottom: 0;
  position: relative;
  transition: all 0.1s;

  &:hover {
      background-color: #CCC;
      bottom: 3px;
      box-shadow: 5px 5px 15px 1px #DDD;
  }

  .item__checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
  
      input {
          width: 15px;
          height: 15px;
      }
  }

    .item__image{
      min-width: 50px;
      min-height: 50px;
      border-radius: 50%;
      background-image: url(${props => getImage(props.url)});
      background-repeat: no-repeat;
      background-size: 50px 50px;
      background-position: center;
    }

    .block__aux {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .item__name {
        flex: 1;
    }

    .item__quantity {
        width: 50px;
        border-radius: 4px;
        padding: 3px;
        outline: 0;
    }

    .item__value {
      text-align: right;
      color: var(--color-default-money);
    }
}

@media(max-width: 650px) {

    .block__aux {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 10px;
    }
}

@media(max-width: 470px) {
    .itemCartPayment__container {
        gap: 10px;
    }
}

`;