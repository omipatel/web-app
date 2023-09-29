import React from "react";
import { Card, CardHeader } from "reactstrap";

 
const Header=()=>{
    return(
       <div>
        <Card
  className="my-2"
  style={{
    width: '100%'
  }}
>
  <CardHeader>
    <h2> Welcome to My page</h2>
  </CardHeader>
       </Card>
      </div>
   );
     
}
export default Header ;