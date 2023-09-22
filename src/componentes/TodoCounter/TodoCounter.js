import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
const {
  completedTodos,
  totalTodos,
} = React.useContext(TodoContext);

  return (
    totalTodos === completedTodos & totalTodos !== 0?    
    <h1 className="TodoCounter">
      Felicitaciones, has completado todos los TODOs!!!
    </h1>
      :
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span>
       de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
