import React, { useEffect, useState, useContext } from 'react';
import { ItemCartPayment } from './styled';
import utils from '../../utils/utils';

import { Context } from '../../contexts/context';


const App = ({ items, item, selectedItems, setSelectedItems }) => {

  const { state, dispatch } = useContext(Context);

  const handleCheck = (e) => {
    const newArray = [...selectedItems];
    if(e && e.target.checked) {
      const newItem = items.find(item => item.id.toString() === e.target.accessKey);
      newItem.quantity = 1;
      newArray.push(newItem);
    } else {
      const index = newArray.findIndex(item => item.id.toString() === e.target.accessKey);
      newArray.splice(index, 1);
    }
    setSelectedItems(newArray);
  };

  useEffect(() => {
    selectedItems.forEach(product => {
      document.getElementById(product.id).value = product.quantity;
    })
  }, [selectedItems]);

  const verifyChecked = () => {
    const v = selectedItems.some(i => i.id === item.id);
    return v;
  };

  const setQuantityItem = (e) => {
    let products = [...selectedItems];
    const index = products.findIndex(product => product.id === Number(e.target.accessKey));

    if(Number(e.target.value) < 0 || Number(e.target.value) > 3) {
      products[index].quantity = 1;
      setSelectedItems(products);
      return dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          text: 'Selecione entre 1 e 3 unidades de um mesmo produto.',
          icon: 'BiError',
          colorIcon: '#FFC700',
          colorText: '#707070'
        }
      });
    };
    
    products[index].quantity = Number(e.target.value);
    setSelectedItems(products);
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
                  <div>
                    {selectedItems.find(product => product.id === item.id) &&
                      <input 
                      type='number' 
                      className='item__quantity' 
                      accessKey={item.id}
                      id={item.id} 
                      onChange={setQuantityItem}
                      min='1'
                      max='3'/>
                    }
                  </div>
                  <div className='item__value'>{utils.formatDoubleToMoney(item.price)}</div>
                </div>
            </div>
        </ItemCartPayment>
      }
    </>
  );
};

export default App;