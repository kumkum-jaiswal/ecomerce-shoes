import spin from "../images/spinnergif.gif"
import { useState } from "react";

const PaymentDone=()=>{
    const [isLoading, setIsLoading] =useState(true);
    setTimeout(()=>{
         setIsLoading(false);
    }, 2000);

    return(
        <>
        <center>

            {isLoading? (
               <img src={spin} style={{width:"130px", height:"130px"}} />
            ) :(
              <div  id="pay" style={{height:"300px",marginTop:"25px", width:"600px"}}>
                   <h2 align="center" >Order confirmed</h2>
                <br/>
                <h4 align="center" style={{color:"black"}}>
             Your order has been placed succesfully  we will deliver your<br/> product
          within 5 to 6 working Day's</h4>
            <br/><br/>
          <h5 align="center"> Thank you for shopping with us</h5>
          </div>
            )}
        
          
          </center>
        </>
    )
}

export default PaymentDone;