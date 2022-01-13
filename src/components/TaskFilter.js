import { useEffect, useRef } from "react";

const TaskFilter = ({ RefreshList, taskNo }) => {
  const completedTasks = useRef({});
  const activeTasks = useRef({});

  const updateList = () => {
    completedTasks.current = document.querySelectorAll(".list.checked");
    activeTasks.current = document.querySelectorAll(".list:not(.checked)");
  };

  useEffect(() => {
    updateList();
  });

  const handleSelection = (e) => {
    let selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("selected");
    e.target.classList.add("selected");
  };

  const showAll = () => {
    updateList();
    let allTasks = document.querySelectorAll(".list");
    allTasks.forEach((task) => (task.style.display = "block"));
  };

  const showActive = () => {
    updateList();
    completedTasks.current.forEach((task) => (task.style.display = "none"));
    activeTasks.current.forEach((task) => (task.style.display = "block"));
  };

  const showCompleted = () => {
    updateList();
    activeTasks.current.forEach((task) => (task.style.display = "none"));
    completedTasks.current.forEach((task) => (task.style.display = "block"));
  };

  const handleClear = async () => {
    updateList();

    for (let i = 0; i < completedTasks.current.length; i++) {
      // Must wait the returned promise of the fetch function to continue the loop to avoid requests colliosion
      await fetch(
        "https://todo-app-server7.herokuapp.com/tasks/" +
          completedTasks.current[i].id,
        {
          method: "DELETE",
        }
      );
    }
    RefreshList();
  };

  return (
    <div
      nodrag="true"
      className="filters d-flex align-items-center text-center pt-1 px-4 w-100 ms-sm-3 ms-2"
    >
      <span>{taskNo} items left</span>
      <button
        nodrag="true"
        className="all ms-auto btn selected"
        onClick={(e) => {
          handleSelection(e);
          showAll();
        }}
      >
        All
      </button>
      <button
        nodrag="true"
        className="active btn "
        onClick={(e) => {
          handleSelection(e);
          showActive();
        }}
      >
        Active
      </button>
      <button
        nodrag="true"
        className="completed me-auto btn"
        onClick={(e) => {
          handleSelection(e);
          showCompleted();
        }}
      >
        Completed
      </button>
      <button nodrag="true" className="clear px-0 btn" onClick={handleClear}>
        Clear Completed
      </button>
    </div>
  );
};

export default TaskFilter;
