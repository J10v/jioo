import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerFull,} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="contact-section">
      <div className="col-6 col-sm-3 text-center">
        <h1 class="title">Contact...</h1>
        <hr />
      </div>
      <div className="logos">
      <FontAwesomeIcon icon={faThermometerFull} style={{ color: "black" }}/>
        <br />
       
        
      </div>
    </div>
  );
}

export default Contact;