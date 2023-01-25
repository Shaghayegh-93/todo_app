import React from "react";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({ todos, toggleTodoComplete }) => {
  return (
    <div>
      <ul className="">
        {todos.map((todo) => {
          return (
            <li
              className={
                todo.completed
                  ? "flex  justify-between bg-slate-400 p-4 my-2 capitalize"
                  : "flex  justify-between bg-slate-200 p-4 my-2 capitalize"
              }
            >
              <div className="flex ">
                <input
                  type="checkbox"
                  checked={todo.completed ? "checked" : ""}
                  onChange={() => toggleTodoComplete(todo)}
                />
                <p
                  className={
                    todo.completed
                      ? "ml-2 cursor-pointer line-through"
                      : "ml-2 cursor-pointer"
                  }
                  onClick={() => toggleTodoComplete(todo)}
                >
                  {todo.text}
                </p>
              </div>

              <button className="cursor-pointer flex items-center">
                <RiDeleteBin5Line />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
