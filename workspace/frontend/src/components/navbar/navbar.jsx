import './navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div id="wrapper">
            <div id="navbar">
                <h1>Josh Ilano</h1>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Experiences</Link>
             </div>

            <div id="image-wrapper"> 
                <img src="/cloud.png" alt="cloud" className="cloud"></img>
                <img src="/cloud2.png" alt="cloud" className="cloud cloud-2"></img>
                <img src="/cloud3.png" alt="cloud" className="cloud cloud-3"></img>
            </div>

             
            

        </div>
   
    )
}

export default Navbar
