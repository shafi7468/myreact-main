import React, { useState } from 'react'
import swal from 'sweetalert';
import ReactPagination from 'react-paginate';
import './ReactPaginate.css'
import SearchBar from 'react-js-search'

export default function ReactPaginate(props) {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[sal,setSal]=useState('');


    const[flag,setFlag]=useState(true);

    const changeEventHandler=(e)=>{
        if(e.target.name === "eName"){
        setName(e.target.value);
        }
        else if(e.target.name==="eAge"){
            setAge(e.target.value);
        }
        else{
            setSal(e.target.value);
        }
    }

      const setData=(name,age,sal)=>{
        setName(name);
        setAge(age);
        setSal(sal);
    }

    
//search start
const [emp, setEmp] = useState(props.empData);
const [searchEmp, setSearchEmp] = useState(emp);


//search end

   //pagination start
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + props.itemsPerPage;        

    const currentItems = props.empData.slice(itemOffset, endOffset);    
    
    const pageCount = Math.ceil(props.empData.length / props.itemsPerPage); 
        
    const handlePageClick = (event) => {
      const newOffset = (event.selected * props.itemsPerPage) % props.empData.length;    
      setItemOffset(newOffset);
    };

 //pagination End


  return (
    <>
     <hr />
     <div class="col-6 row m-5" style={{textAlign:"right",justifyContent:"right"}}>
    <SearchBar
        onSearchTextChange={(term, currentItems) => {
            setSearchEmp([...currentItems]);
        }}
        
        placeHolderText={"Search here..."}
        data={props.empData}
      />
     
</div>
    <div class="col-6 row m-5">
      <table className="table table-bordered table-striped col-6">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
          </tr>
        </thead>

        
        <tbody>
        {currentItems && currentItems.map((emp, index) => {
            
            return (
              <>
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                <td style={{textAlign:"center"}}><button className='btn btn-success m-2' onClick={ ()=>                   
                    {
                        
                        swal({
                            title: "Are you sure?",
                            text: "Once deleted, you will not be able to recover this imaginary file!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {                         
                                props.deleteData(emp.id)       
                              swal("Employee " + name + " has been deleted!", {
                                icon: "success",
                              });
                            } else {
                              swal("Your imaginary file is safe!");
                            }
                          });
                    }
                    
                    }
                    >Delete</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={
                        ()=>{setData(emp.name,emp.age,emp.salary)
                        setFlag(flag);}
                    } data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                    </td>
                    
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      </div>
      <div className='col-6 row m-5'>
      
      <ReactPagination
       
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={0}          
        onPageChange={handlePageClick}      
        pageRangeDisplayed={5}           
        renderOnZeroPageCount={null}    
        nextLabel="next >"
        previousLabel="< previous"

        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}        
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        pageCount={pageCount}

      />
</div>
      
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Employee</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Name<input type="text" className='form-control' onChange={changeEventHandler} name="eName" value={name}></input>
    Age<input type="text" className='form-control' onChange={changeEventHandler} name="eAge" value={age}></input>
    Sal<input type="text" className='form-control' onChange={changeEventHandler} name="eSal" value={sal}></input>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss={flag?"modal":null} onClick={()=>{            
            props.updateData(name,age,sal)
              swal({
                title: "Success!",
                text: "Data updated for employee " + name,
                icon: "success",
              })
              this.close();
              
            }}>Update</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
