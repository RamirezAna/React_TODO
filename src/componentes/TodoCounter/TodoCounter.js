import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (

    total == completed & total != 0?    
    <h1 className="TodoCounter">
      Felicitaciones, has completado todos los TODOs!!!
    </h1>
      :
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
