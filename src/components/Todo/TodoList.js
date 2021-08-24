import { useEffect, useRef } from "react";
import "./TodoList.css";
const TodoList = (props) => {
  const editRef = useRef();
  useEffect(() => {
    if (editRef.current) {
      editRef.current.focus();
    }
  }, [props.todos]);
  const removeHandler = (e, index) => {
    const newlist = [...props.todos];
    newlist.splice(index, 1);
    props.setTodo(newlist);
  };
  const editHandler = (index) => {
    const newlist = [...props.todos];
    newlist.forEach((item, indexin) => {
      if (index !== indexin) {
        item.edit = false;
      }
    });
    newlist[index].edit = !props.todos[index].edit;
    props.setTodo(newlist);
  };
  const changeValue = (e, index) => {
    const newlist = [...props.todos];
    const selected = { ...props.todos[index] };
    selected.title = e.target.value;
    newlist[index] = selected;
    props.setTodo(newlist);
  };
  const completeHandler = (index) => {
    const newlist = [...props.todos];
    const seledted = { ...props.todos[index] };
    seledted.completed = !seledted.completed;
    newlist[index] = seledted;
    props.setTodo(newlist);
  };
  return (
    <div className="todolist">
      <h2>Todo List</h2>
      {props.filteredTodos.map((todo, index) => {
        return (
          <div
            className={todo.completed ? "todo completed" : "todo"}
            key={index}
          >
            {!todo.completed ? (
              <div>
                <span
                  onClick={(e) => removeHandler(e, index)}
                  className="remove-icon icon"
                >
                  remove
                </span>

                <span
                  onClick={() => editHandler(index)}
                  className="edit-icon icon"
                >
                  {todo.edit ? "save" : "edit"}
                </span>
              </div>
            ) : null}

            {todo.edit ? (
              <input
                onChange={(e) => changeValue(e, index)}
                type="text"
                value={todo.title}
                ref={editRef}
              />
            ) : (
              <p onClick={() => completeHandler(index)}>{todo.title}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
