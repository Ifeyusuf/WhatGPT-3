import React from 'react';
import "./feature.css";

const Feature = ({tittle, text}) => {
  return (
    <section>
        <div className="container">
            <article className='row justify__between whatgpt__feature_header'>
                <div>
                <div className="whatgpt__border "></div>
                   <div className="whatgpt__feature_title">
                   <h1>{tittle}</h1>
                   </div>
                </div>
                <div className="whatgpt__feature_info">
                    <p>{text}</p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Feature
