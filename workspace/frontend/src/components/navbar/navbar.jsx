import './navbar.css'

function Navbar() {
    return (
        <div id="wrapper">
            <div id="navbar">
                <h1>Josh Ilano</h1>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#exp">Experiences</a>
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
