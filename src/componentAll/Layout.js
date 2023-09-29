  import React from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css'; 
  import {Routes,Route, Link, BrowserRouter } from "react-router-dom";
  import { ListGroup } from 'reactstrap';
 
  const Layout =() => {    
    return (
     <ListGroup>
        <Link className="list=group-item list-group-item-action" tag="a" to="/"> Home</Link>  
        <Link className="list=group-item list-group-item-action" tag="a" to="/all-Courses" > All Courses </Link>
        <Link className="list=group-item list-group-item-action" tag="a" to="/addCourse"> Add Course </Link>  
        <Link className="list=group-item list-group-item-action" tag="a" to="/contact" > Contact </Link>
     </ListGroup>         
      );
  }

export default Layout;