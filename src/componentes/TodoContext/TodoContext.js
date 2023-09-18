import React from "react";
import {useLocalStorage} from './useLocalStorage';

const TodoContext= React.createContext();

function TodoProvider ({children}) { 
        const {
            item: todos, //esto seria de renombrar las variables.
            saveItem: saveTodos, 
            loading, 
            error} =  useLocalStorage('TODOS_v1', []);

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
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
        };

        const deleteTodo = (text) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        };

        return (
            //aca en provider en value exponemos todo lo que queramos compartir 
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}> 
            {children}
        </TodoContext.Provider>
    )
}



export {TodoContext,TodoProvider};

