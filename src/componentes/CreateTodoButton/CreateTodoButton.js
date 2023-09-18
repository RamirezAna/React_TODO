import React from 'react';
import './CreateTodoButton.css';
 
function CreateTodoButton({ setOpenModal }) {
  
  return (
      <button className="CreateTodoButton"
      onClick={() => {setOpenModal(state => !state)}} /*tate => !state => este lo que hace es recibe el estado y luego lo pone a inversa, tipo true a false y / o false a true*/> 
        +</button>
  );
}

export { CreateTodoButton };

