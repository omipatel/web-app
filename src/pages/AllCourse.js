import React, { useState , useEffect} from "react";
import { Container } from "reactstrap";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AllCourse=()=> {
   
    
 
   const getAllCoursesFromServer = () =>{
    axios.get(`${base_url}/allCourse`).then(
     (response) => {
        console.log(response.data);
        setCourses(response.data);
        toast.success("success");
     },
     (error)=>{
        console.log("Error from server");
        toast.success("Error ! some thing wrong ");
     }
    )
   };
 
 //server loding 
 useEffect(()=>{
    getAllCoursesFromServer();
    },[]);


    const [courses,setCourses] =useState([

       /* {title: "java course", descDetails:"this is demo course"},
        {title: "mysql course", descDetails:"this is demo course"}, */
    ])
    
    return(
        <div>
          <h3>All Courses on loading...</h3>
           {
          courses.length >0 ? courses.map((item)=> <Course key={item.id} course={item} />) : "No course found"

           }
         </div>

)};


export default AllCourse;
