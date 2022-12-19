import React, { useState,useEffect } from "react";
import "./TodoList.css";
import ToDoItem from "./ToDoItem";

export default function TodoList({
  toDos,
  setToDos,
  status
 
}) {
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("todos")){
      let savedStorge = JSON.parse(localStorage.getItem("todos"));
      setToDos(savedStorge);
     
    }
    
  }, []);
  
  useEffect (()=>{ statusFilter();},[status,toDos])

  function statusFilter() {
    switch (status) {
      case "completed":
        setFilteredToDos(toDos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredToDos(toDos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredToDos(toDos);
        break;
    }
  }
 

  return (
    <div className="todo-contanier">
      <ul className="todo-list">
        {filteredToDos.map((toDo) => {
          return (
            <ToDoItem
              toDo={toDo}
              key={toDo.id}
              text={toDo.text}
              toDos={toDos}
              setToDos={setToDos}
              status={status}
              statusFilter={statusFilter}
              date={toDo.date}
             
             
            />
          );
        })}
      </ul>
    </div>
  );
}
