import React, { useState } from "react";
import Array from "./Array";
function CreateTodo({
  id,
  todoName,
  todoDescription,
  handleFilter,
  edit,
  setEdit,
  ArrayCard,
  setArrayCard,
}) {
  const [inputs, setInputs] = useState(" ");
  const [inputsEdit, setInputsEdit] = useState(" ");

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleChangeEdit = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputsEdit((values) => ({ ...values, [name]: value }));
  };
  let index = Array.map(function (e) {
    return e.id;
  }).indexOf(id);
  const handelSubmitEdit = (e) => {
    e.preventDefault();
    let a = Array[index];
    if (inputsEdit.TodoName == undefined) {
      a.todoName = todoName;
    } else {
      a.todoName = inputsEdit.TodoName;
    }
    if (inputsEdit.TodoDescription == undefined) {
      a.todoDescription = todoDescription;
    } else {
      a.todoDescription = inputsEdit.TodoDescription;
    }

    setEdit(!edit);
    setArrayCard();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = Math.random() * 100;
    let todoNameNew = inputs.TodoName;
    let todoDescriptionNew = inputs.TodoDescription;
    Array.push({
      id: id,
      todoName: todoNameNew,
      todoDescription: todoDescriptionNew,
      status: false,
    });
    inputs.TodoName = "";
    inputs.TodoDescription = "";
    setArrayCard();
  };

  if (edit) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col"></div>
          <div className="col-11 text-center">
            <form onSubmit={handelSubmitEdit}>
              <label className="me-3">Title :</label>
              <input
                className="border border-success me-2 mb-2"
                name="TodoName"
                defaultValue={todoName}
                onChange={handleChangeEdit}
                style={{ width: "420px" }}
              ></input>
              <label className="me-3">Description :</label>
              <input
                className="border border-success me-2 mb-2"
                name="TodoDescription"
                defaultValue={todoDescription}
                onChange={handleChangeEdit}
                style={{ width: "420px" }}
              ></input>
              <button
                type="submit"
                className="border border-success text-light"
                style={{
                  backgroundColor: "#199C7D",
                  width: "100px",
                  borderRadius: "5px",
                }}
              >
                Save
              </button>
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
                  defaultValue={"All"}
                  className="form-select btn"
                  style={{
                    backgroundColor: "#F57E7A",
                    color: "white",
                    width: "180px",
                  }}
                >
                  <option value={"All"}>All</option>
                  <option value={"Completed"}>Completed</option>
                  <option value={"NotCompleted"}>Not Completed</option>
                </select>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
                value={inputs.TodoName || ""}
                onChange={handleChange}
                style={{ width: "420px" }}
              ></input>
              <input
                className="border border-success me-1 mb-2"
                placeholder="Todo Description"
                name="TodoDescription"
                value={inputs.TodoDescription || ""}
                onChange={handleChange}
                style={{ width: "420px" }}
              ></input>
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
                  defaultValue={"All"}
                  className="form-select btn"
                  style={{
                    backgroundColor: "#F57E7A",
                    color: "white",
                    width: "180px",
                  }}
                >
                  <option value={"All"}>All</option>
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
}

export default CreateTodo;
