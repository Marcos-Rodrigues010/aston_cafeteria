import React from 'react';
import './App.css';

import Routes from './routes';

import Message from './components/Message';
import Signin from './components/Signin';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Message />
      <Signin />
      <Header />
      <Banner />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;