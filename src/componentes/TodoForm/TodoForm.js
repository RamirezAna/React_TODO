import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm(){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const {
        newTodoValue,
        setNewTodoValue
    } = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();//con esto de cancela a que la pagina se descarge
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () =>{ 
        setOpenModal(false);
    };

    // const onChange = (event) => {
    //     console.log('Aqui '+event.target.value);
    //     setNewTodoValue (event.target.value);
    // };

    return(
        <form onSubmit={onSubmit} 
        className="TodoForm">
            <input
                placeholder="Ingrese la tarea"
                value={newTodoValue}
                // onChange={onChange}
            />
            <div className="TodoForm-btnContainer">
                <button 
                type="button"
                onClick={onCancel}
                className="TodoForm-btn TodoForm-btn--cancel">                
                Cancelar
                </button>

                <button 
                type="submit"
                className="TodoForm-btn TodoForm-btn--add">                
                Agregar
                </button>
            </div>
        </form>
    )
}


export { TodoForm };
