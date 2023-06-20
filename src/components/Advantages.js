import React from "react";
import Fade from 'react-reveal/Fade';

const Advantages = () => {
    return( 
        <div className="advantage">
            <div className="container">
                <div className="row adv-cont">
                    <Fade left>
                    <div className="col-lg-4 col-md-6">
                        <img src="./images/mail.png" />
                        <h3>100% Assurance</h3>
                        <p>Open round the clock for convenience, quick and easy access</p>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className="col-lg-4 col-md-6">
                    <img src="./images/mail.png" />
                        <h3>Fast Delivery</h3>
                        <p>Cost-efficient, comprehansive and clinical laboratory services</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="col-lg-4 col-md-6">
                    <img src="./images/mail.png" />
                        <h3>Free Returns</h3>
                        <p>Qualified and certified physicians for quality medical care</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="col-lg-4 col-md-6">
                    <img src="./images/mail.png" />
                        <h3>Fast Delivery</h3>
                        <p>Cost-efficient, comprehansive and clinical laboratory services</p>
                    </div>
                    </Fade>
                    
                </div>
            </div>
        </div>
    )
}


export default Advantages