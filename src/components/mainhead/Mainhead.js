import React, { useState } from 'react'
import PropsDemo1 from "../props/PropsDemo1";
import products from "../products/products.json";

export default function Mainhead() {
    const [show, setType] = useState(true);

  const setInputType = () => {
    setType(!show);
  };

  const workProgress = () => {
    alert("Hi");
  };
  return (
    <>
      <div className="d-flex" style={{padding:"20px"}}>
        <div className="d-inline-block" style={{ textAlign: "left" ,height: "80px"}}>
          <img
            style={{ width: "100%",height:"100px" }}
            alt="OMSystems"
            src="/images/sys.png"
            className="img-responsive"
          
          />
        </div>
        {/* <div className="d-inline-block col-2" style={{ textAlign: "left" }}>
          <img    style={{ width: "100%",height: "80px" }}     alt="OMSystems"      src="/images/omsystem.png"   className="img-responsive" 
          />
        </div> */}
        <div className="d-inline-block col-6">
          <marquee style={{ paddingTop: "20px", color: "#c1f1f1" }}>
            <h1>
            
                 Naresh systems Pvt limited 
             
            </h1>
          </marquee>
        </div>
        <div
          className="d-inline-block col-1"
          style={{ textAlign: "center", margin: "20px" }}
        >
          {" "}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Login
          </button>{" "}
        </div>

     
        
       
<div d-inline-block col style={{ color: "navajowhite" }}>
          Contact Us
          <br />
          Mr.Sakinala Naresh,Director of Naresh systems,
          <br />
          Maitrivanam, Hyderabad{" "}
        </div>

<div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
  <div class="modal-dialog" style={{marginRight:"50%"}}>
    <div class="modal-content" style={{width:"1000px"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="productModalLabel">Products List</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
        <div className="row">
        {products.map((product) => {
        return <PropsDemo1 prod={product} key={product.id}></PropsDemo1>;
      })}
        </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>


        
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalproduct"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="container m-1 b-1">
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control m-1"
                        id="inputEmail3"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword3"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type={show ? "password" : "text"}
                        className="form-control m-1"
                        id="inputPassword3"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={setInputType}
                          id="gridCheck1"
                        />
                        <div style={{ textAlign: "left" }}>Show Password</div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={workProgress}
                className="btn btn-primary"
              >
                Login
              </button>
              
            </div>
          </div>
        


</div>
      </div>
    </>
  )
}
