function Ranking () {

    return(
    <div className="mx-auto md:m-30 bg-white grid grid-flow-col grid-rows-3 gap-4 p-4 mt-12 md:grid-rows-1 md:grid-cols-3 items-center">
          

          <div className="row-span-3 flex justify-center md:order-2">
           <img className="h-40 min-w-40 p-2" src="/profilbild.png" alt="Profilbild, kvinna med mörkt hår. Orange bakgrund." />
            </div>
        

        <div className="col-span-2 md:col-auto flex flex-col justify-center md:order-1">
            
            <h2>#6 i din klass</h2>
        </div>

        

        <div className="col-span-2 row-span-2 md:row-auto flex flex-col justify-center md:order-3">
        

            <h2>#20 i din skola</h2>

        </div>


    </div>
    )
}

export default Ranking