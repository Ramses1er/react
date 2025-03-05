import { useState } from "react";

export default function Calculatrice(){

    const [operation,setOperation] = useState('')

    return (
      <div className="bg-gray-500 w-screen h-screen flex justify-center items-center">
        <div className="w-80 h-100 bg-gray-400 flex flex-col border-2 border-white">
          <div className="border-2 h-20 bg-white">{operation}</div>
          <div className="border bg-white text-center">resultat</div>
          <div className="bg-gray-200 flex-1 border-2">
            <div className="grid grid-cols-4 h-60 p-4 text-center">
              <div>
                <button
                  className="text-2xl font-bold text-blue-900 hover:cursor-pointer active:scale-80"
                  onClick={() => setOperation('')}
                >
                  C
                </button>
              </div>
              <div>
                <button className="text-2xl font-bold text-blue-900 hover:cursor-pointer active:scale-80">
                  /
                </button>
              </div>
              <div>
                <button className="text-2xl font-bold text-blue-900 hover:cursor-pointer active:scale-80">
                  X
                </button>
              </div>
              <div>
                <button className="text-2xl font-bold text-blue-900 hover:cursor-pointer active:scale-80">
                  {"<--"}
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  7
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  8
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  9
                </button>
              </div>
              <div>
                <button className="text-2xl font-bold text-blue-900 hover:cursor-pointer active:scale-80">
                  -
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  4
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  5
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  6
                </button>
              </div>
              <div>
                <button className="text-2xl font-bold text-blue-900 hover:cursor-pointer active:scale-80">
                  +
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  1
                </button>
              </div>
              <div>
                <button className="text-xl font-semibold hover:cursor-pointer active:scale-80">
                  2
                </button>
              </div>
              <div>
                <button
                  className="text-xl font-semibold hover:cursor-pointer active:scale-80"
                  onClick={() => {
                    setOperation(operation + 3);
                  }}
                >
                  3
                </button>
              </div>
              <div>
                <button
                  className="text-2xl font-bold text-blue-900 hover:cursor-pointer"
                  onClick={() => setOperation(operation + "" + 0)}
                >
                  0
                </button>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 w-full text-5xl hover:cursor-pointer">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}