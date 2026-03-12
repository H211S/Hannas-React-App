import { useState } from "react";
import { Link } from "react-router-dom";


{/* Utgår från exempel i kursboken kap 11.
    
    Bygger MenyItem (fast gör inte ikoner) 
    href söker länk och namn på länken children*/}

function MenyItem({ href, children}) { 
    



  return (
    <li className="">
        <Link to ={href} className="">
            {children}
            </Link>
    </li>
     
  )
}



export default MenyItem
