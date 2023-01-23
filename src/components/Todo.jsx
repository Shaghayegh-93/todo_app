import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({ todos }) => {
  return (
    <div>
      <ul className="">
        {todos.map((todo) => {
          return (
            <li className="flex  justify-between bg-slate-200 p-4 my-2 capitalize ">
              <div className="flex ">
                <input type="checkbox" />
                <p className="ml-2 cursor-pointer">{todo.text}</p>
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
