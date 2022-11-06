import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UnderNavbar from './UnderNavbar';
import { Outlet } from "react-router-dom";

export default function Home(){
    return(
        <>
      <Navbar/>
      <UnderNavbar/>

      <Outlet/>

      <Footer/>

    </>
    )
}