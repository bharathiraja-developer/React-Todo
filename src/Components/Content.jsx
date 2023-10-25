import React, { useState } from "react";
import TodoCard from "./TodoCard";
import Array from "./Array";

function Content({
  deleted,
  getvalues,
  filter,
  edit,
  setEdit,
  ArrayCard,
  setArrayCard,
}) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-0">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {Array.map((contents) => (
            <TodoCard
              key={contents.id}
              id={contents.id}
              index={Array.indexOf(contents)}
              todoName={contents.todoName}
              todoDescription={contents.todoDescription}
              status={contents.status}
              deleted={deleted}
              getvalues={getvalues}
              filter={filter}
              edit={edit}
              setEdit={setEdit}
              setArrayCard={setArrayCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
