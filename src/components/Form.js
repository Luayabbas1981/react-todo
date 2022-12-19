import React from "react";
import "./Form.css";

export default function Form({
  inputText,
  setInputText,
  toDos,
  setToDos,
  setStatus,
}) {




  function inputTextHandler(e) {
    setInputText(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();

    setToDos([
      ...toDos,
      {
        text: inputText || "new to do",
        date:"Set Date",
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputText("");
  }
  function statusHandler(e) {
    setStatus(e.target.value);
  }
  function resetHandler(e) {
    e.preventDefault();
    localStorage.setItem("todos", JSON.stringify([]));
    setToDos([]);
  }

  return (
    <>
    <form className="form" action="">
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
        type="text"
        />
      <button onClick={submitHandler} className="todo-button" type="submit">
        Add a new task
      </button>

      <div className="select">
        <select
          onChange={statusHandler}
          className="filter-todo"
          name="todos"
          id=""
          >
          <option value="all">All</option>
          <option className="completed" value="completed">
            Completed
          </option>
          <option className="uncompleted" value="uncompleted">
            Uncompleted
          </option>
        </select>
      </div>
      <button onClick={resetHandler} className="todo-button" type="submit">
        reset
      </button>
    </form>
    <h4 className="form-date">
      {new Date().toLocaleDateString("de-DE")}
      </h4>
          </>
  );
}
