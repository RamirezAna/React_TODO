import { AppUI } from './ApiUI'; 
import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext';

// const   defaultTodos = [
//   {text:"Limpiar el patio", completed:true},
//   {text:"Lavar los cubiertos", completed:false} ,
//   {text:"Cocinar bien rico", completed:true},  
// ]
 //localStorage.setItem('TODOS_v1', defaultTodos);

// localStorage.removeItem('TODOS_v1');
 
function App() {
 return (
  //enviamos dentro de nuestro contexto
    <TodoProvider>
        <AppUI />
    </TodoProvider>
 );
  
}

export default App; 

