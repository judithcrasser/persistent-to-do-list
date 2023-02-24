import React from "react";
import { useState } from "react";

function TaskItem({ task, toggleCheckbox }) {
  const [isChecked, setIsChecked] = useState(task.checked);

  // checkbox change handler
  const handleCheckboxChange = (e) => {
    // console.log("task.id: ", task.id);
    setIsChecked(!isChecked);
    toggleCheckbox(task.id);
  };

  return (
    <div className={`task-item ${isChecked ? "done" : ""}`} key={task.id}>
      <form onSubmit={toggleCheckbox}>
        <input
          type="checkbox"
          id={task.id}
          name={task.title}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={task.id}>{task.title}</label>
      </form>
    </div>
  );
}

export default TaskItem;
