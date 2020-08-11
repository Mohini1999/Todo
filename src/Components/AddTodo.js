import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../action/action";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  
  const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Confirm the new address...!click on Ok.`)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-group">
        <label>Order:</label>
        <input
          className="form-control mx-2"
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button className="btn btn-primary m-2" type="Submit" value="submit" onClick={() => dispatch(addTodo(content))}>
          Add Today's Order
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
