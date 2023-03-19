import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const tasks=[
  {
  name:"Eat",
  id:1,
  state:false
  },
  {
    name:"Sleep",
    id:2,
    state:false
  },
  {
    name:"Repeat",
    id:3,
    state:false
    }


]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App tasks={tasks} />
  
);



