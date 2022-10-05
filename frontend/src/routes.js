import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './pages/Signup';
import Product from './pages/Product';
import Payment from './pages/Payment';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound';


export default () => {
    return(
        <Routes>
            {/* <Route path='/' element={<RequireAuth><Home /></RequireAuth>} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/product/:idProduct' element={<Product />} />
            <Route path='/payment/:idProduct' element={<Payment />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};