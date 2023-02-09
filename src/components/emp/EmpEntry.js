import React from 'react'
import { useState } from 'react'



let count=0;

export default function EmpEntry(props) {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[sal,selSal]=useState('');

    const changeEventHandler=(e)=>{
        if(e.target.name === "eName"){
        setName(e.target.value);
        }
        else if(e.target.name==="eAge"){
            setAge(e.target.value);
        }
        else{
            selSal(e.target.value);
        }
    }

   



  return (
    <>

<div class="row m-5">
  <div class="col-sm-2">
    <input type="text" class="form-control" placeholder="Name" aria-label="Name"  onChange={changeEventHandler} name="eName"/>
  </div>
  <div class="col-sm-2">
    <input type="text" class="form-control" placeholder="Age" aria-label="Age"  onChange={changeEventHandler} name="eAge"/>
  </div>
  <div class="col-sm-2">
    <input type="text" class="form-control" placeholder="Salary" aria-label="Salary"  onChange={changeEventHandler} name="eSal"/>
  </div>
  <div class="col-sm-2">
  <button className='btn btn-success' style={{textAlign:"left"}} onClick={()=>{
        let emp={name:name,age:age,salary:sal};
        props.addEmp(emp);
    }}>Save</button>
    </div>
</div>

    </>
  )
}
