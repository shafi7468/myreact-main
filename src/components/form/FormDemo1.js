import React from "react";
import { useState } from "react";

export default function FormDemo1() {

    const [name,setName]=useState({fname:'',lname:''});

  const submitHandler = (e) => {
    e.preventDefault();
    
    alert(name.fname + name.lname)
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name : <input type="text" value={name.fname} onChange={(e)=>{
            setName({...name, fname:e.target.value})
        }}></input>
        Last Name : <input type="text" value={name.lname} onChange={(e)=>{
            setName({...name, lname:e.target.value})
        }}></input>
        
        <button>Submit</button>
      </form>
    </>
  );
}
