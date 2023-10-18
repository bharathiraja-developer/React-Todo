import React from "react";

function TodoCard({ todoName, todoDescription, status }) {
  return (
    <div className="col mb-5">
      <div className="card h-100" style={{ width: "16rem" }}>
        <div className="card-body p-3">
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
