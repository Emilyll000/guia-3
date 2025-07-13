"use client"; 

import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  const [todos, setTodos] = useState([
    { todo: "Sacar la basura" },
    { todo: "Estudiar React" },
    { todo: "Hacer la guía 3" }
  ]);

  const [todo, setTodo] = useState({});

  const handleChange = (e) => {
    setTodo({ [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!todo.todo) return;
    setTodos([...todos, todo]);
    setTodo({});
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form_input"
          type="text"
          name="todo"
          onChange={handleChange}
          value={todo.todo || ''}
        />
        <button className="form_button" onClick={handleClick}>Agregar</button>
      </form>

      {todos.map((t, index) => (
        <Todo key={index} index={index} todo={t.todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Form;