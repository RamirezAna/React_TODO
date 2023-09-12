import "../TodoList/TodoList.css"

function TodoItem(props){
    return(
      <li className="todo-item">
        <span>V</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  export {TodoItem};