import React from "react";
import "./TodosLoading.css"


function TodosLoading(){
 
    return (
        <>
          <li className={`TodoItem-loading cat-0`}>
            
            <p className={`TodoItem-p-loading`}>
            <span className="loader-1"></span>
            </p>
          </li>
        </>
      );
  }

  export {TodosLoading};