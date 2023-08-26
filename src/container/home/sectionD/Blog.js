import React from 'react';
import "./blog.css";
import Article from '../../../components/article/Article';
import { blog1, blog2, blog3, blog4, blog5 } from '../../../Assets';

const Blog = () => {
  return (
    <section id='blog' >
        <div className="container">
            <div className="gpt__blog_heading" >
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <article className='gpt__blog_container'>
                <div className="gpt__blog_container__groupA">
                    <Article img={blog1}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <div className="py__3"></div>
                </div>
                <div className="gpt__blog_container__groupB">
                    <Article img={blog2}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article img={blog3}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article img={blog4}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article img={blog5}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </article>
        </div>
    </section>
  )
}

export default Blog
