"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/features/todo/todoSlice";
import AboutCard from "../../components/aboutCard";
import UseRegisterList from "@/hooks/useRegisterList";

export default function About() {
  // const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("ali");
  // const data = [{ title: "aaa" }, { title: "aaa" }];
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  // const { mutate } = UseRegister();
  const { data, error, isLoading } = UseRegisterList(search);

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
      // const res = await UseRegisterList();
      // console.log("Ali RIaz===", res);
    }
    fetchData();
    // mutate({ name: "ali", last: "riaz" });
  }, []);

  const addTodohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const removeTodoHandler = (todoId) => {
    dispatch(removeTodo(todoId));
  };
  console.log("todos", todos);
  return (
    <div class="flex justify-center">
      <div className="w-1/2">
        <form onSubmit={addTodohandler}>
          <div className="flex">
            <div className="w-5/6">
              <input
                type="text"
                value={input}
                placeholder="todo"
                className="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="w-1/6 ml-2">
              <button
                type="submit"
                class=" rounded md:rounded-lg bg-sky-600 text-white px-3 py-2 hover:bg-sky-700 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="mt-3">
          {todos?.map((todo) => {
            return (
              <>
                <AboutCard removeTodoHandler={removeTodoHandler} todo={todo} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
