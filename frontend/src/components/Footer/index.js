import React from 'react';
import { Footer } from './styled';

import SectionTitle from '../SectionTitle';
import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const App = () => {


    return (
        <Footer>
            <SectionTitle title="Siga-nos" width="200" colorBar="#887E7E" colorTitle="#887E7E"/>
            <div className='footer__social-icons'>
                <span className='footer__icon'><BsInstagram /></span>
                <span className='footer__icon'><AiFillFacebook /></span>
                <span className='footer__icon'><BsTwitter /></span>
                <span className='footer__icon'><BsLinkedin /></span>
            </div>
        </Footer>
    );
    
};

export default App;