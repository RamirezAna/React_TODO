import React from "react";
import "./TodoSearch.css";


function TodoSearch({
  //aca es en donde recibimos las variables de la clase App.js
  search, 
  setSearch
}){
 
    return (
      <div className="search-container">
        <input 
        placeholder="Ingresar aqui la tarea"
        className="TodoSearch"
        value={search}//el valor de la busqueda
        onChange={(event) => {
          console.log('escribiste en el search')
          setSearch(event.target.value);
        }}
        />
     </div>
    );
  }

  export {TodoSearch};

