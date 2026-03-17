function KortProfil () {

    return(
    <div className="container grid grid-cols-1 bg-white container mx-auto md:grid-cols-2 p-12 mt-12 gap-8">
          

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
            <div className="grid">
           <img className="h-40 min-w-40 p-2" src="/profilbild.png" alt="Profilbild, kvinna med mörkt hår. Orange bakgrund." />
            </div>
            <div>
            <h2>Välkommen tillbaka Hanna!</h2>
            <p>Läs igenom en ny lektion för att nå dagens mål.</p>
            </div>
        </div>

        <div className="grid gap-4 ">

            <h2>Två av tre lektioner genomförda!</h2>
            <img className="w-60" src="/progressbar.png" alt="En horisontell stapel som är 2/3-del fylld." />

        </div>


    </div>
    )
}

export default KortProfil