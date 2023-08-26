import React from 'react';
import "./cta.css";

const Cta = () => {
  return (
    <section>
        <div className="container gpt__cta_header">
            <article className='gpt__cta_content row justify__between items__center'>
                <div className="gpt__cta_text">
                    <p>Request Early Access to Get Started</p>
                    <h3>Register Today & start exploring the endless possibilities.</h3>
                </div>
                <div className="gpt__cta_btn">
                    <button type="button">Get Started</button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Cta
