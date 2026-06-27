import React from 'react'
import './card3.css'
import Button from '../components/button.jsx'
import Arrow from '../assets/icons/forward-arrow.svg'

const Card3 = (props) => {
  return (
    <div className='card-ctn2'>
        <hr />
        <div className='card-ctn2-internal'>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
            <div className='learn-more'>
                <p>Learn More</p>
                <Button content='→' className='btn-black btn-circle'/>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Card3