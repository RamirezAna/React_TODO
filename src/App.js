import { TodoCounter } from './componentes/TodoCounter/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch/TodoSearch';
import { TodoList } from './componentes/TodoList/TodoList';
import { TodoItem } from './componentes/TodoItem/TodoItem';
import { CreateTodoButton } from './componentes/CreateTodoButton/CreateTodoButton';

import './App.css';
import React from 'react';

const   defaultTodos = [
  {text:"Limpiar el patio", completed:true},
  {text:"Lavar los cubiertos", completed:false} ,
  {text:"Cocinar bien rico", completed:true}
]

function App() {
  return (  
    <>
      <TodoCounter total={15} completed={10}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text}/>))
        }
      </TodoList>
  
  {/* para comentar: control + k + c */}
    <CreateTodoButton/>

    </>
  );
}


export default App; 