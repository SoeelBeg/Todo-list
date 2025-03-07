import "./App.css";
import Header from "./component/Header";
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo";
import Footer from "./component/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import About from "./component/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am onDelete of todo", todo);

    // deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />

        <Switch >
          <Route exact path="/" render={()=>{
            return(
              <>
                 <AddTodo addTodo={addTodo} />
                 <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
