import React from "react";

function Button({ todoStatus, handleStatus }) {
  if (!todoStatus) {
    return (
      <select
        onChange={handleStatus}
        className="btn"
        style={{ backgroundColor: "#F57E7A", color: "white" }}
      >
        <option value={false}>Not Completed</option>
        <option value={true}>Completed</option>
      </select>
    );
  } else {
    return (
      <select
        onChange={handleStatus}
        className="btn"
        style={{ backgroundColor: "#199C7D", color: "white" }}
        defaultValue={true}
      >
        <option value={false}>Not Completed</option>
        <option value={true}>Completed</option>
      </select>
    );
  }
}

export default Button;
