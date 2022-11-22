import { useEffect, useState } from "react";

export function TodoDisplay({arr}) {
  const todos = arr;
  console.log(todos);

  const DeleteClick = (id) => {
    const filtredTodos = todos.filter(item => item.id !== id);
  }
  const CheckClick = (id) => {
    const filtredTodos = todos.filter(item => item.id !== id);
  }
  const EditClick = (id) => {
    const filtredTodos = todos.filter(item => item.id !== id);
  }

  let todoListUL = todos?.map((i) => {
    return (
      <li className="w-50 list-group-item border border-warning rounded py-2">
        <h5>{i.title}</h5>
        <p>{i.desc}</p>
        <span>Date: {i.date}</span>
        <div className="d-flex mt-4 gap-4">
        <button className="btn btn-warning" onClick={(i) => DeleteClick(i.id)}>Delete</button>
        <button className="btn btn-warning" onClick={(i) => CheckClick(i.id)}>Check</button>
        <button className="btn btn-warning" onClick={(i) => EditClick(i.id)}>Edit</button>
        </div>
      </li>
    );
  });

  return (
    <>
      <h2 className="w-100 text-center my-4">{todos.length > 0?"My TodoList":""}</h2>
      <ul className="list-group d-flex flex-column gap-5 align-items-center w-100">
        {todoListUL}
      </ul>
    </>
  );
}

