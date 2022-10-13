import React, { useEffect, useState } from 'react';
import { Home } from './styled';
import SectionTitle from '../../components/SectionTitle';
import ProductCard from '../../components/ProductCard';
import Feedback from '../../components/Feedback';

import { api } from '../../api';


const App = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect( () => {

        const getProducts = async () => {
            const data = await api.findAllProducts();
            setProductsList(data);
        }

        getProducts();
        window.scroll(0, 0);
    }, []);

    return (
        <Home>
            <SectionTitle title="Nossos produtos" width="300" colorBar="#C4C4C4" colorTitle="#000"/>
            <div className='home__content'>
                {productsList && productsList.map((item, key) => {
                    return <ProductCard product={item} key={key}/>
                })}
            </div>
            <div className='home__feedback-section'>
                <Feedback />
            </div>
        </Home>
    );
    
};

export default App;