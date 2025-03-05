export default function J5(){
    return (
      <div>
        <div className="bg-blue-200 w-full p-4 m-4 gap-1 flex ">
          Jour 5 : Espacement (p, m, w, h).
          <p>p c'est le padding</p>
          <p>m le margin</p>
          <p>w la largeur et h la hauteur</p>
        </div>
        <div className="p-6 m-4 bg-blue-300">
          <h2 className="text-white">Titre</h2>
          <p className="text-white">Texte avec du padding et de la marge.</p>
        </div>
        <div className="w-1/2 bg-green-300">
          <h2 className="text-white">Box avec dimensions</h2>
        </div>
      </div>
    );
}