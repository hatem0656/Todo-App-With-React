import { useState } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TasksList from "./TasksList";

import useFetch from "./useFetch";

const Home = () => {
  const [listRefresh, setListRefresh] = useState(false);
  const {
    loading,
    data: tasks,
    error,
  } = useFetch("https://todo-app-react7.herokuapp.com/api/tasks", listRefresh);

  const RefreshList = () => setListRefresh(!listRefresh);
  return (
    <div className="container-lg d-flex flex-column align-items-sm-center">
      <Header />
      <section className="home d-flex flex-column justify-content-sm-center align-items-sm-center w-100">
        <TaskInput RefreshList={RefreshList} />
        {error && <div className="text-white mt-5"> {error.message}</div>}
        {loading && <div> Loading..</div>}
        {tasks && <TasksList tasks={tasks} RefreshList={RefreshList} />}
      </section>
    </div>
  );
};

export default Home;
