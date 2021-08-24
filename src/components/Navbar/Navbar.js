import "./navbar.css";
import { contextTodo } from "./../Todo/TodoApp";
import { useContext } from "react";
const Navbar = () => {
  const Todos = useContext(contextTodo);
  const countUnFinishedTodo = () => {
    const count = Todos.filter((item) => item.completed === false);
    return count.length;
  };
  return (
    <header className="Navbar">
      <h4>تعداد todo های انجام نشده:{countUnFinishedTodo()}</h4>
    </header>
  );
};

export default Navbar;
