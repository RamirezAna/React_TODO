import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading.js';
import { TodosError } from '../TodosError/TodosError.js';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos.js';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoForm } from '../TodoForm/TodoForm'; 
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../TodoContext/TodoContext';


function AppUI () {

  const { 
      loading,
      error, 
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,  
      setOpenModal,
  } = React.useContext(TodoContext);

    return (  
      <>
        <TodoCounter /> 
        <TodoSearch />

        {/* encapsulamos dentro de un consumer para que pueda acceder a todas las propiedades */}
      
        <TodoList>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length === 0) &&
              <EmptyTodos/>}
              
              {searchedTodos.map(todo =>(
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)} //encapsulamos una funcion en otra () => (porque aca no podemos enviar una funcion directa como ejecutada)
                onDelete={() => deleteTodo(todo.text)} //aca hacemos la eliminacion misma logica que la de arriba
                />))
              }
          </TodoList>
      
          {/* para comentar: control + k + c */}
          <CreateTodoButton setOpenModal={setOpenModal}/>
          
          {/* controlamos que este abierto para llamar al modal */}
          {openModal && (
            <Modal> 
              <TodoForm />
            </Modal>  
          )}  
          
          
      </>
      );
}

export { AppUI };
