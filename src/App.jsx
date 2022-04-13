// import { useState } from "react";
// import logo from "./logo.svg";
import React from "react";
import "./App.scss";
import TodoApp from "../components/TodoApp";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <span className="title">Todo List</span>
      <TodoApp />
    </div>
  );
}

export default App;
