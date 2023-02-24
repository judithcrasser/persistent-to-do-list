import React from "react";
import { useState, useEffect } from "react";

import TaskItem from "./TaskItem";

function TaskMain() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("myTasks")) || []
  );

  // get task from input
  const taskInputHandler = (e) => {
    e.preventDefault();
    const task = e.target.value;
    // console.log("task input: ", task);
    setTask(task);
  };

  // add task to tasks-array
  const addTask = (e) => {
    e.preventDefault();
    if (task) {
      const newTask = {
        id: Date.now(),
        title: task,
        checked: false,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  // get's stored list "myTasks" from local-storage if page get's refreshed
  useEffect(() => {
    if (localStorage.getItem("myTasks")) {
      const storedList = JSON.parse(localStorage.getItem("myTasks"));
      setTasks(storedList);
      // console.log("storedList: ", storedList);
    }
  }, []);

  // runs and updates items in local-storage if tasks status changes
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    // console.log("useEffect, tasks-dependency");
  }, [tasks]);

  // toggle checkbox "done"
  const toggleCheckbox = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="task-main">
      <div className="add-task">
        <h3>ADD TASK</h3>
        <form onSubmit={addTask}>
          <input
            type="text"
            required
            placeholder="ENTER TASK"
            maxLength="50"
            value={task}
            onChange={(e) => taskInputHandler(e)}
          />
          <button>+</button>
        </form>
      </div>
      <div className="task-list">
        <h3>TASK LIST</h3>
        {tasks.some((task) => !task.checked) ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleCheckbox={toggleCheckbox}
            />
          ))
        ) : (
          <p>There are no To-do's</p>
        )}
      </div>
    </div>
  );
}

export default TaskMain;
