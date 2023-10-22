import React, { useState } from "react";
import Array from "./Array";
import Mytodo from "./Mytodo";
import CreateTodo from "./CreateTodo";
import Content from "./Content";
import { useNavigate } from "react-router-dom";

function Home({ getvalues }) {
  const [filter, setFilter] = useState("All");
  let history = useNavigate();
  function deleted(id) {
    let index = Array.map(function (e) {
      return e.id;
    }).indexOf(id);
    Array.splice(index, 1);
    history("/");
  }
  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <div>
      <Mytodo />
      <CreateTodo handleFilter={handleFilter} />
      <Content deleted={deleted} getvalues={getvalues} filter={filter} />
    </div>
  );
}

export default Home;
