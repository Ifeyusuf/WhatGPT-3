import React from 'react';
import "./possibilities.css";
import {possibility} from "../../../Assets"

const Possibilities = () => {
  return (
    <section >
      <div className="container" id='possibility' >
        <article className='row items__center gap__25 columns__sm' >
          <div className="gpt__possibility_img">
            <img src={possibility} alt="Possibilities" />
          </div>

          <div className='gpt__possibility_content' >
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <h4>Request Early Access to Get Started</h4>
          </div>
          
        </article>
      </div>
    </section>
  )
}

export default Possibilities
