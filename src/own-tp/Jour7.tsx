export default function TP(){
    return(
        <>
            <Mine/>
        </>
    )
}

function Mine(){
    return (
      <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col bg-gray-100 w-1/2 h-1/2 rounded-2xl shadow">
          <div>
            <div className="flex justify-between p-6 h-20">
              <div className="bg-gray-600 w-4 h-4 rounded-full"></div>
              <div className="bg-gray-900 w-4 h-4 rounded-full"></div>
            </div>
          </div>
          <div className="absolute mx-18 mt-8">
            <img src="/userImg/u4.jpeg" alt="" className="border-4 w-24 h-24 rounded-full"/>
          </div>
          <div className="bg-gray-300 flex-1 p-6 pt-15 rounded-b-2xl">
            <div>
              <div className="text-2xl font-bold">CBK corps</div>
              <div className="font-thin tracking-wide">entreprise</div>
            </div>
            <div>
              <div className="flex items-center gap-5">
                <div className="text-md font-black">Caleb BALEGO</div>
                <div className="bg-gray-400 w-2 h-15"></div>
                <div className="text-md font-medium">Je suis un developpeur en gestation</div>
              </div>
              <div className="flex justify-center items-center p-2 mt-4">
                <button className="bg-blue-400 p-2 w-40 rounded-3xl hover:bg-blue-500">Sauvegerder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

function Mine2() {
  return (
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col bg-gray-100 w-1/2 h-1/2 rounded-2xl shadow relative">
        <div className="flex justify-between p-6 h-20">
          <div className="bg-gray-600 w-4 h-4 rounded-full"></div>
          <div className="bg-gray-900 w-4 h-4 rounded-full"></div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
          <img
            src="/userImg/u4.jpeg"
            alt=""
            className="border-4 border-white w-24 h-24 rounded-full"
          />
        </div>

        <div className="bg-gray-300 flex-1 p-6 pt-16 rounded-b-2xl mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold">CBK corps</div>
            <div className="font-thin tracking-wide">Entreprise</div>
          </div>

          <div className="flex items-center gap-5 justify-center mt-4">
            <div className="text-md font-black">Caleb BALEGO</div>
            <div className="bg-gray-400 w-1 h-10"></div>
            <div className="text-md font-medium text-center">
              Je suis un développeur en gestation
            </div>
          </div>

          <div className="flex justify-center items-center p-2 mt-6">
            <button className="bg-blue-400 p-2 w-40 rounded-3xl hover:bg-blue-500 transition duration-300">
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
