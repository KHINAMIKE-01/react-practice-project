import Button from '../button/button.jsx'
import './nav-bar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
    <>
        <div className='nav-bar'>
            <p><span>/</span>AXION</p>
            <ul>
                <div className='li-container'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/approach'>Our Approach</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li><NavLink to='/technology'>Technology</NavLink></li>
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

