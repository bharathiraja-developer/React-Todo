import React from "react";
import TodoCard from "./TodoCard";

function Content() {
  const Contents = [
    {
      id: "1",
      todoName: "Office task-1",
      todoDescription: "This is the description for my first task",
      status: false,
    },
    {
      id: "2",
      todoName: "Office task-1",
      todoDescription: "This is the description for my first task",
      status: false,
    },
    {
      id: "3",
      todoName: "Office task-1",
      todoDescription: "This is the description for my first task",
      status: false,
    },
  ];
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {Contents.map((contents) => (
            <TodoCard
              key={contents.id}
              todoName={contents.todoName}
              todoDescription={contents.todoDescription}
              status={contents.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;
