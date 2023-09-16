import { TodoCounter } from './componentes/TodoCounter/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch/TodoSearch';
import { TodoList } from './componentes/TodoList/TodoList';
import { TodoItem } from './componentes/TodoItem/TodoItem';
import { CreateTodoButton } from './componentes/CreateTodoButton/CreateTodoButton';

import './App.css';
import React from 'react';
/*
const   defaultTodos = [
  {text:"Limpiar el patio", completed:true},
  {text:"Lavar los cubiertos", completed:false} ,
  {text:"Cocinar bien rico", completed:true},  
]
 localStorage.setItem('TODOS_v1', defaultTodos);
*/
// localStorage.removeItem('TODOS_v1');

//
function useLocalStorage(itemName, inicialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([inicialValue]))
    parsedItem = [inicialValue];
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const  [item, setItem] =  React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] =  useLocalStorage('TODOS_v1', []);

  const completedTodos = todos.filter(todo => todo.completed).length; 
  const totalTodos=todos.length;//obtener el total de TODOs

  const [searchValue, setSearchValue] = React.useState('');
  console.log('lo que busca el usuario es: '+searchValue);

  const searchedTodos = todos.filter (
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )
 
const completeTodo = (text) => {
  const newTodos = [...todos]; //con estos 3 puntitos ... decimos que queremos que nos realice una copia de lo que tenga TODOs
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
  );
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = [...todos]; 
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
  );
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
}

  return (  
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
      //aca le pasamos las variables a TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}

      />

      <TodoList>
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
    <CreateTodoButton/>

    </>
  );
}


export default App; 