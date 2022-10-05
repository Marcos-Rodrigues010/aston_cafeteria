import React, { useEffect, useState, useContext } from 'react';
import { ItemCartPayment } from './styled';
import utils from '../../utils/utils';

import { Context } from '../../contexts/context';


const App = ({ items, item, selectedItems, setSelectedItems }) => {

  const { state } = useContext(Context);

  const handleCheck = (e) => {
    const newArray = [...selectedItems];
    if(e && e.target.checked) {
      const newItem = items.find(item => item.id.toString() === e.target.accessKey);
      newArray.push(newItem);
    } else {
      const index = newArray.findIndex(item => item.id.toString() === e.target.accessKey);
      newArray.splice(index, 1);
    }
    setSelectedItems(newArray);
  };

  const verifyChecked = () => {
    const v = selectedItems.some(i => i.id === item.id);
    return v;
  };
  
  return(
    <>
      {item &&
        <ItemCartPayment url={item.nameImage}>
            <div className='itemCartPayment__container'>
                <div className='item__checkbox'><input type='checkbox' checked={verifyChecked()} accessKey={item.id} onChange={handleCheck}/></div>
                <div className='item__image'></div>
                <div className='block__aux'>
                  <div className='item__name'>{item.name}</div>
                  <div className='item__value'>{utils.formatDoubleToMoney(item.price)}</div>
                </div>
            </div>
        </ItemCartPayment>
      }
    </>
  );
};

export default App;