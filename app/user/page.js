"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, AddUserListName } from "../redux/features/todo/userSlice";
import { useSelector } from "react-redux";

export default function User() {
  const [listName, setListName] = useState("");
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  const formHandler = (e) => {
    // Added 'e' as a parameter to the formHandler function to access event
    e.preventDefault();

    dispatch(addUser(data));
    setData({ name: "", age: "" }); // Clear the input fields after submitting
  };
  const formHandlerList = (e) => {
    e.preventDefault();

    dispatch(AddUserListName(listName));
    setListName(""); // Clear the input fields after submitting
  };

  return (
    <div>
      <form onSubmit={formHandlerList}>
        <h5>List Name</h5>
        <div className="">
          <label>List Name</label>
          <input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-md">
            Submit
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <form onSubmit={formHandler}>
        <div className="">
          <label>Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="">
          <label>Age</label>
          <input
            type="text"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
