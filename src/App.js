import "./App.css";
import Header from "./my_components/Header";
import {Todos} from "./my_components/Todos";
import {Footer} from "./my_components/Footer";
import React, { useState } from 'react';
import AddTodo from "./my_components/AddTodo";

function App() {

  const onDelete = (todo)=>{
    console.log('Hey Ami Muche Gechi',todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem('todos');
  };

  const addTodo = (title,description)=>{
    console.log('Adedddd')
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
      sno= todos[todos.length-1].sno + 1;
    }
    const myTodo ={
      sno:sno,
      title:title,
      description:description
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)

    if (localStorage.getItem('todos')=== 'undefined') {
      localStorage.setItem('todos',JSON.stringify(todos)); 
    }
  }

  function allDelete(TodoItem) {
    console.log(typeof(TodoItem));
      
 
  }

  const [todos,setTodos] =  useState([ ])
  return(
  <>
    <Header title = 'My Todos List' allDelete={allDelete}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
  </>  

  );
}

export default App;
