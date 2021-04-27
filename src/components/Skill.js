import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerFull,} from '@fortawesome/free-solid-svg-icons'

function Skill() {
    return (
        <div className="skill">
            <h1>Skills</h1>
            <hr />
            {" "}
            <div className='logos'>
                <FontAwesomeIcon icon={faThermometerFull} style={{ color: "#fff" }}/>
            
            </div>
        </div>
    )
}

export default Skill