import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function TaskInfo() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}