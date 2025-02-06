interface Props {
  pays: string; //c'est le nom du pays
  ville: string; //c'est le nom de la ville
}

export default function Capitale(props: Props) {
  return (
    <div
      style={{
        border: "solid 1px blue",
        padding: 5,
        borderRadius: 5,
        margin: 5,
        fontSize: 30,
      }}
    >
      la capitale de <strong> {props.pays} </strong>est
      <strong>{props.ville} </strong>
    </div>
  );
}
