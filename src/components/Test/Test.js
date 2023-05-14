import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../components/Test/Test.css'


const Test = ({sub}) => {
      const {id,name,logo} =sub;
      const navigate = useNavigate();
      const handleNavigate=()=>{
        navigate(`/sub/${id}`);
      }
    return (
         <div>
             
             <CardGroup className='mar'>
                <Card >
                    <Card.Img className="img-s" variant="top" src={logo} />
                    <Card.Body>
                    <Card.Title>Name:{name}</Card.Title>
                       <button onClick={handleNavigate}> Start Practice </button> 
                    </Card.Body>
                    
                      
                    
                </Card>
                
            </CardGroup>
             

        
            
         </div>
        
    );
};

export default Test;