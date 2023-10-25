import React, { useState } from "react";
import Array from "./Array";
import Button from "./Button";

function TodoCard({
  id,
  index,
  todoName,
  todoDescription,
  status,
  deleted,
  getvalues,
  filter,
  edit,
  setEdit,
  setArrayCard,
}) {
  const [todoStatus, setTodoStatus] = useState(false);

  function handleStatus() {
    setTodoStatus(!todoStatus);
    status = !todoStatus;
    let index = Array.map(function (e) {
      return e.id;
    }).indexOf(id);
    let a = Array[index];
    a.status = status;
    setArrayCard();
  }

  if (filter === "All") {
    return (
      <div className="col mb-5">
        <div
          className="card h-100"
          style={{ backgroundColor: "#CCF5D3", border: "none" }}
        >
          <div className="card-body p-2 pt-3">
            <div>
              <p>Name : {todoName}</p>
              <p>Description : {todoDescription}</p>
              <p>
                Status :{" "}
                <Button todoStatus={status} handleStatus={handleStatus} />
              </p>
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-end">
              <button
                id={id}
                onClick={() => {
                  getvalues(id, todoName, todoDescription);
                  setEdit(!edit);
                }}
                className="btn mt-4 me-2"
                style={{ backgroundColor: "#199C7D", color: "white" }}
              >
                Edit
              </button>

              <a
                id={id}
                onClick={() => {
                  deleted(id);
                }}
                className="btn mt-4"
                style={{ backgroundColor: "#B15218", color: "white" }}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (filter === "Completed") {
    if (Array[index].status) {
      return (
        <div className="col mb-5">
          <div
            className="card h-100"
            style={{ backgroundColor: "#CCF5D3", border: "none" }}
          >
            <div className="card-body p-2 pt-3">
              <div>
                <p>Name : {todoName}</p>
                <p>Description : {todoDescription}</p>
                <p>
                  Status :{" "}
                  <Button todoStatus={todoStatus} handleStatus={handleStatus} />
                </p>
              </div>
            </div>

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-end">
                <button
                  id={id}
                  onClick={() => {
                    getvalues(id, todoName, todoDescription);
                    setEdit(!edit);
                  }}
                  className="btn mt-4 me-2"
                  style={{ backgroundColor: "#199C7D", color: "white" }}
                >
                  Edit
                </button>

                <a
                  id={id}
                  onClick={() => {
                    deleted(id);
                  }}
                  className="btn mt-4"
                  style={{ backgroundColor: "#B15218", color: "white" }}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else if (filter === "NotCompleted") {
    if (!Array[index].status) {
      return (
        <div className="col mb-5">
          <div
            className="card h-100"
            style={{ backgroundColor: "#CCF5D3", border: "none" }}
          >
            <div className="card-body p-2 pt-3">
              <div>
                <p>Name : {todoName}</p>
                <p>Description : {todoDescription}</p>
                <p>
                  Status :{" "}
                  <Button todoStatus={todoStatus} handleStatus={handleStatus} />
                </p>
              </div>
            </div>

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-end">
                <button
                  id={id}
                  onClick={() => {
                    getvalues(id, todoName, todoDescription);
                    setEdit(!edit);
                  }}
                  className="btn mt-4 me-2"
                  style={{ backgroundColor: "#199C7D", color: "white" }}
                >
                  Edit
                </button>
                <a
                  id={id}
                  onClick={() => {
                    deleted(id);
                  }}
                  className="btn mt-4"
                  style={{ backgroundColor: "#B15218", color: "white" }}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TodoCard;
