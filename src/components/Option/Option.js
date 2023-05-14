import React from 'react';
import Oneby from '../Oneby/Oneby';

const Option = ({quiz}) => {
      const {options} =quiz;
    return (
        <div>
            {
              options.map(option=> <Oneby
               option={option}
              ></Oneby>)
            }
            
          
        </div>
    );
};

export default Option;