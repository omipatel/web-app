import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, Container} from "reactstrap"; 
import base_url from "../api/bootapi";
import axios from "axios";
import Toast, { toast } from "react-toastify";
 

const Course=({course})=> {

  const deleteCourse =(id) =>{
    axios.delete(`${base_url}/course/${id}`).then(
        (response) => {
           console.log(response.data);
           toast.success("Delete success"); 
        },
        (error)=>{
           console.log("Error from server");
           toast.success("Error ! Some thing want wrong");
        }
       )


  }

    return(            
           <Card>
            <CardBody>
            <CardSubtitle className="font-weight-bold" >{course.courseTitle}</CardSubtitle>
            <CardText> {course.descDetails}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=> {
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="warning">Update</Button>
            </Container>
            </CardBody>
           </Card>
         

)};


export default Course;
