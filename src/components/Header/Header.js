import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex'>
            <div>
                 <h1>Class Test Crackers</h1>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>

            </nav>
        </div>
    );
};

export default Header;