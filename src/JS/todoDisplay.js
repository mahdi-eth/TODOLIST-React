function TodoDisplay() {
  const todos = JSON.parse(localStorage.getItem("TodoList"));

    let todoListUL = todos.map((i) => {
        return (
          <li className="w-50 list-group-item border border-warning rounded">
            <h5>Title: {i.title}</h5>
            <p>Description: {i.desc}</p>
            <span>Date: {i.date}</span>
          </li>
        );
      });

  return (
    <>
      <h2 className="w-100 text-center my-4">My TodoList</h2>
      <ul className="list-group d-flex flex-column gap-5 align-items-center w-100">
        {todoListUL}
      </ul>
    </>
  );
}

export default TodoDisplay;
