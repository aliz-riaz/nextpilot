"use client";

import { useEffect, useState } from "react";
import AboutCard from "../../components/aboutCard";

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
  // const data = [{ title: "aaa" }, { title: "aaa" }];

  const myHandler = (val) => {
    console.log(val);
  };
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          } else {
            return response.json();
          }
        })
        .then(function (result) {
          setData(result); // This will set your result to the state
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((item) => {
        return <AboutCard key={item} item={item} myHandler={myHandler} />;
      })}
    </div>
  );
}
