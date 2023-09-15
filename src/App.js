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

function App() {
//aca en una variable ponemos lo datos que se tiene el localstore para pasar en TODOs
const localStorageTodos = localStorage.getItem('TODOS_v1');
let parsedTodos;
if (!localStorageTodos){
  localStorage.setItem('TODOS_v1', JSON.stringify([]))
  parsedTodos = [];
}else{
  parsedTodos = JSON.parse(localStorageTodos)
}


//conteo TODO: le pasamos por defecto los defaultTodos declarado mas arriba
  const [todos, setTodos] = React.useState(parsedTodos);

//conteo de completados: que solamente me traiga los todo con completed true
  const completedTodos = todos.filter(todo => todo.completed).length; 
  const totalTodos=todos.length;//obtener el total de TODOs

  //buscador del campo txt
const [searchValue, setSearchValue] = React.useState('');
console.log('lo que busca el usuario es: '+searchValue);

// buscar TODOs
  const searchedTodos = todos.filter (
    (todo) => {//con el return hacemos que nos retorne todo los datos que se parezca en la busqueda
      //toLowerCase => convertimos en minuscula para que no tenfa diferencias en la busqueda      
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )
  
const saveTodos = (newTodos) => {
  localStorage.setItem('TODOS_v1', JSON.stringify(newTodos));
  setTodos(newTodos);
};

// creamos aquie la logica del completado
const completeTodo = (text) => {
  const newTodos = [...todos]; //con estos 3 puntitos ... decimos que queremos que nos realice una copia de lo que tenga TODOs
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
  );//en sete todoIndex obtenemos el index
  newTodos[todoIndex].completed = true;//aca es en donde le decimos que esta completado 
  saveTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = [...todos]; //con estos 3 puntitos ... decimos que queremos que nos realice una copia de lo que tenga TODOs
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
  );
  newTodos.splice(todoIndex, 1);//aca eliminamos el TODOs con el splice
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