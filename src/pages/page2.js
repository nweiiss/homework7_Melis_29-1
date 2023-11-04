import React from 'react';
import TodoItem from './page3';

function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
