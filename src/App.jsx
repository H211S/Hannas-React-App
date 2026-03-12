import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import './Index.css'
import Login from './vyer/Login'
import Start from './vyer/Start'
import Informationssida from './vyer/Informationssida'
import Profil from './vyer/Profil'
import Header from './komponenter/Header'

{/*Skapar en funktion App.
  Sätter defaultläge till hooken useState(false), så användaren är utloggad vid första laddning av sidan.
  const [isLoggedIn] sätter minnet och [setIsLoggedIn] förklarar när det kan ändras. 

     */}

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
{/*Nedan är det som returneras. 
  BrowserRouter används för att skapa en ram för appen.
  I routes deklareras sedan olika sökvägar. 
     */}


  return (

    <BrowserRouter>
    
      <Header isLoggedIn={isLoggedIn}></Header>
    
         
         

     {/*En ternary operator ? frågar om isLoggedIn är sant eller falsk. 

     */}    
        <Routes>
        {!isLoggedIn ? (
          <>
          <Route path="/" element={<Login onLogin={()=> setIsLoggedIn(true)}/>}
          /> </>)

          : ( <>
          <Route path="/profil" element={<Profil />} />
            <Route path="/info" element={<Informationssida />} />
            <Route path="/start" element={<Start/>} />
            </>
          
      )}
    
    </Routes>
   </BrowserRouter>
  )
}

export default App
