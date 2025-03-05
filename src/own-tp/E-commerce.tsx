import axios from "axios";
import { useEffect, useState } from "react";

export default function Ecom(){
    interface ParaMProduit {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
    }

    useEffect(() => {
      AffichageDonnees();
    }, []);

    const [listproduit,setListeproduit] = useState<ParaMProduit[]>([])

    async function AffichageDonnees(){
        const recherche = await axios.get('https://fakestoreapi.com/products')
        setListeproduit(recherche.data)
    }

    if(!listproduit){
        return <Empty/>
    }

    return(
        <div className="bg-gray-300 w-full h-full flex justify-center">
            <div className="grid grid-cols-5 gap-2 p-4 w-300">
                {
                    listproduit.map(produit=>{
                        return (
                          <div key={produit.id} className="p-4"> 
                            <div>
                              <img src={produit.image} alt="" className="w-50 h-50"/>
                            </div>
                            <div className="text-xl font-bold">{produit.title}</div>
                            <div className="font-semibold italic">{produit.price} {' '}Euro</div>
                            <div className="text-blue-600 font-semibold">{produit.category}</div>
                            <div>{produit.description}</div>
                          </div>
                        );
                    })
                }
            </div>
        </div>
    )

}


function Empty(){
    return (
      <div>😂</div>
    );
}