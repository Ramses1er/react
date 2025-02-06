interface Props {
  nom: string;
  lang?: string;
}

export default function BV(props: Props) {
  if (props.lang == "en") {
    return (
      <div>
        Welcome <strong>{props.nom}</strong>
      </div>
    );
  }
  return (
    <div>
      Bonjour <strong>{props.nom}</strong>
    </div>
  );
}
