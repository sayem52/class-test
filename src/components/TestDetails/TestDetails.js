import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../components/TestDetails/TestDetails.css'
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'


const TestDetails = () => {
    
      const test=useLoaderData();
      const ques=test.data;
      const questions=ques.questions;
      console.log(questions);
       
      const handleC=(id)=>{
        for (const element of questions) {
           if(id===element.id){
            alert(element.correctAnswer);
            
            
           }
          
        }
        
      }
      
    
    return (
        <div>
             
             {

                <ol>
                  {questions.map(quiz =>
                  <li key={quiz.id} >
                    <h5 >{quiz.question} </h5><button onClick={()=>handleC(quiz.id)} ><EyeIcon  className="h-6 w-6 text-blue-500 img-icon"/></button>
                    <Option
                    key={quiz.id}
                     quiz={quiz}
                    ></Option>
                     
                    </li>

                    )}
                </ol>
                
                
             }
             
       
       

             
            
        </div>
    );
};

export default TestDetails;