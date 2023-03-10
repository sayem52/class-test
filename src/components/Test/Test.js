import React from 'react';
import './Test.css';

const Test = ({test}) => {
     const {id,name,logo}=test;
    return (
         <div>
    
            
            <div className='test'>
                <img src={logo} alt="" />
                <h2>name: {name}</h2>
            
        
            </div>
         </div>
        
    );
};

export default Test;