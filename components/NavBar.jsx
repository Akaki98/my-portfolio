import React, { Fragment, useEffect, useState } from "react";

import NavbarForPC from "./NavbarComponents/NavbarForPC";
import Block from "./block";
import NavbarForMobile from "./NavbarComponents/NavbarForMobile";

const NavBar = () => {
  let [nav, setNav] = useState(false);
  let [shadow,setShadow] = useState(false); 

  useEffect(()=>{
   const handleShadow = () => {
    if(window.scrollY >= 90) {
      setShadow(true)
    } else {
      setShadow(false)
    }
   }
   window.addEventListener('scroll',handleShadow)
  },[])

  let circleY;
  let circleX;
  let counter = 0;
  let counter1 = 0;
  let Xpoint, Ypoint;
  let firstInt, secondInt;


  const navHandler = () => {
    setNav(!nav);
    stopInt();
  };


  if (nav) {
    setTimeout(() => {
      let mobileMenu = document.getElementById("mobileMenuUl")
      let mobileMenuX = mobileMenu.getBoundingClientRect().x;
      let mobileMenuY = mobileMenu.getBoundingClientRect().y;
      let mobileMenuHeight = mobileMenu.getBoundingClientRect().height;
      let mobileMenuWidth = mobileMenu.getBoundingClientRect().width;
      document.getElementById("bee2").style.position = "absolute";
      document.getElementById("bee2").style.left = mobileMenuX + mobileMenuWidth - 40 + 'px';
      secondInt = setInterval(() => {
        document.getElementById("bee2").style.top =
          mobileMenuY + mobileMenuHeight/2 + (Math.sin(counter1) * (mobileMenuHeight / 2 - 20)) - 36 + "px";
        counter1 += 0.15;
      }, 100);
    }, 1000);
    setTimeout(() => {
      clearInterval(secondInt);
    document.getElementById("bee2").style.position = "relative";
    document.getElementById("bee2").style.left = 0;
    document.getElementById("bee2").style.top = "7px";
    }, 4500);
  }

  //mouseEnter
  const beeCircleMove = () => {
    firstInt = setInterval(() => {
      circleX = Math.sin(counter) * 30;
      circleY = Math.cos(counter) * 30;
      document.getElementById("bee1").style.left = Xpoint + circleX + "px";
      document.getElementById("bee1").style.top = Ypoint + circleY + "px";
      document.getElementById("bee1").style.position = "absolute";
      counter += 0.25;
    }, 100);
  };

  //mouseLeave
  const stopInt = () => {
    clearInterval(firstInt);
    document.getElementById("bee1").style.position = "relative";
    document.getElementById("bee1").style.left = 0;
    document.getElementById("bee1").style.top = "7px";
  };

  //mouseMove
  const flyingBee = (event) => {
    Xpoint = event.clientX - 80;
    Ypoint = event.clientY + 80;
    document.getElementById("bee1").style.width = "40px";
    document.getElementById("bee1").style.height = "60px";
  };


  return (
    <Fragment>
      <div
        onMouseMove={flyingBee}
        onMouseEnter={beeCircleMove}
        onMouseLeave={stopInt}
        onClick={stopInt}
        className={shadow ? "fixed w-full h-20 shadow-xl z-[100]":"fixed w-full h-20 z-[100]"}
      >
        <NavbarForPC flyingBee={flyingBee} navHandler={navHandler} />
        <NavbarForMobile
           secondInt={secondInt}
          navHandler={navHandler}
          nav={nav}
        />
      </div>
      <Block />
    </Fragment>
  );
};

export default NavBar;
