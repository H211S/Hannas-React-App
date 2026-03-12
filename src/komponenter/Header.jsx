
import DatorMeny from "./DatorMeny";
import HamburgerMeny from "./HamburgerMeny";


function Header({isLoggedIn}) { 

  const menyLinksGuest = [
    
    {title: "Start", href:"/start"},
    {title: "Utveckling", href:"/info"},
    {title: "Logga in", href: "/"},
  ];
   const menyLinksUser = [
    
    {title: "Start", href:"/start"},
    {title: "Utveckling", href:"/info",
       underlink: [{title: "Koldioxidutsläpp", href:"/info/koldioxidutsläpp"}]

    },
    {title: "Profil", href: "/profil"},
  ];

  const activeLinks =isLoggedIn ? menyLinksUser: menyLinksGuest;


  return (
    <header className="bg-neutral-200 flex justify-between items-center">
       
         <div className="flex-shrink-0">
           <img className="h-12 w-auto p-2" src="/logo.png" alt="Logotyp" />
        </div>
        <div className="hidden md:block">
         <DatorMeny links={activeLinks}/>
        </div>
        <div className="md:hidden">
         <HamburgerMeny links={activeLinks}/>
        </div>
     
    </header>
     
  )
}

export default Header
