import React from 'react'

import "../styles/pages/home.css";

function Home () {
  return (
    <div className='home_container'>
       <section className='home-left'>
            <h1 className='home-headline'>A US based agency <br/>
             focused on <span>growth</span></h1>
            <p className='home-text'>Say goodbye to limited and expensive in-house creative <br/>
             teams, slow and costly traditional creative agencies, and <br/>
              unreliable offshore freelancers.
            </p>
            <button 
            className='home-nav_button'
            onClick={() =>{window.location.href = "#" }}
            >Book Your Custom Demo</button>
       </section> 
       <section className='home-right'>
            
       </section>
    </div>
  )
}

export default Home;
