import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import { Fragment } from "react";
import HelloPage from "../components/HelloPage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <HelloPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
}
