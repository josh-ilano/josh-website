import Profile from "../../components/profile/profile"

import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import { useState } from 'react'

function About () {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toggle() {
        if(display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return (

        <div class="glass">
            <div class ="innerContainer" id="about">
                <Profile/>
                <h2>
                    <button className="toggler" onClick={toggle}>{buttonText}</button>
                    About me
                </h2>
                <div style={{display: display}}>
                    <p>
                        I'm a student at Boston University studying Computer Science. I am currently a 
                        member of the the Hack4Impact organization.
                    </p>
                </div>
                <h3>My Skills</h3>
                <div className="Icons">
                    <img width="60" src={HTML} />
                    <img width="60" src={CSS}  />
                    <img width="60" src={PY}   />
                    <img width="60" src={JS}   />
                </div>
            </div>
        </div>
        
    )
}

export default About