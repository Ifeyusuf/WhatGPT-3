import React from 'react';
import "../footer/footer.css";
import {logo} from "../../Assets"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="gpt__footer_heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
          </div>
          <div className="gpt__footer_btn">
            <button type='button'>Request Early Access</button>
          </div>
          
          <article className='gpt__footer_content row justify__between columns__sm'>
            <div className="gpt__footer_logo">
              <img src={logo} alt="GPT£" />
              <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
            </div>

            <div className="gpt__footer_link__container">
              <div className="gpt__link_div">
                <h4>Links</h4>
                <ul>
                  <li><a href="#overons">Overons</a></li>
                  <li><a href="#socialmedia">Social Media</a></li>
                  <li><a href="#counters">Counters</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="gpt__link_div">
                <h4>Company</h4>
                <ul>
                  <li><a href="#Terms & Conditions">Terms & Conditions</a></li>
                  <li><a href="#socialmedia">Privacy Policy</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="gpt__link_div">
                <h4>Get in touch</h4>
                <ul>
                  <li>Crechterwoord K12 182 DK Alknjkcb</li>
                  <li>085-132567</li>
                  <li><a href="info@payme.net">info@payme.net</a></li>
                </ul>
              </div>
              
            </div>
  
          </article>
          <article className='gpt__footer_copyright'>
            <p>@2021 GPT-3. All rights reserved.</p>
          </article>
        </div>
      </footer>
    </>
  )
}

export default Footer
