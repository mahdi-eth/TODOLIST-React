import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoPromption from './JS/todoPromption';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoDisplay from './JS/todoDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoPromption/>
  </React.StrictMode>
);

root.render(TodoPromption());


