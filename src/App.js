import React, { useState } from "react";
import TodoForm from "./pages/page1";
import TodoList from "./pages/page2";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="container">
      <h1>Список задач</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <div className="buttons">
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("completed")}>Выполненные</button>
      </div>
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default TodoApp;
