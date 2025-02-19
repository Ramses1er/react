import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
export default function App() {
  const [link, setLink] = useState(false);
  return (
    <>
      <div className="bg-blue-500 w-screen h-screen flex items-center place-content-center">
        <div className="bg-white rounded shadow w-44 h-72 flex flex-col">
          <div className="h-8 flex items-center pl-2 space-x-2">
            <div className="">
              <img
                src="/CBK-corps-logo.jpg"
                alt=""
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold">@notre logo</div>
              <div className="text-xs opacity-50">detail a trouver ici</div>
            </div>
          </div>
          <div className="bg-green-100 flex-1 flex justify-center items-center">
            <div className="absolute top-60 flex items-center space-x-15">
              <div className="text-xs font-bold">@notre logo</div>
              <div>
                <FaArrowRightLong />
              </div>
            </div>
            <div className="absolute flex flex-col justify-center items-center">
              <div>
                <img
                  src="/CBK-corps-logo.jpg"
                  alt=""
                  className="w-30 h-30 rounded-full"
                />
              </div>
              <div className="absolute font-bold w-30 text-center top-25">
                La maitrise soi. Tout ce qu'il faut savoir
              </div>
            </div>
            <div className="flex justify-center items-center border border-gray-200 w-50 h-50 rounded-full">
              <div className="flex justify-center items-center border border-gray-200 w-40 h-40 rounded-full">
                <div className="flex justify-center items-center border border-gray-200 w-30 h-30 rounded-full">
                  <div className="flex justify-center items-center border border-gray-200 w-20 h-20 rounded-full">
                    <div className="border border-gray-200 w-10 h-10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-8 flex items-center px-2">
            <div className="text-left w-1/2 flex space-x-2">
              {link ? (
                <button
                  onClick={() => setLink(!link)}
                  className="cursor-pointer"
                >
                  <FaRegHeart />
                </button>
              ) : (
                <button
                  onClick={() => setLink(!link)}
                  className="cursor-pointer"
                >
                  <FaHeart className="text-red-500" />
                </button>
              )}
              <BiCommentDetail />
              <LuSend />
            </div>
            <div className="text-right w-1/2 flex place-content-end">
              <CiBookmarkCheck />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
