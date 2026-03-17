import infoUtbildning from "../data/data"
import KortProfil from "../komponenter/KortProfil"
import LektionsKort from "../komponenter/LektionsKort"

function Start () {

return (

<>
<KortProfil/>

<div> {infoUtbildning.map((lektion) => 
(<LektionsKort key={lektion.id}
    item={lektion} />
))}
</div>

</>

)


}

export default Start