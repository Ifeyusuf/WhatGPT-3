import React from 'react';
import "./whatgpt.css";
import Feature from "../../../components/feature/Feature"


const Whatgpt = () => {
  return (
    <section id='whatgpt' >
        <div className="container  bg__blog gpt__what" >
        <article className=' whatgpt__opinion'>
          <Feature  tittle="What is GPT-3"  text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. "/>
        </article >
        <article className='row py__2 justify__between whatgpt__head_text'>
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p className='gradient__text'>Explore the Library</p>
        </article>

        <article className=' whatgpt__container py__2'>
          <Feature tittle=" Chatbots" text=" We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
          <Feature tittle=" Knowledgebase" text=" At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
          <Feature tittle=" education" text=" At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        </article>
        
        </div>
    </section>
  )
}

export default Whatgpt
