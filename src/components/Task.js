import { useState, useRef, useEffect } from "react";

const Task = ({ content, id, RefreshList, handleChecked }) => {
  const [checked, toggleChecked] = useState(false);
  const firstRender = useRef(true),
    checkboxRef = useRef(),
    taskRef = useRef();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      checkboxRef.current.classList.toggle("checked");
      taskRef.current.classList.toggle("checked");
      handleChecked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  return (
    <div
      draggable="true"
      ref={taskRef}
      className="list task w-100 ms-sm-3 ms-2"
      id={id}
      key={id}
    >
      <div
        ref={checkboxRef}
        className="check-box text-center "
        onClick={() => toggleChecked(!checked)}
      >
        {checked && <i className="bi bi-check text-white "></i>}
      </div>
      <span>{content}</span>
      <i
        className="bi bi-x-lg delete"
        onClick={() => {
          fetch("http://localhost:8000/tasks/" + id, { method: "DELETE" }).then(
            () => RefreshList()
          );
        }}
      ></i>
    </div>
  );
};

export default Task;
