export default function J8(){
    return (
      <>
        <div className="p-4 space-y-5">
          <button className="bg-blue-500 text-white p-4 rounded-lg transition duration-1000 ease-in-out hover:bg-red-500">
            Survole-moi
          </button>
          <div className="bg-amber-400 w-28 p-4 rounded-2xl text-center opacity-0 transition-opacity duration-1000 easein-in-out hover:opacity-100">
            hover me
          </div>
          <input
            type="text"
            className="border w-16 p-2 rounded-2xl transition-all duration-1000 ease-in-out focus:w-116"
            placeholder="Recherche..."
          />
        </div>
        <div className="bg-amber-100 p-4 flex gap-2 transition-all duration-1000 ease-in-out hover:flex-col">
          <div className="bg-blue-300 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            aliquid!
          </div>
          <div className="bg-red-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quas
            odio eos nesciunt ipsa dolorem?
          </div>
          <div className="bg-yellow-300 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            aliquid!
          </div>
          <div className="bg-pink-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quas
            odio eos nesciunt ipsa dolorem?
          </div>
        </div>
        <button className="bg-purple-500 text-white p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-120 active:scale-50">
          Bouton animé
        </button>
        <button className="bg-blue-500 p-4 rounded-2xl transition-transform duration-500 ease-in-out active:scale-90 hover:scale-110">Clique ici</button>
      </>
    );
}

