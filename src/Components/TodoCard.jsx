import React from "react";
import Array from "./Array";

function TodoCard({ id, todoName, todoDescription, status, deleted }) {
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
              <select
                className="btn"
                style={{ backgroundColor: "#F57E7A", color: "white" }}
              >
                <option>Not Completed</option>
                <option>Completed</option>
              </select>
            </p>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-end">
            <a
              className="btn mt-4 me-2"
              style={{ backgroundColor: "#199C7D", color: "white" }}
            >
              Edit
            </a>
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

export default TodoCard;
