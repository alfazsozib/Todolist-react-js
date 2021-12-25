import React from "react";

export const TodoItem = ({todo,onDelete}) => {
  return (

    <div class="card m-3">
    <div class="card-header">
    <h5 class="card-title my-1"> Task Number - {todo.sno}</h5>
    </div>
    <div class="card-body">
      <h4 class="card-text my-1">{todo.title}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Remove</button>
    </div>
  </div>

  );
};
