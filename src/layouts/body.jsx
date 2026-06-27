import './body.css'
import BackgoroundImage from '../assets/images/cargo-cranes.jpg'
import Button from '../components/button.jsx'

function Body(){
    return(
        <>
            <div className='hero-ctn'>
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
                        <Button className='btn-black' content='Learn More'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body