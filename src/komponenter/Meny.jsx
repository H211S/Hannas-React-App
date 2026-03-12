import { useState } from "react";


{/* Bygger en komponent för meny. 
  Skapar en konstant med värde isOpen och set som kan ändra värdet. 
  Sätter useState på false = menyn är stängd som default. 
  
  
  I return:
  Skickar tillbaka menyn med olika styling för mobil och desktop-vy. */}

function Meny() { 

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex ">
        <ul className="flex gap-4 px-4 md:flex-row">
            <li>Start</li>
            <li>Utveckling</li>
            <li className="whitespace-nowrap">Logga in</li>
         </ul>
  </nav>
     
  )
}



export default Meny

