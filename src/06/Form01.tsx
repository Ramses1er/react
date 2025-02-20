import { useId, useState } from "react";

export default function Form01() {
  const [chiffre, setChiffre] = useState<number>(100);
  const id = useId();

  function changement(e: React.ChangeEvent<HTMLInputElement>) {
    setChiffre(Number(e.target.value) || 0); // Convertit en nombre et gère les valeurs invalides
  }

  return (
    <>
      <div className="w-screen h-screen p-10">
        <div className="space-x-2">
          <label htmlFor={id}>Chiffre</label>
          <input
            id={id}
            type="number"
            value={chiffre}
            onChange={changement}
            className="border rounded-lg p-2 w-25 text-center"
          />
        </div>
        <div>
          <div>Résultat automatique</div>
        </div>
        <div>{chiffre * 2}</div>
      </div>
    </>
  );
}
