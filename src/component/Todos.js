import React from "react";
import TodoItem from "./TodoItem";

export const Todos = (props) => {
  let mystyle = {
    
    minHeight: "70vh",   // Minimum height
    margin: "40px auto", // Centers the div horizontally
    justifyContent: "center", // Centers content horizontally
    alignItems: "center", // Centers content vertically
    width: "80%",        // Responsive width
    maxWidth: "700px",   // Prevents it from becoming too wide
    padding: "20px",     // Adds space inside
    
  };
  
  return (
    <div className="container" style={mystyle}>
      <h3 className="text-light my-3"> Todos List </h3>
      {props.todos.length===0? "No Todos to display" : 
      props.todos.map((todo)=>{
        return ( <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}/>
        )
      })
    }
    </div>
  );
};

export default Todos;
