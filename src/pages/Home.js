import React from 'react'
import Navbar from '../components/navbar/Navbar';
import CTA from "../components/cta/Cta";
import Footer from "../components/footer/Footer"
import { Possibilities, Build, Whatgpt, Future,Blog} from "../container/home/index";

const Home = () => {
  return (
    <>
    <Navbar/>
      <Build/>
      <Whatgpt/>
      <Future/>
      <Possibilities/>
      <CTA/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home
