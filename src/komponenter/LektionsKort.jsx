import { Link } from "react-router-dom";

function LektionsKort ({item}) {

    if (!item) return null; 
    //Lägger till ifall item saknas så returernas ingenting så sidan inte hänger sig. 


   return (
    <div className="bg-white flex flex-col md:flex-row gap-4 items-center text-center">
            <img src={item.image}
            alt={item.title}/>

            <h3> {item.title}</h3>

            <p>{item.description}</p>

            <Link to={item.href}>
            Ta nästa lektion</Link>


    </div>


   ) 
}

export default LektionsKort