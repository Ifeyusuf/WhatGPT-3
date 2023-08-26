import React from 'react';
import "./article.css";

const Article = ({img, date, title}) => {
  return (
    <>
    <div className="container">
        <article className='gpt__article'>
            <div className="gpt__article_img">
                <img src={img} alt="Blog" />
            </div>
            <div className="gpt__article_content">
                <p>{date}</p>
                <h3>{title}</h3>
                <div className="gtp__article_more">
                <p><a href="#article">Read Full Article</a></p>
            </div>
            </div>
        </article>
    </div>
    </>
  )
}

export default Article
