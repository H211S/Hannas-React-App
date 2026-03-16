
import { Link } from "react-router-dom";


{/* Utgår från exempel i kursboken kap 11.
    
    Bygger MenyItem (fast gör inte ikoner)
    
    Byggt constant länk-lista i header. Bygger där också underrubriker. 
    Map:ar ut och lägger till länk, visar titel. 
    Sätter md:hidden i className för att gömma underrubrikerna i desktop. 
    */}

function MenyItem({item}) { 



  return (
    <li className="">

        <Link to ={item.href}>
            {item.title}
            </Link>

            {item.underlink && (
                <ul className="md:hidden">
                 {item.underlink.map((under)=> ( <li key={under.title}>
                 <Link to={under.href}>{under.title}</Link>
                </li>

                ))}
                </ul>

)}
</li>



   
     
  )
}



export default MenyItem
