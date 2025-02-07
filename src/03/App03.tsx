import Bienvenu from "../02/Bienvenu"
import Etudiant from "../02/Etudiants"
import TD from './td'

export default function App03(){

    const etu = (
        <Etudiant prenom="Caleb" nom="BALEGO" tel="72232699" />
    )

    const data =[
        1,
        2,
        3,
        4,
        5
    ]

    const listEtudiant = data.map((el,index)=>{
        return(
            <div key={index}>
                chiffre : {el} index{index}
            </div>
        )
    })

    const data2 = [
        "Laurant",
        "Florent",
        "Dimi"
    ]

    const welcom = data2.map((el,index)=>{
        return(
            <Bienvenu key={index} nom={el} />
        )
    })

    return (
        <div>
            {etu}
            {listEtudiant}
            {welcom}
            <div>
                <TD/>
            </div>
        </div>
    )
}