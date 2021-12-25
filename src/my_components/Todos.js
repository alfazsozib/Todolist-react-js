import React from 'react';
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='text-center'>Todos List</h3>

            {props.todos.length===0? 'Please Input Todos':
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete}/>
            })
                
            }
            
        </div>
    )
}









// <div className=" container">
// <div class="card m-3">
//   <div class="card-header">Tasks 1</div>
//   <div class="card-body">
//     <h5 class="card-title">Title Of The Task</h5>
//     <p class="card-text">
//       With supporting text below as a natural lead-in to additional
//       content.
//     </p>
//     <a href="#" class="btn btn-danger">
//       Delete
//     </a>
//   </div>  
// </div>
// <div class="card m-3">
//   <div class="card-header">Tasks 2</div>
//   <div class="card-body">
//     <h5 class="card-title">Title Of The Task</h5>
//     <p class="card-text">
//       With supporting text below as a natural lead-in to additional
//       content.
//     </p>
//     <a href="#" class="btn btn-danger">
//       Delete
//     </a>
//   </div>  
// </div>
// <div class="card m-3">
//   <div class="card-header">Tasks 3</div>
//   <div class="card-body">
//     <h5 class="card-title">Title Of The Task</h5>
//     <p class="card-text">
//       With supporting text below as a natural lead-in to additional
//       content.
//     </p>
//     <a href="#" class="btn btn-danger">
//       Delete
//     </a>
//   </div>  
// </div>
// <div class="card m-3">
//   <div class="card-header">Tasks 4</div>
//   <div class="card-body">
//     <h5 class="card-title">Title Of The Task</h5>
//     <p class="card-text">
//       With supporting text below as a natural lead-in to additional
//       content.
//     </p>
//     <a href="#" class="btn btn-danger">
//       Delete
//     </a>
//   </div>  
// </div>
// <div class="card m-3">
//   <div class="card-header">Tasks 5</div>
//   <div class="card-body">
//     <h5 class="card-title">Title Of The Task</h5>
//     <p class="card-text">
//       With supporting text below as a natural lead-in to additional
//       content.
//     </p>
//     <a href="#" class="btn btn-danger">
//       Delete
//     </a>
//   </div>  
// </div>
// </div>