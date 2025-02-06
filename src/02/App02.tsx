import BV from "./Bienvenu";
import Capitale from "./Capitale";
import Etudiant from "./Etudiants";

export default function App02() {
  return (
    <div>
      <Capitale pays="RCA" ville=" Bangui" />
      <Capitale pays="Cote d'ivoire" ville=" unknown" />
      <Capitale pays="Congo RDC" ville=" Kinshasa" />

      <Etudiant prenom="Caleb" nom="BALEGO" tel="72232699" />

      <BV lang="en" nom="Ramses" />
    </div>
  );
}
