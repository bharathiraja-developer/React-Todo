import React, { useState } from "react";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [id, setId] = useState(0);
  const [todoName, setTodoName] = useState(" ");
  const [todoDescription, setTodoDescription] = useState(" ");
  function getvalues(id, todoName, todoDescription) {
    setId(id);
    setTodoName(todoName);
    setTodoDescription(todoDescription);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home getvalues={getvalues} />} />
          <Route path="/create" element={<Home />} />
          <Route
            path="/edit"
            element={
              <Edit
                id={id}
                todoName={todoName}
                todoDescription={todoDescription}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
