import React, { useState, useEffect } from "react";
import Form from "./Components/form";
import TodoList from "./Components/todoList";
import './App.css';

const App = () =>{
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getTodos();
  },[]);
  
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    const filterHandler = () => {
      switch(status) {
        case 'completed': 
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        
        case 'uncompleted': 
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    filterHandler(); 
    saveLocalTodos();
  }, [todos, status]);

  const getTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos} 
        inputText={inputText}
        setStatus={setStatus} 
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
