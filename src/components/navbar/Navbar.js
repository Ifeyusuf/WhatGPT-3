import React from 'react'
// import {Link} from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const {menuOpen, setMenuOpen}= useGlobalContext()

  return (
    <nav className='gradient__bg'>
        <div className='container gpt__nav gradient__bg '>
          <article className='row  justify__between items__center columns__sm items__start_sm'>

          <div className=" row gap__25 gap__sm_15 items__center  columns__sm items__start_sm width__sm">

            <div className="row width__sm justify__between">
            <div className="logo items__center ">
              <img src={logo} alt="GPT 3" />
            </div>
              <div className="hamburger mobile__only">
                  {menuOpen
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setMenuOpen(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setMenuOpen(true)} />
                    }
            </div>
              </div>
            <div className={` ${menuOpen ? 'link__container items__center show__link' : 'link__container items__center'}`  }>
              <ul className='link'>
              <li><a href={"#home"} className="color">Home</a></li>
              <li><a href={"#whatgpt"} className="color">What is GPT?</a></li>
              <li><a href={"#possibility"} className="color">Open Ai</a></li>
              <li><a href={"#future"} className="color">Case Studies</a></li>
              <li><a href={"#blog"} className="color">Library</a></li>
              <div className='row gpt__nav_btn columns__sm mobile__only' >
            <button className='btn__1'>SIgn in</button>
            <button className='btn__2'>Sign up</button>
          </div>
              </ul>
          </div>
          </div>


          <div className='row gpt__nav_btn columns__sm pc__only tab__only_md' >
            <button className='btn__1'>SIgn in</button>
            <button className='btn__2'>Sign up</button>
          </div>
          </article>
        </div>
    </nav>
  )
}

export default Navbar
