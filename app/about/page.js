"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/features/todo/todoSlice";
import AboutCard from "../../components/aboutCard";
import UseRegisterList from "@/hooks/useRegisterList";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default function About() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  // const data = [{ title: "aaa" }, { title: "aaa" }];
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoReducer.todos);
  console.log("todos", todos);
  const myHandler = (val) => {
    console.log(val);
  };
  useEffect(() => {
    async function fetchData() {
      // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then(function (response) {
      //     if (!response.ok) {
      //       throw Error(response.statusText);
      //     } else {
      //       return response.json();
      //     }
      //   })
      //   .then(function (result) {
      //     setData(result); // This will set your result to the state
      //   })
      //   .catch(function (error) {
      //     console.log("Looks like there was a problem: \n", error);
      //   });
      const res = await UseRegisterList();
      console.log("Ali RIaz===", res);
    }
    fetchData();
  }, []);

  const addTodohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const removeTodoHandler = (todoId) => {
    dispatch(removeTodo(todoId));
  };
  return (
    <div>
      <form onSubmit={addTodohandler}>
        <input
          type="text"
          value={input}
          placeholder="todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Sibmit</button>
      </form>

      {todos?.map((todo) => {
        return (
          <>
            <AboutCard removeTodoHandler={removeTodoHandler} todo={todo} />
          </>
        );
      })}
      {/* {data?.map((item) => {
        return <AboutCard key={item} item={item} myHandler={myHandler} />;
      })} */}
    </div>
  );
}
