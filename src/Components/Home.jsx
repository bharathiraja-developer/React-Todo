import React from "react";
import Mytodo from "./Mytodo";
import CreateTodo from "./CreateTodo";
import Content from "./Content";

function Home() {
  return (
    <div>
      <Mytodo />
      <CreateTodo />
      <Content />
    </div>
  );
}

export default Home;
