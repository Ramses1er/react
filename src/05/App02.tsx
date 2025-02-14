import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
export default function App() {
  const [link, setLink] = useState(false);
  return (
    <>
      <div className="bg-blue-500 w-screen h-screen flex items-center place-content-center">
        <div className="bg-white rounded shadow w-44 h-72 flex flex-col">
          <div className="h-8"></div>
          <div className="bg-yellow-100 flex-1"></div>
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
