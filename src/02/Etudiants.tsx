interface Props{
    prenom : string 
    nom : string
    tel : string
}

export default function Etudiant(props:Props){
    return (
      <div style={{border:'dotted 1px blue',
        padding:10,
        margin:10
      }}>
        <p>
          <strong>Prenom : {props.prenom}</strong>
        </p>
        <p>
          <strong>Nom : {props.nom}</strong>
        </p>
        <p>
          <strong>Tel : {props.tel}</strong>
        </p>
      </div>
    );
}