import React from "react";
import Array from "./Array";
import Mytodo from "./Mytodo";
import CreateTodo from "./CreateTodo";
import Content from "./Content";
import { useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  function deleted(id) {
    let index = Array.map(function (e) {
      console.log(e);
      return e.id;
    }).indexOf(id);

    Array.splice(index, 1);
    history("/");
  }
  return (
    <div>
      <Mytodo />
      <CreateTodo />
      <Content deleted={deleted} />
    </div>
  );
}

export default Home;
