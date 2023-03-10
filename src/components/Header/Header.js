import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div>
                 <h1>Class Test Crackers</h1>
            </div>
            <div>
             
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>

            </div>
        </div>
    );
};

export default Header;