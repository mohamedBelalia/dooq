import React from 'react'
import { Link } from 'react-router-dom'
import { faUser , faFlag , faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo-footer'>
            <img src="./images/logo.png" className='img-fluid'/>
        </div>
        <div className='first-info'>
            <div>
            <Link to="/" style={{ textDecoration: 'none' , color:'white' }}><h3>Home</h3></Link>
            <Link to="/menu" style={{ textDecoration: 'none' , color:'white' }}><h3>Menu</h3></Link>
            <Link style={{ textDecoration: 'none' , color:'white' }}> <h3>Contact</h3></Link>
            <Link style={{ textDecoration: 'none' , color:'white' }}>   <h3>About</h3></Link>
            <Link style={{ textDecoration: 'none' , color:'white' }}>  <h3>Contact</h3></Link>
            </div>
            <div>
                <button>Send a Review</button>
            </div>
        </div>

        <hr/>

        <div className='last-info'>
            <h5>a Healthy food for You</h5>
            <h5>we are chefs</h5>
        </div>

        <hr/>

        <div>
            <p> Created By Mohamed BELALIA &copy;</p>
            <div className='contacts'>
            <a href='https://www.linkedin.com/in/mohamed-belalia-0b886a229/' target="_blank"><img src="./images/linkedin.png" className='img-fluid'/></a>
            <a href='https://github.com/mohamedBelalia' target="_blank"><img src="./images/github.png" className='img-fluid'/></a>

            </div>
        </div>
    </div>
  )
}

export default Footer