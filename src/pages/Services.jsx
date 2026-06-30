import React from 'react'
import './Services.css'
import Card from '../components/card/card.jsx'
import eCommerceIcon from '../assets/icons/e-commerce.svg'
import manufacturing from '../assets/icons/manufacturing.svg'
import microchip from '../assets/icons/microchip.svg'
import pharmacy from '../assets/icons/pharmacy.svg'


const Services = () => {
 const cards = {
        card1 : {
            icon: eCommerceIcon,
            alt : 'e-commerce image',
            paragraph: "Streamline your fullfillment process, reduce delivery time and improve customer satisfaction",
            h2Header:'Retail & E-commerce'
        },
        card2 : {
            icon: manufacturing,
            alt : 'manufacturing image',
            paragraph: "Streamline your fullfillment process, reduce delivery time and improve customer satisfaction",
            h2Header:'manufacturing'
        },
        card3 : {
            icon: pharmacy,
            alt : 'pharmacy image',
            paragraph: "Streamline your fullfillment process, reduce delivery time and improve customer satisfaction",
            h2Header:'Healthcare & Pharmacy'
        },
        card4 : {
            icon: microchip,
            alt : 'michrochip image',
            paragraph: "Streamline your fullfillment process, reduce delivery time and improve customer satisfaction",
            h2Header:'Technology & Electronics'
        }
    }

    return (
        <>
            <div className="main-ctn main-ctn-service">
                <div className="ctn-top">
                    <p className='header-tpc'>/industries we serve</p>
                    <div className='header-ctn'>
                        <div className="header-ctn-left">
                            <p>Tailored Logistics <br /> for Every Business</p>
                        </div>
                        <div className="header-ctn-right">
                            <p>At /AXION we understand that <br />
                             every indutry has unique logistics <br />
                             challenges. Thats why we offer <br />
                             customized solutions for a wide <br />
                             range of sectors.</p>
                            <span className='pagnation'>
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="ctn-bottom">
                    <Card icon={cards.card1.icon} alt={cards.card1.alt} paragraph={cards.card1.paragraph} h2Header={cards.card1.h2Header}/>
                    <Card icon={cards.card2.icon} alt={cards.card2.alt} paragraph={cards.card2.paragraph} h2Header={cards.card2.h2Header}/>
                    <Card icon={cards.card3.icon} alt={cards.card3.alt} paragraph={cards.card3.paragraph} h2Header={cards.card3.h2Header}/>
                    <Card icon={cards.card4.icon} alt={cards.card4.alt} paragraph={cards.card4.paragraph} h2Header={cards.card4.h2Header}/>
                </div>
                
            </div>
        </>
    )
}

export default Services