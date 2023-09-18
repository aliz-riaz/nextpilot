"use client";

export default function AboutCard(props) {
  // console.log("My Props", props.item.title);

  return (
    <div key={props.todo.id}>
      <span>{props.todo.text}</span>
      <button onClick={() => props.removeTodoHandler(props.todo.id)}>
        Remove
      </button>
    </div>
  );
}
