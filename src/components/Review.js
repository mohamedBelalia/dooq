import React from 'react'
import Fade from 'react-reveal/Fade';

const Review = () => {
  return (
      <div className=' container'>
        <div className='reviews'>
        <h1>What Users Say</h1>
            <div className='rev-cont'>
            <Fade left>
            <div className='review'>
                <div>
                    <img src='./images/p1.jpg' className='img-fluid'/>
                </div>
                <div>
                    <h3>Savory Fiesta</h3>
                    <p>The Spicy Shrimp Tacos recipe from Savory Fiesta is an absolute winner! The combination of perfectly seasoned shrimp,</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='review '>
            <div>
                <img src='./images/p2.jpg' className='img-fluid'/>
                </div>
                <div>
                    <h3>Sweet Delights</h3>
                    <p>The Blueberry Lemon Cheesecake Bars recipe from Sweet Delights is a heavenly treat for dessert lovers.</p>
                </div>
            </div>
            </Fade>

            </div>

            <div className='rev-cont'>
            <Fade left>
            <div className='review'>
            <div>
                <img src='./images/p3.jpg' className='img-fluid'/>
                </div>
                <div>
                    <h3>Global Gastronomy</h3>
                    <p>The Thai Green Curry recipe from Global Gastronomy is a fantastic exploration of flavors</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='review'>
            <div>
                <img src='./images/p4.jpg' className='img-fluid'/>
                </div>
                <div>
                    <h3>Comfort Cravings</h3>
                    <p>The Classic Beef Stew recipe from Comfort Cravings is a bowl of warm and hearty goodness.</p>
                </div>
            </div>
            </Fade>
            </div>


            <div className='rev-cont'>
            
            <Fade left>
            <div className=' review'>
            <div>
                <img src='./images/p5.jpg' className='img-fluid'/>
                </div>
                <div>
                    <h3>Veggie Delight</h3>
                    <p>The Roasted Veggie Quinoa Bowl recipe from Veggie Delight is a vegetarian delight! The combination of roasted vegetables,</p>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className=' review'>
            <div>
                <img src='./images/p6.jpg' className='img-fluid'/>
                </div>
                <div>
                    <h3>Indulgence Fusion</h3>
                    <p>The Chocolate Matcha Lava Cake recipe from Indulgence Fusion is a delightful fusion of flavors.</p>
                </div>
            </div>
            </Fade>

            </div>
            
        </div>
    </div>
  )
}

export default Review