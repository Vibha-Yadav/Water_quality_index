import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, soluta. Deleniti aperiam quisquam autem, quod ea nemo. Officiis libero ut alias necessitatibus blanditiis ea perferendis labore, atque, omnis ullam molestias.</p>

        </div>
    </div>
  )
}

export default FeatureBox;