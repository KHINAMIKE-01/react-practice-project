import React from 'react'
import './Home.css'
import Button from '../components/button/button'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='main-ctn hero-ctn'>
            <div className='components-ctn'>
                <div className="motto">
                    <p>Let's move your <br /> Business forward</p>
                </div>
                <div className="motto-discription">
                    <div className='text'>
                        <p>We provide reliable shipping whereever <br /> you need it. With us,
                            you get Precision,<br /> speed and confidence at every step.
                        </p>
                    </div>
                    <Button onClick={() => navigate('services')} className='btn-black' content='learn More'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home