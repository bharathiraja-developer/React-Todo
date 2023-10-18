import React from "react";

function CreateTodo() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col"></div>
        <div className="col-11 text-center">
          <input
            className="border border-success me-1 mb-2"
            placeholder="Todo Name"
            style={{ width: "420px" }}
            name="TodoName"
          ></input>
          <input
            className="border border-success me-1 mb-2"
            placeholder="Todo Description"
            style={{ width: "420px" }}
            name="TodoDescription"
          ></input>
          <button
            className="border border-success text-light"
            style={{
              backgroundColor: "#199C7D",
              width: "100px",
              borderRadius: "5px",
            }}
          >
            Add Todo
          </button>
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
                className="form-select btn"
                style={{
                  backgroundColor: "#F57E7A",
                  color: "white",
                  width: "180px",
                }}
              >
                <option>All</option>
                <option>Completed</option>
                <option>Not Completed</option>
              </select>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
