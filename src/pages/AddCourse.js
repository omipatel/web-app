import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form,FormGroup,Label,Input,FormText,Button } from "reactstrap";
import base_url from "../api/bootapi";
 
const AddCourse=()=>{
  useEffect(()=>{
    document.title="Add Course || GuruTech";
  },[]);

   const [course,setCourse] =useState({});

  //form handler function

  const handleForm =(e) =>{
  console.log(course);
  postDatetoServer(course);
  e.preventDefault();

  }

  //Creating function to add server
  const postDatetoServer =(data)=> {
    axios.post(`${base_url}/course`,data).then(
    (response) =>{
      console.log(response);
      console.log("success");

    },(error)=>{
      console.log(error);
      console.log("Error");

    } 
     );
  }

 return(
      <div>
        <h3>Fill the details of Course</h3>
        <Form onSubmit={handleForm}>
          <FormGroup>
    <Label>
      Course Id
    </Label>
    <Input
      id="courseId"
      name="courseId"
      placeholder="Enter the Course Id"
      type="text"
      onChange={(e) =>{
      setCourse({...course , id: e.target.value});
      }}
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Course Name 
    </Label>
    <Input
      id="courseName"
      name="courseName"
      placeholder="Enter the course Name"
      type="text"
      onChange={(e) =>{
        setCourse({...course , courseTitle: e.target.value});
        }}
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Course Details
    </Label>
    <Input
      id="descDatails"
      name="descDatails"
      placeholder="Enter the course descDatails"
      type="text"
      onChange={(e) =>{
        setCourse({...course , descDetails: e.target.value});
        }}
    />
  </FormGroup>
  <Button type="submit">save</Button>
     <Button type="reset">
        clear</Button>
        
     </Form>   

    
        

    </div>
 );   
}
export default AddCourse;