import React, { useState } from "react";
import Array from "./Array";

function Edit({ id, todoName, todoDescription }) {
  const [inputs, setInputs] = useState(" ");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  let index = Array.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handelSubmitEdit = (e) => {
    e.preventDefault();

    let a = Array[index];
    if (inputs.TodoName == undefined) a.todoName = todoName;
    else a.todoName = inputs.TodoName;
    if (inputs.TodoDescription == undefined)
      a.todoDescription = todoDescription;
    else a.todoDescription = inputs.TodoDescription;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col"></div>
        <div className="col-11 text-center">
          <form>
            <label className="me-3">Title :</label>
            <input
              className="border border-success me-2 mb-2"
              placeholder="Todo Name"
              name="TodoName"
              defaultValue="0"
              onChange={handleChange}
              style={{ width: "420px" }}
            ></input>
            <label className="me-3">Description :</label>
            <input
              className="border border-success me-2 mb-2"
              placeholder="Todo Description"
              name="TodoDescription"
              defaultValue={todoDescription}
              onChange={handleChange}
              style={{ width: "420px" }}
            ></input>

            <button
              onClick={handelSubmit}
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
      </div>
    </div>
  );
}

export default Edit;
