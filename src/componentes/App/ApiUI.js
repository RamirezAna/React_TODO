import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading.js';
import { TodosError } from '../TodosError/TodosError.js';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos.js';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';


function AppUI (
    {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }
) {
    return (  
        <>
          <TodoCounter total={totalTodos} completed={completedTodos}/>
          <TodoSearch
          //aca le pasamos las variables a TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
    
          />
    
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
        <CreateTodoButton/>
    
        </>
      );
}

export { AppUI };
