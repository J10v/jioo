import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-section">
      <div className="col-6 col-sm-3 text-center">
        <h1 id="contact" class="title">Contact</h1>
        <hr />
      </div>
      <div className="logos">
       <FaEnvelope />
       <FaGithub />
       <FaLinkedinIn />
      
        <br />
       
        
      </div>
    </div>
  );
}

export default Contact;