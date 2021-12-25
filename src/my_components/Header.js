import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar-brand">
      <ul className="nav justify-content-center bg-dark">
        <li className="nav-item btn btn-danger m-2">
            Add
        </li>
        <li className="nav-item btn btn-danger m-2">
            Active
        </li>
        <li className="nav-item btn btn-danger m-2" onClick={()=>{props.allDelete(props.todos)}}>
            Delete all
        </li>
      </ul>
    </nav>
  );
}


