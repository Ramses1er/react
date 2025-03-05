export default function J9(){
    return (
      <>
        <div>shadow c'est pour les effet de bord</div>
        <div>opacity : pour l'opacite</div>
        <div>blur : pour gerer l'effet de floutage</div>
        <div className="bg-white p-6 rounded-lg shadow-2xl">
          <p className="text-gray-800 font-semibold">Carte avec ombre</p>
        </div>
        <img
          src="/CBK-corps-logo.jpg"
          alt="Image"
          className="w-48 h-48 blur-xs transition-filter duration-1000 ease-in-out hover:blur-none"
        />
        <div>
          drop shadow
          <div className="bg-white p-6 rounded-lg drop-shadow-lg drop-shadow-red-500">
            <p className="text-gray-800 font-semibold">Ombre douce rouge</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg shadow-red-500/30">
          <p className="text-gray-800 font-semibold">Ombre rouge</p>
        </div>
        <div className="p-4 m-4 shadow-lg shadow-blue-700/20">
            le train marche deja on va y arriver
        </div>
      </>
    );
}