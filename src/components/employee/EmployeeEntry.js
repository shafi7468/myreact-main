import React, { useState } from 'react'
import EmployeeView from './EmployeeView';
import emp from './employee.json'

let iCount = 0;

export default function EmployeeEntry() {

const [namevalue,Setname]=useState('');
const [agevalue,Setage]=useState('');
const [salaryvalue,Setsalary]=useState('');

const [arr,SetArr]=useState(emp);

  return (
    <>
    <div className='container'>
 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Employee Name</label>
    <input type="text" className="form-control"  onChange={(e)=>{Setname(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Age</label>
    <input type="text" className="form-control" onChange={(e)=>{Setage(e.target.value)}} id="exampleInputPassword1" placeholder="text"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Salary</label>
    <input type="text" className="form-control" onChange={(e)=>{Setsalary(e.target.value)}} id="exampleInputPassword1" placeholder="text"/>
  </div>
  
  <button type="submit" className="btn btn-primary m-1" onClick={()=>{ 
   let obj={id: iCount++, name:namevalue,age:agevalue,sal:salaryvalue};   
   SetArr([...arr,obj]);}}
   >Submit</button>




<table className='table table-bordered table-striped'>
        
        <thead>
            <tr>       
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            </tr>
        </thead>
    
    <tbody>
        
          {arr.map((emp,index) => (
            <tr key={emp.id}><td>{emp.name}</td><td >{emp.age}</td><td>{emp.sal}</td><td>
              <button onClick={() => {
              SetArr(
                arr.filter(a =>
                  a.id !== emp.id,
                  
                )
              );
            }}>
              Delete
            </button>
              </td></tr>
          ))}
       
        </tbody>
    </table>
   
    <EmployeeView arr={arr}></EmployeeView>



</div>
    </>
  )
}
