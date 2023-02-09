import React, { useEffect } from "react";
import EmpEntry from "./EmpEntry";

import { useState } from "react";
import EmpView from "./EmpView";
import ReactPaginate from "./ReactPaginate";
import SearchEmp from "./SerachEmp";
import axios from "axios";

export default function EmpMain() {
  const [empData, setEmployee] = useState([]);

  const getEmpData = async () => {
    const emp = await axios.get("http://localhost:3000/Employee");    
    setEmployee(emp.data);
  };



  useEffect(() => {
    getEmpData();
  }, []);

  
  const addEmp = async (obj) => {
   // let tempArray = [...empData, obj];
   // setEmployee(tempArray);

   const emp = await axios.post("http://localhost:3000/Employee/",obj);    
   setEmployee(emp.data);

  };
  const deleteData =async (eid) => {
   // let tempData = empData.filter((e) => {
   //   return e.name !== empName;
   // });
   // setEmployee(tempData);

    
    const emp = await axios.delete("http://localhost:3000/Employee/"+eid);    
    setEmployee(emp.data);

  };

  const updateData =async (empName, ageNew, sal) => {
      //const tempData = empData.map((p) =>
     // p.name === empName ? { ...p, age: ageNew, sal: sal } : p
    //);
    //setEmployee(tempData);
    const updateData = {
    
        
      "name":empName,
      "age": ageNew,
      "salary": sal
  
};

    const emp = await axios.delete("http://localhost:3000/Employee/",{name:empName});    
    setEmployee(emp.data);

  };

  const searchEmp = (obj) => {
    let tempArray = [...obj];
    setEmployee(tempArray);
  };

  return (
    <>
      <div className="container" align="center">
        <div className="row">
          <EmpEntry addEmp={addEmp}></EmpEntry>
          {/* <SearchEmp empData={empData} /> */}
          {/* <EmpView empData={empData} deleteData={deleteData} updateData={updateData}/> */}
          <ReactPaginate
            empData={empData}
            deleteData={deleteData}
            updateData={updateData}
            searchEmp={searchEmp}
            itemsPerPage={4}
          />
        </div>
      </div>
    </>
  );
}
