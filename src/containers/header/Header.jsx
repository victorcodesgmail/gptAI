import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className ="gpt3__header section__padding" id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>EUCCOSSA,
        Lets's Build Something amazing, for the advancement of humanity</h1>
        <p>This is the formal application to be the design lead for EUCCOSSA
        My portfolio is a testament to my dedication, showcasing a wide range
         of projects that highlight my ability to create compelling designs that drive results.
        </p>
        <div className='gpt3__header-content__input'>
<input type="email" placeholder="Your Email Address" />
<button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
<img src={people} alt="people"/>
<p>1600 people requested access to visit site in last 24hrs</p>
        </div>
   
      </div>
           <div className='gpt3__header-image'>
<img src={ai} alt="ai" />
        </div>
      </div>
  )
}

export default Header