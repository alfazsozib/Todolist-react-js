import React from "react";
import { useState } from "react";

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !description){
            alert('Title or Description Cannot Be Blank');            
        }
        // props.addTodo(title,description)
        else{
        setTitle('');
        setDescription('');
        }
    }
  return (

    <div>
      <form onSubmit={submit} className="container center">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Add Your Task Title
          </label>
          <input
            type="text"
            value={title} onChange={(e)=>setTitle(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter Your Description
          </label>
          <textarea
            value={description} onChange={(e)=>setDescription(e.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
