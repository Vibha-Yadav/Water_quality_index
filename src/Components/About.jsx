import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Our mission at Water Quality Index is to provide real-time predictions of river WQI, ensuring accurate assessments of water health. Leveraging advanced data analytics and environmental monitoring technologies, we deliver timely insights into the quality of our rivers. With a commitment to environmental stewardship, we empower communities, policymakers, and industries with vital information for informed decision-making.</p>
            
        </div>

    </div>
  )
}

export default About;