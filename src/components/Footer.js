import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Mapsetup from "./Mapsetup";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollup = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-gray-800  text-gray-300">
      <div className="flex flex-wrap justify-center w-full">
        <div className=" p-4 m-3 lg:w-[25vw] h-[40vh] md:w-[40vw] sm:w-[40vw] sm:block md:block">
          <Mapsetup />
        </div>
        <div className=" p-4 m-3 lg:w-[20vw] md:w-[40vw] sm:w-[40vw] ">
          <h1
            className="py-1 text-xl hover:text-blue-500 duration-300"
            onClick={scrollup}
          >
            {" "}
            <NavLink to="/">Home</NavLink>
          </h1>
          <h1
            className="py-1 text-xl hover:text-blue-500 duration-300"
            onClick={scrollup}
          >
            <NavLink to="/events">Events</NavLink>
          </h1>
          <h1
            className="py-1 text-xl hover:text-blue-500 duration-300"
            onClick={scrollup}
          >
            <NavLink to="/gallery">Gallery</NavLink>
          </h1>
          <h1
            className="py-1 text-xl hover:text-blue-500 duration-300"
            onClick={scrollup}
          >
            <NavLink to="/team">Team</NavLink>
          </h1>
          <h1
            className="py-1 text-xl hover:text-blue-500 duration-300"
            onClick={scrollup}
          >
            <NavLink to="/memberships">Memberships</NavLink>
          </h1>
        </div>
        <div className=" p-4 m-3 lg:w-[20vw] md:w-[40vw] sm:w-[40vw] ">
          <h2 className="text-2xl text-gray-200 py-2">Our Student Chapter</h2>
          <h1 className="py-1">Support</h1>
          <h1 className="py-1">About Us</h1>
          <h1 className="py-1">Careers</h1>
        </div>
        <div className=" p-4 m-3 lg:w-[20vw] md:w-[40vw] sm:w-[40vw] ">
          <h2 className="text-2xl text-gray-200 py-2">Resources</h2>
          <h1 className="py-1">Vision</h1>
          <h1 className="py-1">Memberships</h1>
          <h1 className="py-1">Contact Us</h1>
        </div>
      </div>
      {/* social media handles */}
      <div className="text-center w-full p-5">
        <span className="sm:inline hidden text-lg">Follow us on :</span>
        <span className=" p-2 text-xl">
          <a href="">
            <BsFacebook className=" inline" />
          </a>
        </span>
        <span className=" p-2 text-xl">
          <a href="https://www.instagram.com/acm_vnrvjiet">
            <BsInstagram className=" inline" />
          </a>
        </span>
        <span className=" p-2 text-xl">
          {" "}
          <a href="">
            <BsTwitter className=" inline" />
          </a>
        </span>
        <span className=" p-2 text-xl">
          {" "}
          <a href="">
            <BsLinkedin className=" inline" />
          </a>
        </span>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-[85vw] h-[1px] bg-gray-400"></div>
      </div>

      {/* copy rights */}
      <div className="text-center w-full p-5">
        © 2023 ACM VNRVJIET, Inc. All rights reserved.
      </div>
    </div>
  );
}
