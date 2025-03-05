import { FcVideoCall } from "react-icons/fc";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiCopyright, PiPhoneCallBold } from "react-icons/pi";
import { LiaApple } from "react-icons/lia";
import { FaGooglePlay } from "react-icons/fa6";
import React, { FormEvent, useState } from "react";

export default function Tp() {
  // definition de l'interface qui gere les donnees a recuperer au niveau du formulaire
  interface FormDataParams {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  }

  // definition du useState pour recuperer et gerer les donnees au niveau du formulaire
  const [formData, setFormData] = useState<FormDataParams>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // tableau des elements acceptables par phone number
  const filtrePhoneNumbre = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
  ];

  // defition du usestate pour gerer les erreurs de firstname
  const [errFirstName, setErrFirstName] = useState("");

  // definition du usestate pour gerer les erreurs de lastname
  const [errLastName, setErrLastName] = useState("");

  // declaration du usestate pour gerer les champs vide en cas d'un utilisateur malin
  const [errGeneral, setErrGeneral] = useState("");

  // variable pour gerer les erreurs de phone number
  const [errPhoneNumber, setErrPhoneNumber] = useState("");

  // variable pour gerer les erreurs d'email
  const [errEmail, setErrEmail] = useState("");

  // definition de la fonction pour faire la mise a jour de firstname
  function UpdateFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length <= 20) {
      setFormData({
        ...formData,
        firstName: value,
      });
      setErrFirstName("");
    } else {
      setErrFirstName("la taille ne doit pas depasser 20 caracteres");
    }
  }

  // definition de la fonction pour faire la mise a jour de lastname
  function UpdateLastName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length <= 20) {
      setFormData({
        ...formData,
        lastName: value,
      });
      setErrLastName("");
    } else {
      setErrLastName("la taille ne doit pas depasser 20 caracteres");
    }
  }

  // fonction pour faire la mise a jour de l'adresse email
  function UpdateEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  }

  // definition de la fonctino pour faire la mise a jour de phone number
  function UpdatePhoneNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if ([...value].every((char) => filtrePhoneNumbre.includes(char))) {
      setFormData({
        ...formData,
        phoneNumber: e.target.value,
      });
      setErrPhoneNumber("");
    } else {
      setErrPhoneNumber("Ce caractere n'est pas autorise");
    }
  }

  // fonction pour faire la mise a jour du message
  function UpdateMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  }

  // definition du style en cas d'erreur provenant de phonenumber
  const styleErrPhoneNumber = errPhoneNumber
    ? { borderColor: "red" }
    : undefined;

  // definition du style en cas d'erreur provenant de l'adresse email
  const styleErrEmail = errEmail ? { borderColor: "red" } : undefined;

  // definition du style en cas d'erreur provenant de firstname
  const stylefirstName = errFirstName
    ? { borderColor: "red", outline: "red" }
    : undefined;

  // definition du style en cas d'erreur provenant du last name
  const styleLastName = errLastName
    ? { borderColor: "red", outline: "red" }
    : undefined;

  // definition de la fonction annuler
  function Annuler() {
    formData.firstName = "";
    formData.lastName = "";
    formData.email = "";
    formData.phoneNumber = "";
    formData.message = "";
  }

  // definition de la variable pour verifier que le formulaire et bien et peut etre envoyer pour permettre d'afficher et cacher le message denvoi
  const [sendForm, setSendForm] = useState(false);

  // definition de la fonction qui permet la validation du formulaire
  function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.message
    ) {
      if (formData.email.endsWith("@gmail.com")) {
        setErrGeneral("");
        setErrEmail("");
        setSendForm(true);
        setTimeout(() => {
          setSendForm(false);
          Annuler();
        }, 3000);
      } else {
        setErrEmail("Email invalide");
      }
    } else {
      setErrGeneral("tous les champs doivent etre remplis");
    }
  }

  return (
    <>
      {/* definition du container general pour centrer tout */}
      <div className="flex justify-center m-36">
        {/* definition du contaire en gri */}
        <div className="h-360 w-300 bg-gray-300 rounded-xl p-20">
          {/* definition du container en blanc */}
          <div className="bg-white">
            {/* l'en tete */}
            <div className="p-4 bg-[url('/imgTp/Présentation1PNG.png')] bg-cover bg-center">
              {/* premier eleement en haut */}
              <div className="flex justify-between">
                {/* logo a gauche avec le texte */}
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-bl from-red-600 to-white"></div>
                  <div>Untitled UI</div>
                </div>

                {/* la liste des menus en haut */}
                <div className="flex gap-2 items-center">
                  <div className="font-bold text-xs">home</div>
                  <div className="font-bold text-xs">
                    <select name="" id="">
                      <option value="">Products</option>
                    </select>
                  </div>
                  <div className="font-bold text-xs">
                    <select name="" id="">
                      <option value="">Solutions</option>
                    </select>
                  </div>
                  <div className="font-bold text-xs">Pricing</div>
                  <div className="font-bold text-xs">
                    <select name="" id="">
                      <option value="">Ressources</option>
                    </select>
                  </div>
                  <div className="font-bold text-xs">
                    <select name="" id="">
                      <option value="">Company</option>
                    </select>
                  </div>
                  <div className="font-bold text-xs">
                    <select name="" id="">
                      <option value="">Carreers</option>
                    </select>
                  </div>
                  <div className="bg-black rounded-2xl">
                    <button className="text-white text-[10px] p-2">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* 2e element de l'entete */}
              <div className="mt-10 w-130 text-center flex flex-col mx-auto space-y-2">
                <div className="text-3xl font-bold">
                  We've got an entire team dedicated to supporting you and your
                  business
                </div>
                <div className="text-[13px] text-gray-500 font-semibold">
                  Get help 24/7, with our award-winning support network of
                  payments experts
                </div>

                {/* container des boutons au dessous des menus */}
                <div className="flex gap-2 mx-auto mt-5 mb-10">
                  <div className="text-black font-bold rounded-2xl border text-xs w-30 p-2 flex gap-1 items-center">
                    <span>
                      <FcVideoCall className="bg-white w-4 h-4" />
                    </span>
                    Book a call
                  </div>

                  <div className="bg-black font-bold text-white text-xs rounded-2xl p-2 w-30">
                    Get in touch
                  </div>
                </div>
              </div>
            </div>

            {/* cadre pour les images des filles  et garcons */}
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center h-45">
                <img src="/imgTp/img1.avif" alt="" className="w-full h-full" />
                <div className="relative bg-white w-40 flex flex-col -mt-12 mx-auto text-left px-2">
                  <div className="font-bold text-[13px]"> Tommy Rosum</div>
                  <div className="text-xs font-light">
                    Customer Sucess Agent
                  </div>
                </div>
              </div>
              <div className="text-center h-45">
                <img src="/imgTp/img2.avif" alt="" className="w-full h-full" />
                <div className="relative bg-white w-40 flex flex-col -mt-12 mx-auto text-left px-2">
                  <div className="font-bold text-[13px]">
                    Sophie chamberlain
                  </div>
                  <div className="text-xs">Specialized support</div>
                </div>
              </div>
              <div className="text-center h-45">
                <img src="/imgTp/img3.avif" alt="" className="w-full h-full" />
                <div className="relative bg-white w-40 flex flex-col -mt-12 mx-auto text-left px-2">
                  <div className="font-bold text-[13px]">Lana Steiner</div>
                  <div className="text-xs">Vp of Customer success</div>
                </div>
              </div>
              <div className="text-center h-45">
                <img
                  src="/imgTp/imggarcon.avif"
                  alt=""
                  className="w-full h-full"
                />
                <div className="relative bg-white w-40 flex flex-col -mt-12 mx-auto text-left px-2">
                  <div className="font-bold text-[13px]">Orlando Diggs</div>
                  <div className="text-xs">Customer Sucess Lead</div>
                </div>
              </div>
              <div className="text-center h-45">
                <img src="/imgTp/img4.avif" alt="" className="w-full h-full" />
                <div className="relative bg-white w-40 flex flex-col -mt-12 mx-auto text-left px-2">
                  <div className="font-bold text-[13px]">Sasha Kindred</div>
                  <div className="text-xs">Customer Sucess Lead</div>
                </div>
              </div>
            </div>

            {/* definition de la zone qui contient le formulaire et les informatons y relative */}
            <div className="flex justify-center p-16 gap-20">
              {/* zone des informations sur nous */}
              <div className="flex flex-col gap-5">
                {/* zone call us */}
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-[12px]">Call us</div>
                  <div className="text-xs text-gray-500 font-semibold">
                    Call our team Mon-fri from 8am to 5pm
                  </div>
                  <div className="font-bold text-xs flex items-center">
                    <span>
                      <PiPhoneCallBold />
                    </span>
                    +1(555)000-0000
                  </div>
                </div>

                {/* zone chat with us */}
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-[12px]">Chat with us</div>
                  <div className="text-xs text-gray-500 font-semibold">
                    Speak to our friendly team via live chat
                  </div>
                  <div className="text-xs font-bold flex items-center gap-2">
                    <span>
                      <IoChatbubblesOutline className="font-bold" />
                    </span>{" "}
                    Start a live chat
                  </div>
                  <div className="text-xs font-bold flex items-center gap-2">
                    <span>
                      <FiSend />
                    </span>
                    Shoot us an email
                  </div>
                  <div className="text-xs font-bold flex items-center gap-2">
                    <span>
                      <IoLogoTwitter />
                    </span>
                    Message us on twitter
                  </div>
                </div>

                {/* zone visit us */}
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-[12px]">Visit us</div>
                  <div className="text-xs text-gray-500 font-semibold">
                    Chat to us in person at our Melboume HQ
                  </div>
                  <div className="text-xs font-bold flex items-center gap-2">
                    <span>
                      <HiOutlineLocationMarker />
                    </span>
                    100 Smith street, Collingwood VIC 3066
                  </div>
                </div>
              </div>

              {/* zone du formulaire proprement dit */}
              <form onSubmit={HandleSubmit}>
                {errGeneral && (
                  <span className="text-red-500 text-xs">{errGeneral}</span>
                )}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4">
                    <div>
                      <div className="flex flex-col">
                        <div className="flex flex-col">
                          <label
                            htmlFor=""
                            className="font-bold text-xs text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            style={stylefirstName}
                            className="border border-gray-300 shadow p-2 font-semibold text-xs rounded-md"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={UpdateFirstName}
                            required
                          />
                        </div>
                        <div>
                          {errFirstName && (
                            <span className="text-xs text-red-500">
                              {errFirstName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <label
                          htmlFor=""
                          className="font-bold text-xs text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          style={styleLastName}
                          className="border border-gray-300 shadow p-2 font-semibold text-xs rounded-md"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={UpdateLastName}
                          required
                        />
                      </div>
                      <div>
                        {errLastName && (
                          <span className="text-red-500 text-xs">
                            {errLastName}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-bold text-xs text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        style={styleErrEmail}
                        type="email"
                        name=""
                        placeholder="you@company.com"
                        id=""
                        className="border border-gray-300 shadow p-2 font-semibold text-xs rounded-md"
                        value={formData.email}
                        onChange={UpdateEmail}
                        required
                      />
                    </div>
                    <div>
                      {errEmail && (
                        <span className="text-red-500 text-xs">{errEmail}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-bold text-xs text-gray-700"
                    >
                      Phone number
                    </label>
                    <div className="flex flex-col">
                      <div
                        style={styleErrPhoneNumber}
                        className="border border-gray-300 shadow p-0.5 rounded-md px-2 flex gap-2"
                      >
                        <select
                          name=""
                          id=""
                          className="font-bold text-gray-500 text-xs"
                        >
                          <option value="">US</option>
                        </select>
                        <input
                          type="text"
                          placeholder="+1(555) 000-0000"
                          className="p-1.5 font-semibold text-xs rounded-md"
                          value={formData.phoneNumber}
                          onChange={UpdatePhoneNumber}
                          required
                        ></input>
                      </div>
                      <div>
                        {errPhoneNumber && (
                          <span className="text-red-500 text-xs">
                            {errPhoneNumber}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-bold text-xs text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      className="border border-gray-300 shadow p-2 font-semibold text-xs rounded-md h-20"
                      placeholder="Leave us a message"
                      value={formData.message}
                      onChange={UpdateMessage}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button className="text-gray-200 font-bold hover:cursor-pointer bg-black text-[10px] p-2 w-full rounded-2xl">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {sendForm && (
              <div className="bg-green-300 h-20 text-2xl font-bold text-center pt-5">
                Formulaire envoyer avec succes
              </div>
            )}
          </div>

          {/* bas de page */}
          <div className="bg-black text-white p-8">
            {/* div pour le element en colonne de 6 */}
            <div className="grid grid-cols-6">
              {/* premier element de la colonne */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[9px]">Product</div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Overview
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Features
                </div>
                <div className="flex items-center text-[11px] font-bold space-x-2">
                  <div className="text-[11px] text-gray-200 font-semibold">
                    Solutions
                  </div>
                  <div className="rounded-2xl border border-white p-0.5 w-10 text-center text-[11px] text-gray-200 font-semibold">
                    New
                  </div>
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Tutorials
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Pricing
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Releases
                </div>
              </div>

              {/* deuxieme elemenet de la colonne */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[9px]">Company</div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  About us
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Careers
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Press
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  News
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Media kit
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Contact
                </div>
              </div>

              {/* 3e element de la colonne */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[9px]">Ressources</div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Blog
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Newsletter
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Events
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Help centre
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Tutorials
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Support
                </div>
              </div>

              {/* 4e element de la colonne */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[9px]">Social</div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Twitter
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  linkedIn
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Facebook
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Gith hub
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Angelist
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Dribbble
                </div>
              </div>

              {/* 5e element de la colonne */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[9px]">Legal</div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Terms
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Privacy
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Cookies
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Licenses
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Settings
                </div>
                <div className="text-[11px] text-gray-200 font-semibold">
                  Contact
                </div>
              </div>

              {/* 6e element de la colonne */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[9px]">Get the App</div>
                {/* container apple */}
                <div className="border border-white rounded flex items-center p-1 w-30">
                  <div className="h-full">
                    <LiaApple className="h-full w-7" />
                  </div>
                  <div>
                    <div className="text-[8px]">Download on the</div>
                    <div className="font-bold text-xs">App Store</div>
                  </div>
                </div>

                {/* container google */}
                <div className="border border-white rounded flex items-center p-1 w-30">
                  <div className="h-full">
                    <FaGooglePlay className="h-full w-7" />
                  </div>
                  <div>
                    <div className="text-[8px]">Download on the</div>
                    <div className="font-bold text-xs">App Store</div>
                  </div>
                </div>
              </div>
            </div>

            {/* dernire element de bas de page */}
            <div className="flex justify-between mt-12">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-gradient-to-bl from-red-600 to-white"></div>
                <div className="text-xs font-bold">Untitled UI</div>
              </div>
              <div className="text-[10px] text-gray-300 flex items-center gap-0.5">
                <span>
                  <PiCopyright />
                </span>
                2077 Untitled UI. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
