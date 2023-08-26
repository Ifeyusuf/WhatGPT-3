import React from "react";
import "./build.css";
import group from "../../../assets/people.png";
import ai from "../../../assets/ai.png";
import {google, slack, atlas, dropbox, shopify} from "../../../Assets";


const Build = () => {

  return (
    <section id="home" >
      <div className="container gpt__build" >
        <article className="row columns__sm items__center">
          <div className="width__half">
            <div className="gpt__build_header">
              <h1 className="text__gradient">Let's Build Something Amazing with GPT-3 OpenAI</h1>
            </div>
            <div className="gpt__build_info">
              <p>Yet bed any for travelling assistance indulgence unpleasing Not thoughts all excersice blessing. Indulgence way everything joy alteration boisterous the attachment Party we years to order allow asked of.</p>
            </div>
            <div className="gpt__build_input">
              <input type="Email" placeholder=" Your Email Address" />
              <button>Get Started</button>
            </div>
            <div className="gpt__group_image row items__center justify__center_md">
              <img src={group} alt="" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div className="width__half">
            <div className="gpt__ai">
              <img src={ai} alt="" />
            </div>
          </div>
        </article>
      </div>
      <div className="container">
        <article className="flex gap__25 justify__center overflow__x justify__start py__1">
         <img src={google} alt="google" />
         <img src={slack} alt="slack" />
         <img src={atlas} alt="atlassian" />
         <img src={dropbox} alt="dropbox" />
         <img src={shopify} alt="shopify" />
        </article>
      </div>
    </section>
  )
}

export default Build
