import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import { useEffect } from "react";
import client from "./Api";
import axios from "axios";

export default function AxiosDemo2() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const promise1 = await client.get("/users");
    const promise2 = await client.get("/users");

    const [data1, data2] = await axios.all([promise1, promise2]);

    data1.data.push(...data2.data);
     
    setUsers(data1.data);

  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Users Data Axios Client</h1>
      <hr></hr>
      <ul>
        {users.map((user, ind) => {
          return <li key={ind}>{user.username}</li>;
        })}
      </ul>
    </>
  );
}
