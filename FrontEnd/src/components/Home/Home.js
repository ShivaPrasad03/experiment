import react from "react"
import logo from "./Asset_1.svg"
import image_1 from './image_1.jpg'
import "./Home.css"

export default function Home(){
return(<>
<div className="Home-container" >
    <nav>
    <img className="logo-image" src={logo} alt="logo"/>
        <div><button className="login-btn btn-1">Login</button>
    <button  className="signup-btn btn-1">SignUp</button>
        </div></nav>
    <div className="intro-cont">
        <div>
        
        <p>Find People Having Same Idea As You.</p>
        </div>      
        <div>
           
        </div>
    </div>
</div>

</>

);

}
