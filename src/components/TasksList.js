import Task from "./Task";
import TaskFilter from "./TaskFilter";
import { useRef, useState, useEffect } from "react";

const TasksList = ({ tasks, RefreshList }) => {
  const [taskNo, setTaskNo] = useState(
    document.querySelectorAll(".list:not(.checked)").length
  );
  const handleUpdateTasks = () => {
    setTaskNo(document.querySelectorAll(".list:not(.checked)").length);
  };
  useEffect(handleUpdateTasks, [RefreshList]);

  /*
                                =============================
                                       Dragging Tasks
                                ============================== 
*/
  const dragged = useRef();
  const Drag = (event) => {
    dragged.current = event.target;
    event.target.style.opacity = "0.5";
  };
  const DragEnd = (event) => {
    event.target.style.opacity = "";
  };
  const DragOver = (event) => {
    event.preventDefault();
    if (!(event.target === dragged.current)) {
      event.target.style.borderTop = "1px solid darkturquoise";
    }
  };
  const DragLeave = (event) => {
    event.target.style.border = "";
  };
  const Drop = (event) => {
    event.preventDefault();
    event.target.style.border = "";
    let replaced = event.target;
    let draggedPos = dragged.current.getBoundingClientRect(),
      replacedPos = replaced.getBoundingClientRect();

    if (draggedPos.y < replacedPos.y) {
      replaced.insertAdjacentElement("afterend", dragged.current);
    } else {
      replaced.insertAdjacentElement("beforebegin", dragged.current);
    }
  };

  return (
    <section
      className="custom-container my-4 col-md-6 col-sm-8 col-11 d-flex flex-column justify-content-sm-center align-items-sm-center"
      onDragStart={(e) => Drag(e)}
      onDragEnd={(e) => DragEnd(e)}
      onDragOver={(e) => {
        if (!e.target.hasAttribute("nodrag")) DragOver(e);
      }}
      onDragLeave={(e) => DragLeave(e)}
      onDrop={(e) => {
        if (!e.target.hasAttribute("nodrag")) Drop(e);
      }}
    >
      {tasks.map((task) => {
        return (
          <Task
            content={task.content}
            key={task._id}
            id={task._id}
            RefreshList={RefreshList}
            handleChecked={handleUpdateTasks}
          />
        );
      })}
      <TaskFilter RefreshList={RefreshList} taskNo={taskNo} />
      <h3 className="hint text-center my-5">Drag and drop to re-order list</h3>
    </section>
  );
};

export default TasksList;
