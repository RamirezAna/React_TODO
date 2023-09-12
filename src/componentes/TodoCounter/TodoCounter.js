import "../TodoCounter/TodoCounter.css";

function TodoCounter({ total, completed }){
    return (
      <h1 className="title">
        Has completado {completed} de {total} TODOs
      </h1>
    );
  }

  export {TodoCounter};
