import React, { useState } from "react";

export default function ShowhideDemo2() {
  const [flag, checkFlag] = useState(true);
  const [count,setCount] = useState(100);
  
  const useInc=(e)=>{
    setCount( {
        count : count - e.target.value.length 
        
    }) 
  }

  const flagCheck = () => {
    checkFlag(!flag);
  };

  return (
    <>
    <div className="container card col-1" style={{width: "250px" , margin: "50px" , alignItems : "center"}}>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
           
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type={flag ? "password" : "text"}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            onChange={flagCheck}
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
           Show password
          </label>
          <textarea name='address' maxLength={100} onChange={(e) => useInc}></textarea>
          <label>Remaining characters : {count}</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}
