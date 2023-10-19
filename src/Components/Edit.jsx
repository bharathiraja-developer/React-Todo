import React, { useState } from "react";
import Array from "./Array";
import { useNavigate } from "react-router-dom";

function Edit({ id, todoName, todoDescription }) {
  const [inputs, setInputs] = useState({});
  let history = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  let index = Array.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handelSubmit = (e) => {
    e.preventDefault();

    let a = Array[index];

    a.todoName = inputs.TodoName;
    a.todoDescription = inputs.TodoDescription;

    history("/");
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
              onChange={handleChange}
              style={{ width: "420px" }}
            ></input>
            <label className="me-3">Description :</label>
            <input
              className="border border-success me-2 mb-2"
              placeholder="Todo Description"
              name="TodoDescription"
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
