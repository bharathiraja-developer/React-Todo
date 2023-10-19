import React, { useState } from "react";
import Array from "./Array";
import { Link, useNavigate } from "react-router-dom";

function CreateTodo({ handleFilter }) {
  const [inputs, setInputs] = useState({});

  let history = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = Array.length + 1;
    let todoName = inputs.TodoName;
    let todoDescription = inputs.TodoDescription;
    Array.push({
      id: id,
      todoName: todoName,
      todoDescription: todoDescription,
      status: false,
    });

    history("/");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col"></div>
        <div className="col-11 text-center">
          <form onSubmit={handleSubmit}>
            <input
              className="border border-success me-1 mb-2"
              placeholder="Todo Name"
              name="TodoName"
              value={inputs.TodoName}
              onChange={handleChange}
              onSelect={() => {
                history("/create");
              }}
              style={{ width: "420px" }}
            ></input>
            <input
              className="border border-success me-1 mb-2"
              placeholder="Todo Description"
              name="TodoDescription"
              value={inputs.TodoDescription}
              onChange={handleChange}
              style={{ width: "420px" }}
            ></input>

            <Link onClick={handleSubmit}>
              <button
                type="submit"
                className="border border-success text-light"
                style={{
                  backgroundColor: "#199C7D",
                  width: "100px",
                  borderRadius: "5px",
                }}
              >
                Add Todo
              </button>
            </Link>
          </form>
        </div>
        <div className="col"></div>
        <div className="row mt-4">
          <div className="col-6">
            <h5>My Todos</h5>
          </div>
          <div className="col-6 text-end">
            <h5>
              Status Filter{" "}
              <select
                onChange={handleFilter}
                className="form-select btn"
                style={{
                  backgroundColor: "#F57E7A",
                  color: "white",
                  width: "180px",
                }}
              >
                <option defaultValue={"All"}>All</option>
                <option value={"Completed"}>Completed</option>
                <option value={"NotCompleted"}>Not Completed</option>
              </select>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
