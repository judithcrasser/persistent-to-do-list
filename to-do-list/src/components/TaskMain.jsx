import React from "react";

function TaskMain() {
  return (
    <div className="task-list">
      <div className="add-task">
        <h3>ADD TASK</h3>
        <form>
          <input type="text" />
          <button>+</button>
        </form>
      </div>
      <div className="task-item-list">
        <h3>TASK LIST</h3>
        <form>
          <input type="checkbox" />
          <p>TO-DO</p>
        </form>
      </div>
    </div>
  );
}

export default TaskMain;
