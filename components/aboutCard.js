"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
export default function AboutCard(props) {
  // console.log("My Props", props.item.title);

  return (
    <div key={props.todo.id} className="flex bg-pink-200 mb-2 rounded">
      <span className="w-5/6 py-2 px-3">{props.todo.text}</span>
      <button
        onClick={() => props.removeTodoHandler(props.todo.id)}
        className="w-1/6 bg-slate-200 text-center flex justify-center items-center rounded-r-lg"
      >
        <TrashIcon className="h-6 w-6 text-red-500" />
      </button>
    </div>
  );
}
