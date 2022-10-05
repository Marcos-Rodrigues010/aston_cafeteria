import React from 'react';
import { SectionTitle } from './styled';

const App = (props) => {

    return(
        <SectionTitle width={props.width} colorBar={props.colorBar} colorTitle={props.colorTitle}>
            <div className='section__bar'></div>
            <div className='section__title'>{props.title}</div>
        </SectionTitle>
    );
};

export default App;