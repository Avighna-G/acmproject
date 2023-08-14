import React, { useState } from "react";
import "../styles/navbar.css";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ACMlogo from "../logo.png";
import { navItems } from "../jsonfiles/NavItems";
export default function NavBar() {
  let [mob, nmob] = useState("");
  let [cli, acli] = useState("fa fa-bars");
  const chClass = () => {
    if (cli === "fa fa-bars") {
      acli("fa fa-times");
      nmob("#navbar active");
    } else {
      acli("fa fa-bars");
      nmob("#navbar");
    }
  };
  return (
    <>
      <nav className="navbar flex items-center justify-between py-[5px] px-[35px] overflow-hidden shadow-xl h-[9vh] bg-[#010138] w-[100%] fixed">
        <div className="flex items-center justify-center">
          <NavLink to="/">

          <img
            className=" h-[50px] w-[50px] p-[5px]"
            src={ACMlogo}
            alt=""
            ></img>
            </NavLink>
        </div>
        <div className="navlinks">
          <ul
            id="navbar"
            className={`flex items-center justify-center h-full ${mob}`}
          >
            {navItems.map((item, index) => {
              if (item.title === "ContactUs") {
                return (
                  <li key={item.id} className="navitcb" onClick={chClass}>
                    <button
                      id="navbutton"
                      className="bg-[#7db5f7] border-none px-[20px] py-[10px] group flex items-center gap-[7px] cursor-pointer"
                    >
                      <HashLink
                        to="/contactus"
                        className=" group-hover:text-black duration-500 font-medium flex items-center no-underline text-white "
                      >
                        <BiSolidMessageRoundedEdit size={28} />
                        <span>ContactUs</span>
                      </HashLink>
                    </button>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    onClick={chClass}
                    className="list-none px-[20px] relative inline-block"
                  >
                    <NavLink
                      activeclassname="active"
                      className=" no-underline text-white text-lg font-normal hover:font-medium"
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        {/*<div>
        <button id="navbutton" ><HashLink to="/#ctus"><BiSolidMessageRoundedEdit size={20}/><b>Contact Us</b></HashLink></button>
        </div>*/}
        <div id="mob" className="hidden">
          <i className={`text-white font-lg ${cli}`} onClick={() => chClass()}>
            {" "}
          </i>
        </div>
      </nav>
    </>
  );
}
