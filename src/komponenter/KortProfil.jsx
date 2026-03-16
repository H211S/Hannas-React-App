function KortProfil () {

    return(
    <div className="bg-white container flex md:mx-auto p-12 mt-12">
          <div className="grid">
           <img className="h-40 min-w-40 p-2" src="/profilbild.png" alt="Profilbild, kvinna med mörkt hår. Orange bakgrund." />
            </div>

        <div>
            <h2>Välkommen tillbaka Hanna!</h2>
            <p>Läs igenom en ny lektion för att nå dagens mål.</p>
        </div>

        <div>
            <h2>Två av tre lektioner genomförda!</h2>
            <img className="" src="/progressbar.png" alt="En horisontell stapel som är 2/3-del fylld." />

        </div>


    </div>
    )
}

export default KortProfil