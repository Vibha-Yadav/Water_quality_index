import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat perspiciatis maxime reiciendis recusandae quia tempore? Explicabo ab qui dolore laboriosam earum enim! Ipsam, quaerat odio! Sint nobis inventore saepe officiis.</p>
            <button>{props.button}</button>
        </div>

    </div>
  )
}

export default About;