import { useState } from "react";
import { TodoDisplay } from "components";

export function TodoPromption() {
  const [todoList, todoListUpdater] = useState(
    JSON.parse(localStorage.getItem("TodoList")) || []
  );

  const [todo, todoSeter] = useState({
    title: "",
    desc: "",
    date: "",
    id: "",
  });

  const clicked = (e) => {
    e.preventDefault();
    todoListUpdater([...todoList, { ...todo, date: new Date(), id: Math.random()}]);
    todoSeter({
      title: "",
      desc: "",
      date: "",
      id: "",
    });
  };
  localStorage.setItem("TodoList", JSON.stringify(todoList));

  return (
    <>
      <div className="d-flex flex-column gap-5 align-items-center mt-5">
        <h1 className="fs-1">Todo List</h1>
        <form className="text-center w-50">
          <input
            value={todo.title}
            onChange={(e) => todoSeter({ ...todo, title: e.target.value })}
            placeholder="Title"
            className="form-control rounded w-100 mb-4 border border-warning"
          />
          <textarea
            value={todo.desc}
            onChange={(e) => todoSeter({ ...todo, desc: e.target.value })}
            placeholder="Description"
            className="mb-3 ps-2 pt-1 rounded w-100 border border-warning"
          ></textarea>
          <button onClick={clicked} className="btn btn-warning" type="submit">
            Submit
          </button>
        </form>
        <hr className="w-100 text-warning" />
      </div>
      <TodoDisplay arr={todoList}/>
    </>
  );
}
