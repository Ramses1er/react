import { useState } from "react";

export default function Form2(){
    const [to,setTo] = useState("")
    const [objet, setObjet] = useState("")
    const [mes, setMes] = useState("")
    function envoyerM(){
        alert("message envoye a " + to)
        effacer()
    }
    function effacer(){
        setTo('')
        setObjet('')
        setMes('')
    }
    function sendMessage(){

    }
    return (
      <div className="p-8">
        <form onSubmit={sendMessage} action="">
          <div>
            <label htmlFor="" className="font-bold">
              Destinateur <span className="text-red-500 font-bold">*</span>{" "}
            </label>
            <input
              type="email"
              className="border block p-1 rounded-sm shadow"
              placeholder="email destinateur"
              value={to}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setTo(e.target.value)
              }
              required
            />
          </div>
          <div>
            <label htmlFor="" className="font-bold">
              Sujet de message <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border block p-1 rounded-sm shadow"
              placeholder="Objet"
              value={objet}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setObjet(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="font-bold">
              Message <span className="text-red-500 font-bold">*</span>
            </label>
            <textarea
              className="border block p-1 rounded-sm shadow w-47"
              placeholder="email destinateur"
              value={mes}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
                setMes(e.target.value);
              }}
              required
            />
          </div>
          <div className="space-x-1 pt-1 flex w-47">
            <button
              className="border border-blue-600 p-1 bg-blue-500 rounded-sm w-1/2 cursor-pointer"
              type="submit"
            >
              Envoyer
            </button>
            <button
              className="border border-blue-600 p-1 bg-red-300 rounded-sm w-1/2 cursor-pointer"
              onClick={effacer}
            >
              Effacer
            </button>
          </div>
        </form>
      </div>
    );
}