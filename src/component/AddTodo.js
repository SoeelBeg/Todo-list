import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Inline CSS for styling
  const mystyle = {
    minHeight: "70vh",
    margin: "40px auto",
    maxWidth: "700px", // Centering the form
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
      return;
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container" style={mystyle}>
      <form onSubmit={submit}>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Add Todo</h3>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success" style={{ width: "100%" }}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
