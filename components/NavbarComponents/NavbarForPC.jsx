import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarForPC = (props) => {
  return (
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image
            src="/../public/Images/navLogo.png"
            width="125"
            height="50"
            alt="/"
          />
          <div id="bee1" className="ease-in duration-150">
            <Image
              src="/../public/Images/bees/bee1.png"
              alt="/"
              width="35"
              height="45"
            />
          </div>
          <div>
            <ul className="hidden md:flex">
              <Link href="/#halloPage">
                <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                  about{" "}
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                  skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                  projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                  contact
                </li>
              </Link>
            </ul>

            <div onClick={props.navHandler} className="cursor-pointer md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
          </div>
  )
}

export default NavbarForPC