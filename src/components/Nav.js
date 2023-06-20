import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faFlag , faBars , faTimes} from '@fortawesome/free-solid-svg-icons';
import { useState , useEffect , useRef } from "react";


const Navbar = () => {
    const [active,setActive] = useState("navBarLinks")
    const [toggle,setToggel] = useState("nav-toggle") 

 const navToggle = () => {
    active === "navBarLinks" ? setActive("navBarLinks nav-active") : setActive("navBarLinks")

    toggle === "nav-toggle" ? setToggel("nav-toggle toggle") : setToggel("nav-toggle")
 }


    return (
        <div className="nav-bar">
            <nav className="container">
                <div className="logo">
                    <img src="./images/logo.png"/>
                    <h1>DooQ</h1>
                </div>
                 
                <div className={active}>
                <div className="links">
                    <ul>
                        <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link> 
                        <Link to="/menu" style={{ textDecoration: 'none' }}><li>Menu</li></Link> 
                        <Link to={"/about"} style={{ textDecoration: 'none' }}><li>About</li></Link>
                        
                        
                    </ul>
                </div>
                <div className="infos">
                 {/* <FontAwesomeIcon icon={faUser} className='icon'/> */}
                </div>
                </div>
          

                <div onClick={navToggle} className={toggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </nav>



        </div>
    )
}




export default Navbar