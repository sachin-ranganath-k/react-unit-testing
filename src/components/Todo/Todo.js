import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/todos?_limit=4";
  useEffect(() => {
    const fetchTodos = async () => {
      const apiFetch = await fetch(api);
      console.log(apiFetch);
      const resJson = await apiFetch.json();
      console.log(resJson);
      setTodo(resJson);
      console.log(todo);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      Todo
      {todo.map((todos) => {
        return (
          <div key={todos.id}>
            <p>{todos.id}</p>
            <p>{todos.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
