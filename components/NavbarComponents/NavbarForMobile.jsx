import React, { Fragment } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NavbarForMobile = (props) => {
  return (
   <Fragment>
    
    <div
          onClick={props.navHandler}
          className={
            props.nav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/50"
              : ""
          }
        ></div>
        <div
          className={
            props.nav
              ? "lg:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#FDFAE2] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/Images/navLogo.png"
              alt="/"
              width="87"
              height="35"
            />
            <div id="bee2" className="ease-in duration-150">
              <Image
                src="/../public/Images/bees/bee1.png"
                alt="/"
                width="35"
                height="45"
              />
            </div>

            <div className="cursor-pointer" onClick={props.navHandler}>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:2-[90%] py-4">
              Lets build something legendary together
            </p>
          </div>
          <div onClick={props.navHandler}>
            <ul id='mobileMenuUl' className=" py-4 flex flex-col">
              <Link href="/#halloPage">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">about </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">contact</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets connect
              </p>
              <div className="mt-4 my-4 flex justify-between items-center w-[70%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150">
                <a href="https://www.instagram.com/akaki_vashakidze/?hl=en"><FaInstagram /></a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150">
                <a href=""><FaLinkedinIn /></a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150">
                <a href="https://www.facebook.com/akaki29/"><FaFacebook /></a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150">
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
   </Fragment>
  )
}

export default NavbarForMobile