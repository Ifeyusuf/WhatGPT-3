import React from 'react';
import "./future.css";
import Feature from '../../../components/feature/Feature';

const Future = () => {

    const futuresData = [
        {
          title: 'Improving end distrusts instantly',
          text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
        },
        {
          title: 'Become the tended active',
          text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
          title: 'Message or am nothing',
          text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
        },
        {
          title: 'Really boy law county',
          text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
        },
      ];


  return (
    <div>
      <section id='future' >
        <div className="container" >
            <article className='  gpt__future_header'>
                <div className="gpt__future_content">
                    <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step  into Future Today. & Make it Happen.</h1>
                    <p className='gradient__text'>Request Early Access to Get Started</p>
                </div>
                
               <div className="gpt__future_container">
               {
                futuresData.map( (item, index)=>{
                    return (
                        <Feature tittle={item.title} text={item.text} key={item.title + index}/>
                    )
                })
                }
               </div>
            </article>
        </div>
      </section>
    </div>
  )
}

export default Future
