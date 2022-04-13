import React, { useState } from "react";
import "./todoapp.scss";
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const Storage = JSON.parse(localStorage.getItem("taskList"));
    return Storage ?? [];
  });

  const handleInput = (e) => {
    setTask(e.target.value);
    // console.log(task);
  };
  const AddTask = () => {
    // if (task !== "") {

    // }
    const taskDetails = {
      id: Math.floor(Math.random() * 1000),
      value: task,
      isComplete: false,
    };
    setTaskList((taskList) => {
      const newTask = [...taskList, taskDetails];
      const json = JSON.stringify(newTask);
      localStorage.setItem("taskList", json);
      return newTask;
    });
    setTask("");
  };
  // console.log(taskList);
  const completeTask = (e, id) => {
    e.preventDefault();
    //find the index of the task
    const index = taskList.findIndex((task) => task.id === id);
    //copy array into new variable
    const newTaskList = [...taskList];
    //edit the task
    newTaskList[index] = {
      ...newTaskList[index],
      isComplete: true,
    };
    //set the new task list
    setTaskList(newTaskList);
  };
  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleInput(e)}
        placeholder="Add your task here..."
        // console={console.log(e)}
      />
      <button onClick={AddTask} className="add-btn">
        Add
      </button>
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((task, index) => (
            <li
              key={index}
              className={task.isComplete ? "crossText" : "listitem"}
            >
              {task.value}
              <button
                className="completed"
                onClick={(e) => completeTask(e, task.id)}
              >
                Completed
              </button>
              <button
                className="delete"
                onClick={(e) => deleteTask(e, task.id)}
                //  localStorage.setItem("taskList", json);
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoApp;
