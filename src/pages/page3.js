import React from 'react';

function TodoItem({ todo, todos, setTodos }) {
  const toggleComplete = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = () => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <li>
      <div className='nan'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
      <button className='delete' onClick={deleteTodo}>X</button>

      </div>
      
    </li>
  );
}

export default TodoItem;
