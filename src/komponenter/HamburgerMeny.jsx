import { useState } from "react";
import MenyItem from "./MenyItem";


function HamburgerMeny ({links}){

const [isOpen, setIsOpen] = useState(false)


    return (
    <nav className="relative flex items-center">

        <button className="px-2" onClick={()=> setIsOpen (!isOpen)}>
            {isOpen ? "X" : "☰"}
        </button>

        {isOpen && (
            <ul className="bg-neutral-300 absolute right-0 top-full flex flex-col gap-6 p-6 mt-3 w-40 h-screen"> 
                {links.map((link)=> (<MenyItem key={link.title} href={link.href}>
                    {link.title}
{links.underlink && (<ul className="">
                        {link.underlink.map((under)=>(
                            <MenyItem key={under.title} href={under.href}>
                                {under.title}
                            </MenyItem>
                        ))}
                    </ul>)}



                    </MenyItem>
                
                ))}
            </ul>

            )}
        </nav>
)}



export default HamburgerMeny