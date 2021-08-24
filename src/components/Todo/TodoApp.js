import { createContext, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "../Navbar/Navbar";
import "./TodoApp.css";

export const contextTodo = createContext();

const TodoApp = () => {
  const [status, setStatus] = useState({ value: "all", label: "all" });
  const [todo, setTodo] = useState([
    { title: "avali", edit: false, completed: false },
    { title: "dovomi", edit: false, completed: false },
    { title: "sevemi", edit: false, completed: false },
  ]);
  useEffect(() => {
    const FilterTodos = (status) => {
      switch (status) {
        case "completed":
          setFilteredTodos(todo.filter((item) => item.completed));
          break;
        case "uncompleted":
          setFilteredTodos(todo.filter((item) => !item.completed));
          break;
        default:
          setFilteredTodos(todo);
      }
    };
    setFilteredTodos(todo);
    FilterTodos(status.value);
  }, [todo, status]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <contextTodo.Provider value={todo}>
      <div className="container">
        <Navbar />
        <TodoForm
          setTodo={setTodo}
          todos={todo}
          status={status}
          setStatus={setStatus}
        />
        <TodoList
          todos={todo}
          setTodo={setTodo}
          filteredTodos={filteredTodos}
        />
      </div>
    </contextTodo.Provider>
  );
};

export default TodoApp;
