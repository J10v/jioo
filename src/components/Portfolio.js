import React from "react";
import ONE from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";

function Projects() {

  return (

    <div className="s1">
      <div className="main-container">
        <h1 class="title" id="projects">Some of my past projects</h1>

        <div className="post-wrapper">
          <div>
            <div className="post">
              <img className="thumbnail" src={ONE} alt="" />
              <div className="post-preview">
                <h6 className="post-title">Netflix Clone</h6>
                <p className="post-intro">
                  Designed built mantained a the lab managment system for FOI
                  Laboratories
                </p>
                <a href="f">Read More</a>
              </div>
            </div>
          </div>

          <div>
            <div class="post">
              <img className="thumbnail" src={two} alt="" />
              <div className="post-preview">
                <h6 className="post-title">Nucamp Website</h6>
                <p className="post-intro">
                  Online store with paypal payments intergration and guest user
                  shopping
                </p>
                <a href="f">Read More</a>
              </div>
            </div>
          </div>

          <div>
            <div class="post">
              <img class="thumbnail" src={three} alt="" />
              <div class="post-preview">
                <h6 class="post-title">Membership Website</h6>
                <p class="post-intro">
                  Modulized guide for online courses with step by step
                  intructions
                </p>
                <a href="f">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
