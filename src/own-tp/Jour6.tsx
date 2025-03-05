export default function J6() {
  return (
    <div className="p-4 space-y-5">
      <div>
        <p className="font-bold text-xl">
          1. Definition de la taille du text : text-*
        </p>
        <p className="text-xs">texte tre petit</p>
        <p className="text-base">text normal</p>
        <p className="text-2xl">text plu grand</p>
        <p className="text-5xl">text enorme</p>
      </div>
      <div>
        <p className="text-xl font-bold">
          2. Definir la graisse de la police : font-*
        </p>
        <p className="font-thin">text avec font thin</p>
        <p className="font-extralight">text avec font extralight</p>
        <p className="font-light">text avec font light</p>
        <p className="font-normal">text avec font normal</p>
        <p className="font-medium">text avec font medium</p>
        <p className="font-semibold">text avec semibold</p>
        <p className="font-bold">text avec font bold</p>
        <p className="font-black">text avec font black</p>
      </div>
      <div>
        <p className="font-bold text-xl">
          3. Definir l'interligne : leading-* : L’interligne permet de gérer
          l'espacement vertical entre les lignes.
        </p>
        <p className="leading-none">interligne tres serre</p>
        <p className="leading-normal">interligne normal</p>
        <p className="leading-loose">interligne large</p>
      </div>
      <div>
        <p className="text-xl font-bold">
          4. Définir l’espacement des lettres (tracking-*) L’espacement des
          lettres permet de régler l’espace horizontal entre les caractères.
        </p>
        <p className="-tracking-tighter">espacement reduit (tighter)</p>
        <p className="tracking-normal">espacement normal (normal)</p>
        <p className="tracking-wide">espacement large (wide)</p>
      </div>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          John Doe
        </h2>
        <p className="text-lg font-medium text-gray-700 tracking-wide">
          Développeur Full-Stack passionné par le JavaScript et le développement
          web.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          “Le code est comme l'humour. Quand on doit l'expliquer, c'est qu'il
          n'est pas bon.”
        </p>
      </div>
    </div>
  );
}
