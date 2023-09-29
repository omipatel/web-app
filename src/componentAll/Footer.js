import React from "react";
import { Card ,CardFooter} from "reactstrap";

const Footer=()=> {

    return(
        <div>
        <Card 
  className="my-2" 
  style={{
    width: '100%' 
  }}
>        <CardFooter>
      <h1>Footer copy@2023</h1>
      </CardFooter>
    </Card>
        
</div>

    );
}

export default Footer;