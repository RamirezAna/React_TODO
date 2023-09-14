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
  {text:"Cocinar bien rico", completed:true},
]

function App() {

  //aca declaramos para el conteo de TODO
  //le pasamos por defecto los defaultTodos declarads mas arriba
  const [todos, setTodos] = React.useState(defaultTodos);

    const completedTodos = todos.filter(todo => todo.completed).length; //que solamente me traiga los todo con completed true
    const totalTodos=todos.length;//obtener el total

   //se le pasa como arrays porque tiene en cuenta 2 parametros
   //porque el estado no solo de consume si no tambien se actualiza
  //ej.(la variable no es fijo)ejemplo:  estado => el que registra el usuario, setEstado => en donde se actualiza lo que va registrando el usuario
  const [search, setSearch] = React.useState('');
  console.log('lo que busca el usuario es: '+search);


  return (  
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
      //aca le pasamos las variables a TodoSearch
      search={search}
      setSearch={setSearch}

      />

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