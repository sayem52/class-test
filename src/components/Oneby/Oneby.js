import React from 'react';
import '../../components/Oneby/Oneby.css'

const Oneby = ({option}) => {
    return (
        <div className='size-op'>
            <label>
                <input type="radio" name = "" value=" " />
                  {option}
            </label>
        </div>
    );
};

export default Oneby;