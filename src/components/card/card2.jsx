import React, { useState } from 'react'
import './card2.css'

const card2 = (props) => {
 
  return (
    <div 
    className='card2-ctn'
    style={{backgroundImage:`url(${props.imageUrl})`}}
    >
        <div className='info' id='card'>
            <h2>{props.header}</h2>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default card2