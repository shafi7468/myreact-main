import React, { useState } from 'react'

export default function List() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sal, setSal] = useState('');
    const [employee, setEmployee] = useState([{name:'s',id:'1',sal:'12',age:'12'},{name:'s',id:'1',sal:'12',age:'22'}]);
    let nextId = 0;
    return (
      <>
        <h1>Employee Details:</h1>
        Name : 
        <input type="text"
          
          onChange={e => setName(e.target.value)}
        />
        Age : 
         <input type="text"
          
          onChange={e => setAge(e.target.value)}
        />
        Sal : 
         <input type="text"
          
          onChange={e => setSal(e.target.value)}
        />
        <button onClick={() => {
          let obj={ id: nextId++, name: name ,sal:sal,age:age};

          setEmployee([...employee,obj]);
        }}>Add</button>
        
        <table className='table table-bordered table-striped'>
        
        <thead>
            <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            </tr>
        </thead>
    
    <tbody>
        
          {employee.map(emp => (
            <tr key={emp.id}><td>{emp.name}</td><td >{emp.age}</td><td>{emp.sal}</td></tr>
          ))}
       
        </tbody>
    </table>
      </>
    );
}
