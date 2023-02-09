import React from 'react'
import { useState } from 'react';
import SearchBar from 'react-js-search'

export default function SearchEmp(props) {
  //search start
const [emp, setEmployee] = useState(props.empData);
const [searchEmp, setSearchEmp] = useState(emp);

const onSearchClick = () => {    
    setSearchEmp([...searchEmp]);
  };

//search end
    return (
  <>
   <div class="col-6 row m-5" style={{textAlign:"right",justifyContent:"right"}}>
    <SearchBar
        onSearchTextChange={(term, searchEmp) => {
            setSearchEmp([...searchEmp]);
        }}
        onSearchButtonClick={onSearchClick}
        placeHolderText={"Search here..."}
        data={props.empData}
      />
      
     
</div>
  </>
  )
}
