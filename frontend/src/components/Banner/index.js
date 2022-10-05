import React from 'react';
import { Banner } from './styled';

const App = () => {

    return(
        <Banner>
            <div className='banner'>
                <div className='banner__slogan'>
                    <div className='banner__brand'>Aston Cafeteria</div>
                    <div className='banner__message'>Uma nova experiência em café</div>
                </div>
            </div>
        </Banner>
    );
};

export default App;