import React, { FormEvent, useState } from "react";

export default function TPFORM() {
  interface ChampFormulaire {
    email: string;
    objet: string;
    message: string;
  }

  const [champForm, setChampForm] = useState<ChampFormulaire>({
    email: "",
    objet: "",
    message: "",
  });

  const [errEmail, setErrEmail] = useState("");
  const [errObjet, setErrObjet] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const styleErrEmail = errEmail ? { borderColor: "red" } : undefined;
  const styleErrObjet = errObjet ? { borderColor: "red" } : undefined;
  const styleErrMessage = errMessage ? { borderColor: "red" } : undefined;

  function handleAnnuler() {
    setChampForm({
      email: "",
      objet: "",
      message: "",
    });
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setChampForm({
      ...champForm,
      email: e.target.value,
    });
  }

  function handleChangeObjet(e: React.ChangeEvent<HTMLInputElement>) {
    setChampForm({
      ...champForm,
      objet: e.target.value,
    });
  }

  function handleChangeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setChampForm({
      ...champForm,
      message: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (champForm.email.endsWith("@gmail.com")) {
      setErrEmail("");
      if (champForm.objet.length <= 25 && champForm.objet) {
        setErrObjet("");
        if (champForm.message.length >= 25) {
          setErrObjet("");
          setErrMessage("");
        } else {
          setErrMessage("taille au moi 20 caractere");
        }
      } else {
        setErrObjet("la taille de l'objet max 25 caractere");
      }
    } else {
      setErrEmail("Email invalid");
    }
  }

  return (
    <div className="bg-gray-300 w-screen h-screen flex items-center">
      <div className="bg-gray-100 w-1/2 h-90 mx-auto flex shadow-2xl rounded-2xl">
        <div className="p-4 flex-1">
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="" className="text-md font-bold">
                Email{" "}
              </label>
              <input
                type="text"
                className="border border-blue-300 w-100 p-1 px-2 rounded-xl outline-blue-500"
                value={champForm.email}
                onChange={handleChangeEmail}
                style={styleErrEmail}
                required
              />
              {errEmail && (
                <span className="text-red-500 text-xs">{errEmail}</span>
              )}
            </div>
            <div className="m-3">
              <label htmlFor="" className="text-md font-bold">
                Objet{" "}
              </label>
              <input
                type="text"
                className="border border-blue-300 w-100 p-1 px-2 rounded-xl outline-blue-500"
                value={champForm.objet}
                onChange={handleChangeObjet}
                style={styleErrObjet}
                required
              />
              {errObjet && (
                <span className="text-red-500 text-xs">{errObjet}</span>
              )}
            </div>
            <div className="m-3">
              <label htmlFor="" className="text-md font-bold">
                Message{" "}
              </label>
              <textarea
                name=""
                id=""
                className="border border-blue-300 w-100 h-20 p-1 px-2 rounded-xl outline-blue-500"
                value={champForm.message}
                onChange={handleChangeMessage}
                style={styleErrMessage}
                required
              ></textarea>
              {errMessage && (
                <span className="text-red-500 text-xs">{errMessage}</span>
              )}
            </div>
            <div className="-mt-7 p-4 flex gap-10">
              <input
                type="submit"
                value="Envoyer"
                className="w-30 bg-blue-400 p-2 rounded-md hover:cursor-pointer"
              />
              <button
                onClick={handleAnnuler}
                className="w-30 bg-blue-400 p-2 rounded-md hover:cursor-pointer"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
        <div className="bg-blue-200 p-4 text-5xl font-bold text-center pt-30 rounded-r-2xl">
          CBK Corps{" "}
        </div>
      </div>
    </div>
  );
}
