import React, { useState } from "react";
import Array from "./Array";
import Mytodo from "./Mytodo";
import CreateTodo from "./CreateTodo";
import Content from "./Content";

function Home() {
  const [edit, setEdit] = useState(false);
  const [filter, setFilter] = useState("All");
  const [id, setId] = useState(0);
  const [todoName, setTodoName] = useState(" ");
  const [todoDescription, setTodoDescription] = useState(" ");
  const [ArrayCard, setArrayCardArray] = useState(<Content />);

  const setArrayCard = () => {
    setArrayCardArray(<Content />);
  };

  function getvalues(id, todoName, todoDescription) {
    setId(id);
    setTodoName(todoName);
    setTodoDescription(todoDescription);
  }
  function deleted(id) {
    let index = Array.map(function (e) {
      return e.id;
    }).indexOf(id);
    Array.splice(index, 1);
    setArrayCard();
  }
  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <div>
      <Mytodo />
      <CreateTodo
        handleFilter={handleFilter}
        id={id}
        todoName={todoName}
        todoDescription={todoDescription}
        edit={edit}
        setEdit={setEdit}
        ArrayCard={ArrayCard}
        setArrayCard={setArrayCard}
      />
      <Content
        deleted={deleted}
        getvalues={getvalues}
        filter={filter}
        edit={edit}
        setEdit={setEdit}
        ArrayCard={ArrayCard}
        setArrayCard={setArrayCard}
      />
    </div>
  );
}

export default Home;
