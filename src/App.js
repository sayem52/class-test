
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TestDetails from './components/TestDetails/TestDetails';
import Test from './components/Test/Test';


function App() {
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/',
            loader:async ()=> {
              return fetch('https://openapi.programming-hero.com/api/quiz');
            },
            element: <Home></Home> 
          },
          {
            path:'/sub/:subId',
            loader:async ({params})=> {
             
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.subId} `);
            },
              
           
            element:<TestDetails></TestDetails>

          },
          {
            path:'/statistics',
            element: <Statistics></Statistics>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          }
        ]
      
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider
      router={router} 
      >

      </RouterProvider>
      
    </div>
  );
}

export default App;
