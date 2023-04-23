import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A web developer who loves to use React and Bootstrap.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Already developed a lot of projects and still some in development phase.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Perfect in HTML,CSS. Learning React for more improvements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed a website for DBMS project.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Leading to learn a lot more skills in development.</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using Figma as a main tool.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build some basic design for college projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ready to learn and understand about more software used in designing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ready to work with company design team.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A creative person - can expect a high level creative design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good analytical skills related to colors and design for websites.</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>General Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A positive person who just spreads positive vibes to others.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop a lot of skills as a Graphics Head of Bits 'N' Bytes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A self-motivated, hardworking and always ready to help others.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Setting my work hierarchies first before implementing it.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Time Management is my key to success.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services