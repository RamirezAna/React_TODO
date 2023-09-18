import React from "react";
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch( ){
  const {
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext);
 
    return (
      <div className="search-container">
        <input 
        placeholder="Ingresar aqui la tarea"
        className="TodoSearch"
        value={searchValue}//el valor de la busqueda
        onChange={(event) => {
          console.log('escribiste en el search')
          setSearchValue(event.target.value);
        }}
        />
     </div>
    );
  }

  export {TodoSearch};

