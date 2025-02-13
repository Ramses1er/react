import { useState } from "react";

export default function Ex02() {
    const [capital,setCapital] = useState("RCA")

    function RCA(){
        setCapital("Bangui")
    }

    function Gabon(){
        setCapital("Libre ville");
    }

    function RDC(){
        setCapital("Kinshasa");
    }

    function Burkina(){
        setCapital("Unkonwn");
    }

    function Nigeria(){
        setCapital("RAS");
    }

  return (
    <>
      <div>
        <button onClick={RCA}>RCA</button>
        <button onClick={Gabon}>Gabon</button>
        <button onClick={RDC}>RDC</button>
        <button onClick={Burkina}>Burkina</button>
        <button onClick={Nigeria}>Nigeria</button>
      </div>
      <div>la capitale : {capital}</div>
    </>
  );
}
