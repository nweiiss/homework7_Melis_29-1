import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Добавить задачу"
        onKeyPress={e => e.key === 'Enter' && addTodo(task)}
      />
      <input type="submit" value="Добавить" onClick={addTodo} />
    </div>
  );
}

export default TodoForm;
