import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <button
        className={`check ${props.completed && "check--active"}`}
        onClick={props.onComplete}
      ></button>
      <p>{props.text}</p>
      <button   
        className="close-item"
        onClick={props.onDelete} 
      ></button>
    </li>
  );
}

export { TodoItem };

