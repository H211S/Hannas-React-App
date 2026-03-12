import MenyItem from "./MenyItem";


{/*Bygger komponent DatorMeny. Importerar från MenyItem.
    Utgår från kurslitteratur kap 11. 
    
    Använder argument distructuring. Extraherar links.
    
    Använder iteration genom .map() för att skapa en lista av min
    meny. Använder key för att React ska veta vilket elemtn som ska ändras.
    
    {link.title} som står mellan koden skickas till min komponent MenyItems med propen Children.

    */}

function DatorMeny({links}) {

    return (
        <nav className="flex">
            <ul className="flex flex-row gap-6 px-4">
                {links.map((link)=> (<MenyItem key={link.title} href={link.href}>
                    {link.title}
                    
                    </MenyItem>
                
                ))}
            </ul>
        </nav>
        
    )
}






export default DatorMeny