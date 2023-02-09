import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function HttpDemo1() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const finalData = await data.json();
    setUsers(finalData);
  };

useEffect((()=>{
    getData();
}),[])

  return (
    <>
     
      <table className="table table-bordered table-striped">
        <thead><tr>
            <th>S.No</th>
            <th>User Name</th>
            <th>Email</th>
            </tr></thead>
            <tbody>

      {users.map((user, ind) => {
         return <tr key={ind}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
         </tr>
      }
      )}
      </tbody>
      </table>
      
    </>
  );
}
