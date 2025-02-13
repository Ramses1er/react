import { useState } from "react";
import Drapeau from "./Drapeau";
import Ex02 from "./Ex2";

export default function App() {
  const [valeur, setValeur] = useState(0);

  function Augementer() {
    setValeur(v=>v+1)
  }

  function Diminuer() {
    setValeur((v) => v - 1);
  }

  return (
    <div>
      <button onClick={Diminuer}>-</button>
      Compteur : {valeur}
      <button onClick={Augementer}>+</button>
      <div>
        <Drapeau/>
        
        <Ex02/>
      </div>
    </div>
  );
}


