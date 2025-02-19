export default function J2() {
  return (
    <>
      <div className="px-2">
        <div>
          <h1 className="text-2xl font-bold">1. Couleur en tailwind</h1>
          <p className="text-red-600">text en rouge</p>
          <p className="text-green-600">text en vert</p>
          <p className="text-pink-800">en rose</p>
          <p>la couleur varie de 100 a 900</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">2.Couleur de fond</h1>
          <div className="bg-black text-white px-2">
            font noire text blanc padding gauche 4
          </div>
          <div className="bg-red-200 px-4">
            fond rouge claire text noire par defaut padding 4
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">3.Taille du texte</h1>
          <p className="text-xs">text tres petit</p>
          <p className="text-sm">text petit</p>
          <p className="text-lg">text grand</p>
          <p className="text-2xl">text tres grand(2xl-9xl)</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            4.Espacement: padding et margin
          </h1>
          <div className="bg-cyan-500 px-4 py-0 pt-10 ml-5">
            bloc avec padding et margin
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">5. Largeur hauteur</h1>
          <div className="bg-amber-200 w-1/2 h-32">
            Bloc de 50% de largeur et 128px de hauteur
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">6.Bordure</h1>
          <div className="p-2 bg-blue-300 border border-gray-900">
            bloc avec bordure grise
          </div>
          <div className="p-5 border-2 border-red-600 mt-1">
            bloc avec bordure rouge epai
          </div>
          <div className="p-3 border-t-2 border-gray-500 mt-2 ">
            bordure superieur only en gray
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">7.Coin arrondi</h1>
          <div className="rounded-lg border p-3">bloc avec de coin arrondi</div>
          <div className="rounded-full p-5 border">un cercle parfait</div>
        </div>

        <div>
          <h1 className="font-bold text-2xl">8.flexbox</h1>
          <div className="bg-cyan-400 h-32 flex justify-center items-center">
            <p>eleement centrer</p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">9.Hidden block inline-block</h1>
          <p className="hidden">Ce texte est caché</p>
          <p className="block">Texte affiché en block</p>
          <p className="inline-block">Texte en inline-block</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">10.Opacite</h1>
          <div className="p-4 bg-amber-100 opacity-50">Texte semi-transparent</div>
        </div>
      </div>
    </>
  );
}
