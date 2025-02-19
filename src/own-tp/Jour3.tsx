export default function J3(){
    return(
        <div>
            <h1 className="text-2xl font-bold">Effets interactifs Hover Focus</h1>
            <button className="bg-blue-300 rounded p-3 hover:cursor-pointer hover:border hover:text-white">Survole moi</button>
            <input type="text" className="border text-lg focus:border-blue-950"/>
        </div>
    )
}
