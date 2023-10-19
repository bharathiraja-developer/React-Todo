import React from "react";
import Home from "./Components/Home";
import Mytodo from "./Components/Mytodo";
import CreateTodo from "./Components/CreateTodo";
import Content from "./Components/Content";
import Array from "./Components/Array";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
