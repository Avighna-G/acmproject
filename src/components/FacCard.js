import React from "react";
import { BsPersonUp } from "react-icons/bs";


function FacCard({ name, testContent, imgPath, title, social: { github } }) {
    return (
      <div className="w-full">
        <div className="flex flex-col justify-between max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 h-full">
          <img
            className="w-32 mx-auto shadow-xl rounded-full h-32 object-cover"
            src={require(`../imagProps/faculty/${imgPath}`)}
            alt="Profile face"
          />
          <div className="flex-1">
            <p className="text-sm">{testContent}</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-800 pt-2 pb-4 border-b-2">{title}</p>
            <div className="flex align-center justify-center mt-4">
              <a
                className="text-lg p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white duration-300"
                href={github}
              >
                <BsPersonUp />
                <span className="sr-only">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default FacCard;