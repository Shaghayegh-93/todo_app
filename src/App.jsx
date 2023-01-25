import "./App.css";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  // Read Data
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  // update data
  const toggleTodoComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className="w-screen h-screen p-4 bg-gradient-to-b from-[#c4b5fd] to-[#5b21b6] ">
      <div className=" w-full max-w-[500px]   m-auto bg-slate-100 p-4 shadow-xl rounded-md ">
        <h3 className="mb-6 text-3xl font-bold text-gray-800 p-2 text-center">
          Todo
        </h3>
        <form className="mb-4 flex justify-between  ">
          <input
            type="text"
            placeholder="Add Todo"
            className="border p-2 w-full text-xl rounded-md outline-none "
          />
          <button className="border p-4 bg-[#5b21b6] ml-2 text-slate-100 rounded-md">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <Todo todos={todos} toggleTodoComplete={toggleTodoComplete} />
        <p className="text-center p-2">You have {todos.length} todos</p>
      </div>
    </div>
  );
}

export default App;
