import React from 'react'
import p1 from "../p1.jpg";
import p2 from "../p2.jpg";
import p3 from "../p3.jpg";
import p4 from "../p4.jpg";
function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Projects</h1>
            <hr />
            {" "}
            <div className="port">
                <h4>netflix-clone</h4>
                <img class="resize" src={p1} alt=" " />
                <h4>google-clone</h4>
                <img class="resize" src={p2} alt=" " />
                <h4>Daisy B.</h4>
                <img class="resize" src={p3} alt=" " />
                <h4>Wolfgang</h4>
                <img class="resize" src={p4} alt=" " />
            </div>
            
        </div>
    )
}

export default Portfolio
