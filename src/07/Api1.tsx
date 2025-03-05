import { useEffect, useState } from "react";

export default function TP(){

  interface Book{
    title : string,
    originalTitle: string,
    releaseDate: string,
    description:string,
    pages:number,
    cover:string
  }

  const [livre,setLivre] = useState<Book | null >(null)

  async function Next(){
    const recherche = await fetch("https://potterapi-fedeperin.vercel.app/fr/books/random");
    const data = await recherche.json()
    setLivre(data)
  }

  useEffect(function(){
    Next()
  },[])

 return (
   <>
     <div>
       <button className="bg-blue-400 rounded-2xl w-20" onClick={Next}>
         Next
       </button>
       {livre && <div>
         <div>{livre.title}</div>
         <div>{livre.originalTitle}</div>
         <div>{livre.releaseDate}</div>
         <div>{livre.description}</div>
         <div>{livre.pages}</div>
         <img src={livre.cover} />
       </div>}
     </div>
   </>
 );
}