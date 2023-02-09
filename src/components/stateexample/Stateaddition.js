import React, { useState } from 'react'

export default function Stateaddition() {
     const [fisrt,setFirst]= useState(0);
     const [second,setSecond]= useState(0);
     const [total,setTotal]= useState(0);
     

  return (
   <>
   <input type="text" onKeyUp={(e) => setFirst(+e.target.value)} style={{margin:"2px"}}></input>
   <input type="text" onKeyUp={(e)=>setSecond(+e.target.value)} ></input>
   <button className='btn btn-primary m-2' onClick={(e)=>setTotal(fisrt+second)}>Add</button>
   Addition is : {total}
   </>
  )
}
