const pays = [
  {
    nom: "RCA",
    capital: "Bangui",
    population: 3500000,
    drapeau: "/RCA.jpeg",
  },
  {
    nom: "Camerou",
    capital: "Yandoue",
    population: 3500000,
    drapeau: "/OIP.jpeg",
  },
];
    

export default function TD(){
    return(
        pays.map((e,index)=>{
            return (
              <div key={index}>
                <p>Nom pay : {e.nom}</p>
                <p>Capitale : {e.capital}</p>
                <p>Population: {e.population}</p>
                <p>
                    Drapeau : <img src={e.drapeau} alt="drapeau" />
                </p>
              </div>
            );
        })
    )
}