import React from "react";


const Landing = () =>{ 
    return(
        <div className="landing-page" style={{backgroundImage:"url('./images/bg2.png')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 text-side">
                        <h2>Choose Your Foor <br/>Enjoy The Wonderful Tasty</h2>
                        <p>
                        The service and hospitality industries have a lot to gain from
                         adopting automation for communicating with customers or guests.
                          There is an expectation for any quality
                        </p>
                        <button className="my-btn">The Menu</button>
                    </div>
                    <div className="col-lg-6 col-12 pic-side">
                        <div>
                            <img src="./images/mail.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Landing