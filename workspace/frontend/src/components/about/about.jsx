import Profile from "../../components/profile/profile"

import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import GFACT from '../../assets/gfact.png'


import { useState } from 'react'

function About () {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide About')


    return (

   
        <div className="glass">
                <div className ="innerContainer" id="about">
                    <h2 style={{fontSize: "44px"}}>About Me</h2>
                    <Profile/>
                    
                    <p>
                        I'm a senior undergraduate at Boston University studying Computer Science. I am currently a 
                        member of the Hack4Impact organization. My fields of interest lie in Computer Graphics, 
                        Game Development, and Software Engineering.
                    </p>          

        
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
                        <h3>My Skills</h3>
                        
                        <div className="Icons">
                        
                            <img width="60" src={HTML} />
                            <img width="60" src={CSS}  />
                            <img width="60" src={PY}   />
                            <img width="60" src={JS}   />
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
                        <h3>My Certifications</h3>

                        <div className="Icons">
                            <a href= "https://www.credly.com/badges/c49dbb3f-4f01-4416-a3c5-49699c4b41ac/public_url">
                                <img width="60" src={GFACT}   />
                            </a>

                            <a href="https://badges.parchment.com/public/assertions/21DKZvG-RV6BhE_-5JMHDw">
                                <img width="60" src="https://api.badgr.io/public/assertions/21DKZvG-RV6BhE_-5JMHDw/image" alt="National Cyber Scholar with Honors 2023 Badge"  />
                            </a>
                        </div>
                    </div>
                
                    
        
                

                </div>
        </div>

   
        

        
    )
}

export default About