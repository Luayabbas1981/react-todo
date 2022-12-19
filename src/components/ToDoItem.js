import React, { useEffect, useState } from "react";
import "./ToDoItem.css";

export default function ToDoItem({
  text,
  toDos,
  setToDos,
  toDo,
  status,
  statusFilter,
  date,
}) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  function editHandler() {
    setEdit(!edit);
  }

  function editTextHandler(e) {
    setEditText(e.target.value);
  }

  function seNewDate() {
    setToDos(
      toDos.map((item) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            date: editText || "Set Date",
          };
        }
        return item;
      })
    );
    setEdit(!edit);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos)|| []);
  }, [toDos, status, statusFilter]);

  function completedHandler() {
    setToDos(
      toDos.map((item) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  function deleteHandler() {
    // eslint-disable-next-line no-restricted-globals
    const resualt = confirm(`Do you really want to delete ${toDo.text} task?`);
    if (resualt) {
      const filteredArr = toDos.filter((e) => e.id !== toDo.id);
      setToDos(filteredArr);
    }
  }
  return (
    <div className="to-do row  mb-3 py-2 ">
      <div className={`todo-item ${toDo.completed ? "completed" : ""} col `}>
        {text}
      </div>

      {edit ? (
        <input
          onChange={editTextHandler}
          className="col"
          type=""
          name=""
          placeholder={new Date().toLocaleDateString("de-DE")}
        ></input>
      ) : (
        <div className="date col">{date}</div>
      )}

      <div className="col-1">
        <input
          className="checkbox "
          type="checkbox"
          checked={toDo.completed}
          onChange={completedHandler}
        />
      </div>
      {edit ? (
        <div className="col-3">
          <button onClick={seNewDate} title="Save" className="edit ">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      ) : (
        <div className="col-3">
          <button onClick={editHandler} title="Set a date" className="edit2 ">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      )}

      <div className="col-3">
        <button
          title="Delete task"
          className="deleted "
          onClick={deleteHandler}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
