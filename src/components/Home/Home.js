import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Test from '../Test/Test';
import './Home.css';
import logo from '../../Images/header.jpg';

const Home = () => {
    const callTests = useLoaderData();
    const classTests = callTests.data;
    

    return (
        <div>
            <div className='about'>
                <div>
                   <img src={logo} alt="" />
                </div>
                <div className='header-title'>
                    <h3>Class test means any supervised written examination of not less than one hour but not exceeding two hours in duration 
                         in a particular module that forms part of continuous assessment.</h3>
                </div>
                
            </div>
            <div >
                {
                    classTests.map(sub => <Test
                        key={sub.id}
                        sub={sub}
                        
                    >

                    </Test>)
                }
            </div>
        </div>

    );
};

export default Home;