import React, { useState } from "react";

export default function StateDemo1() {
  const [flag, setFlag] = useState(false);

  const showhide =()=>{
    setFlag(!flag)
  }
  
  return (
    <>
     {flag?<h1>Hi</h1>:null} 
      <button onClick={showhide}>{flag?"Hide":"Show"}</button>
    </>
  );
}
