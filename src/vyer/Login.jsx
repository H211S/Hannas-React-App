import { useState} from "react"
import Button from "../komponenter/Button"
import { useNavigate } from "react-router-dom"

//Lägger till funktion för inlogg onLogin

{/*
    Sätter funktion för inlogg
    
    Konstant användare och lösenord
    Navigate
    */}

function Login ({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {e.preventDefault()
        if (username === "HannaS" && password === "LoggaIn") {
            onLogin(true)
        navigate("/start")}
            else {alert("Fel användarnamn eller lösenord, försök igen!")}
            }
        

return (

<div className="rounded mt-12 bg-neutral-200 container mx-auto p-10 max-w-sm">
    <div className="flex justify-center">
           <img className="h-auto" src="/logo.png" alt="Logotyp" />
        </div>

        <p className="p-6">Logga in för att få tillgång till din profil och se din historik.</p>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col"> Användarnamn:
            <input type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded border border-neutral-600 bg-white p-2 " placeholder="Användarnamn"/>
        </label>
        <label className="flex flex-col"> Lösenord:
            <input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded border border-neutral-600 bg-white p-2 " placeholder="Lösenord"/>
        </label>

        <Button></Button>


    </form>
</div>
)


}

export default Login