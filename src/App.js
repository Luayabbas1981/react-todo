import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
 
  return (
    <div className="App">
        
    
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <TodoList
        toDos={toDos}
        setToDos={setToDos}
        status={status}
    
      />
    </div>
  );
}

export default App;
