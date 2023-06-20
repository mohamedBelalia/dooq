import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='About'>
        <div className='container title-about'>
            <h1>We Have Meals From All The World</h1>
            <Link to="/menu" style={{ textDecoration: 'none' }}><button>Menu</button></Link>
        </div>
        <div className='about-body row' style={{backgroundImage:"url('./images/footerBg.png')"}}>
                <div className='col-lg-6 col-md-12 goals-about '>
                    <h1>The Goals</h1>
                    <div>
                        <div className='goal-1'>
                        <div>
                            <img src='./images/p1.jpg' />
                            <h5>Samanta</h5>
                            <p>Nourishment is a goal of cooking, ensuring meals </p>
                        </div>
                        <div>
                        <img src='./images/p1.jpg' />
                            <h5>Jelin</h5>
                            <p>Enjoyment is another goal creative activity.</p>
                        </div>
                        </div>
                        <div className='goal-1'>
                        <div>
                        <img src='./images/p1.jpg' />
                            <h5>Adam</h5>
                            <p>Health focusing on nutritious ingredients </p>
                        </div>
                        <div>
                        <img src='./images/p1.jpg' />
                            <h5>Frank</h5>
                            <p>Cooking also aims to foster sharing </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 div-img-about'>
                    
                    <img className='img-fluid img-about' src='./images/about.jpg'/>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About