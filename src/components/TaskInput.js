import { useState } from "react";

const TaskInput = ({ RefreshList }) => {
  const [content, setContent] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    const task = { content };

    fetch("https://todo-app-an4y.onrender.com/api/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(() => {
      RefreshList();
      setContent("");
    });
  };

  return (
    <div className="custom-container col-md-6 col-sm-8 col-11 ">
      <div className="check-box text-center"></div>
      <form onSubmit={handleSumbit}>
        <input
          className="form-control task ms-2"
          type="text"
          placeholder="Create a new todo.."
          value={content}
          aria-label="new todo field"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TaskInput;
