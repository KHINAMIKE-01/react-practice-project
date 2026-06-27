import Button from '../components/button.jsx'
import './nav-bar.css'

function NavBar() {
    return (
    <>
        <div className='nav-bar'>
            <p><span>/</span>AXION</p>
            <ul>
                <div className='li-container'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Our Approach</a></li>
                    <li><a href="#">Technology</a></li>
                </div>
                
            </ul>
            <div className='btn-container'>
                <Button className='btn-black' content="Contact Us"/>
                <Button  content="Sign in"/>
            </div>    
        </div>
    </>
)
}

export default NavBar

