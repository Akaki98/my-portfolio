import React, { Fragment } from "react";
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

const HelloPage = () => {
  return (
    <Fragment>
      <div id='halloPage' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING AMAZING, LIKE PERFECT HEXAGON HONEYCOMB
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Akaki Vashakidze </span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[500px] m-auto py-4'>
            <a
              href=''
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://www.instagram.com/akaki_vashakidze/?hl=en'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
            <a href='https://www.facebook.com/akaki29/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            <a href=''>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default HelloPage;
