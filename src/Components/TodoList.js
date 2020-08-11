import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo } from "../action/action";

const TodoList = () => {
  const allTodos = useSelector(state => state.todoIndex);
  const todos = allTodos;
  const dispatch = useDispatch();

  return (
    <div className="Container">
      {todos && todos.length
        ? todos.map((todo) => {
          console.log(todos);
            return (
              <div key={todo.id} >
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Order Name</th>
                      <th scope="col">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{todo.id}</td>
                      <td>{todo.content}</td>
                      <td><button className="btn btn-danger m-2" onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
      : "No Order Add Today..!"}
    </div>
  );
};

export default TodoList;
