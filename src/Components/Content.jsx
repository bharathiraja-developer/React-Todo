import React from "react";
import TodoCard from "./TodoCard";
import Array from "./Array";

function Content({ deleted, getvalues }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-0">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {Array.map((contents) => (
            <TodoCard
              key={contents.id}
              id={contents.id}
              todoName={contents.todoName}
              todoDescription={contents.todoDescription}
              status={contents.status}
              deleted={deleted}
              getvalues={getvalues}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
