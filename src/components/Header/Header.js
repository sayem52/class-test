import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='headC'>
                 <h1>Class Test Crackers</h1>
            </div>
            <div className='cn'>
                <Link className='navB' to='/'>Home</Link>
                <Link className='navB' to='/statistics'>Statistics</Link>
                <Link className='navB' to='/blog'>Blog</Link>

            </div>
        </div>
    );
};

export default Header;