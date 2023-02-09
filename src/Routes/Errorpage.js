import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Errorpage() {
  return (
    <>
    <div className="container">
        <div className="row">
    <div align="center" style={{margin:"50px"}}><img src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg" alt="Error" width="1000" height="750"/>
    </div>
    <div align="center" style={{margin:"50px"}}><NavLink to="/Home">Home</NavLink></div>
    </div>
    </div>
    </>
  )
}
