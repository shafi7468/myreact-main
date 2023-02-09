import React from "react";
import { useState } from "react";

export default function FormValidation() {
  const [user, setUser] = useState({
    fname: "Shaik",
    lname: "Shafi",
    fnameError: "",
    lnameError: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.fname === "" || user.lname === "") {
      alert("First Name and Last Name should not be empty");
    }
    else{
        alert("firstname:" + user.fname + "Lastname :" + user.lname);
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name === "fname") {
      if (e.target.value.length < 5) {
        setUser({ ...user,fname:e.target.value, fnameError: "Required 5 characters" });
      } else {
        setUser({ ...user,fname:e.target.value, fnameError: "" });
      }
    } else if (name === "lname") {
      if (e.target.value.length < 7) {
        setUser({ ...user,lname:e.target.value, lnameError: "Required 7 characters" });
      } else {
        setUser({ ...user,lname:e.target.value, lnameError: "" });
      }
    }
  };

  return (
    <>
      <br />
      <form onSubmit={submitHandler}>
        First Name :
        <input
          type="text"
          onChange={changeHandler}
          name="fname"
          value={user.fname}
        ></input>
        <span style={{ color: "red" }}>{user.fnameError}</span>
        <br />
        <br />
        Last Name :
        <input
          type="text"
          onChange={changeHandler}
          name="lname"
          value={user.lname}
        ></input>
        <span style={{ color: "red" }}>{user.lnameError}</span>
        <br />
        <br />
        <button className="btn btn-primary ms-5">Submit</button>
      </form>
    </>
  );
}
