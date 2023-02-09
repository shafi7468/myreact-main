import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosDemo1() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
    <h1 style={{textAlign:"center"}}>Users Data</h1>
    <hr></hr>
      <ul>
        {users.map((user, ind) => {
          return <li key={ind}>{user.username}</li>;
        })}
      </ul>
    </>
  );
}
