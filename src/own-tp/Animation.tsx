import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./style.css";

export default function AnimC() {
    interface Params{
        id:number
    }
  const [etatCoeur, setEtatCoeur] = useState(false);
  const [lesCeurs,setLesCoeurs] = useState<Params[]>([])
  const tailleTab = lesCeurs.length > 0
  function Aimer() {
    setEtatCoeur(!etatCoeur);
   
    const coeurs = []

    for(let i = 0; i < 3; i++){
        coeurs.push({
            id:Math.random()
        })
    }

    setLesCoeurs(coeurs)

    setTimeout(() => {
        setLesCoeurs([])
    }, 2000);

  }
  return (
    <div className="bg-green-200 w-screen h-screen flex justify-center items-center">
      {tailleTab && (
        <div className="absolute flex space-x-2 justify-center items-center w-1/2 h-1/2">
            {
                lesCeurs.map(e=>{
                    return (
                      <span key={e.id} className="text-pink-900 animC mt-50">
                        <FaRegHeart />
                      </span>
                    );
                })
            }
          
        </div>
      )}
      <div className="flex flex-col border w-50 h-100 bg-amber-100">
        <div className="text-center bg-blue-300">header</div>
        <div className="flex-1 text-center bg-red-200">body</div>
        <div className="flex justify-center items-center bg-cyan-300">
          {etatCoeur ? (
            <button onClick={Aimer}>
              <FaRegHeart className="size-10 cursor-pointer" />
            </button>
          ) : (
            <button
              onClick={() => {
                setEtatCoeur(!etatCoeur);
              }}
            >
              <FaHeart className="text-pink-600 size-10 cursor-pointer" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
