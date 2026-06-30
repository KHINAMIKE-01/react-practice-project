import React from 'react'
import './OurApproach.css'
import Button from '../components/button/button.jsx'
import Card2 from '../components/card/card2.jsx'
import image1 from '../assets/images/containers.jpg'
import image2 from '../assets/images/warehouse-distribution.jpg'
import image3 from '../assets/images/derivery.jpg'
import image4 from '../assets/images/supply-chain.jpg'
import image5 from '../assets/images/customs-clearance.jpg'

const OurApproach = () => {
 return (
    <>  
        <div className=' main-ctn main-ctn-approach'>
            <div className="main-ctn-top">
                <div className='ctn-up-left'>
                    <p>Logistics Solutions</p>
                </div>
                <div className='ctn-up-right'>
                    <p>diverse needs for businesses</p>  
                    <Button content='See All' className='btn-black'/>
                </div>
            </div>

            <div className="main-ctn-bottom">
                <div className='item1'>
                    <Card2 header='international Shipping' paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit.' imageUrl={image1}/>
                </div>
                <div className='item2'>
                    <Card2 header='Warehousing & Distribution' paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit.' imageUrl={image2}/>
                </div>
                <div className='item3'>
                    <Card2 header='last-mile Delivery' paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit.' imageUrl={image3}/>
                </div>
                <div className='item-4-5'>
                    <div className='sub-item-1'>
                        <Card2 header='Supply Chain Optimisation' paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit.' imageUrl={image4}/>
                    </div>
                    <div className='sub-item-2'>
                        <Card2 header='Custom Clearance' paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit.' imageUrl={image5}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurApproach