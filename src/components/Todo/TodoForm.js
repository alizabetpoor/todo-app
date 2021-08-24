import { useState } from "react";
import "./TodoForm.css";
import SelectComp from "../Select/Select";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (todo !== "") {
      props.setTodo([
        ...props.todos,
        { title: todo, edit: false, completed: false },
      ]);
      setTodo("");
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={submitForm} className="form">
        <input type="text" onChange={changeHandler} value={todo} />
        <button type="submit">add</button>
      </form>
      <SelectComp status={props.status} setStatus={props.setStatus} />
    </div>
  );
};

export default TodoForm;
