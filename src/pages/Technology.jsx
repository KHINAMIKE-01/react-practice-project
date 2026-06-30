import React from 'react'
import './Technology.css'
import image1 from '../assets/images/container2.jpg'
import Card3 from '../components/card/card3.jsx'

const Technology = () => {
  const cards = {
        card1:{
            heading:'Real-Time Tracking',
            paragraph: 'Stay up-to-date with your shipments from pick up to derivery'
        },
        card2:{
            heading:'Data Analysis',
            paragraph: 'Gain insights into your suppy chain, Identity bottlenecks and make data-driven decisions'
        },
        card3:{
            heading:'Automated Updates',
            paragraph: 'Receive timely notifications about your shipments including expected delivery times and delays'
        },
        card4:{
            heading:'Secure Portal',
            paragraph: 'Access your account anytime with our secure online portal for booking, managing and tracking shipments.'
        }
    }


  return (
    <div className='main-ctn main-ctn-service'>
        <div className='main-ctn-top2'>
            <p className='ctn-top-header'>/Technology</p>
            <div className='ctn-top-info'>
                <div className="ctn-top-info-left">
                    <p>Innovation that Moves <br />Your Business</p>
                </div>
                <div className="ctn-top-info-right">
                    <p>
                        We leverage the latest technology <br />
                        to improve the way we manage <br />
                        your shipments.
                    </p>
                </div>
            </div>
        </div>

        <div className='main-ctn-bottom2'>
            <div className='ctn-bottom-left'>
                <div className='img-ctn'>
                    <img src={image1} alt="" />
                </div>   
            </div>
            <div className='ctn-bottom-right'>
                <Card3 heading={cards.card1.heading} paragraph={cards.card1.paragraph}/>
                <Card3 heading={cards.card2.heading} paragraph={cards.card2.paragraph}/>
                <Card3 heading={cards.card3.heading} paragraph={cards.card3.paragraph}/>
                <Card3 heading={cards.card4.heading} paragraph={cards.card4.paragraph}/>
            </div>
        </div>
    </div>
  )
}

export default Technology