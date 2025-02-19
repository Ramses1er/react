export default function J4(){
    return (
      <>
        <div>
          <h1 className="font-bold text-2xl">
            1.Marges : sont les espaces exterieurs autour d'un element
          </h1>
          <div className="m-4 bg-red-500">marge 4</div>
          <div className="bg-amber-300 mt-4 mb-6">marge haut 2 en ba 6</div>
          <div className="bg-pink-300 w-1/2 mx-auto">
            centrer horizontalement
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            2.Padding : definit l'espace interieur d'un element
          </h1>
          <div className="bg-black text-white p-4">padding de 4</div>
          <div className="bg-amber-300 px-6 py-2">
            padding horizontal 6 et vertical 2
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            3. Espacement Entre les Enfants (gap-*) : Quand on utilises flex ou
            grid, gap-* contrôle l’espace entre les éléments.
          </h1>
          <div className="flex gap-2">
            <div className="bg-blue-500 p-4">1</div>
            <div className="bg-red-500 p-4">2</div>
          </div>
        </div>
      </>
    );
}