import React from "react";
import photo from "./p.jpg";

function About() {
  return (
    <div className="about">
      <h2>About me</h2>

      <main class="flex-container">
        <section class="main-content" id="main-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            placeat cumque exercitationem vitae nisi tenetur delectus
            praesentium doloremque, quibusdam nemo maxime laudantium et possimus
            pariatur doloribus excepturi. Veritatis ex numquam inventore odit
            dolorum mollitia dolorem, itaque atque non ratione molestias a
            repellat ullam corporis quisquam ipsa sit iure tempore nulla.
          </p>
        </section>

        <section class="sidebar" id="sidebar">
          <img src={photo} alt=""></img>
        </section>
      </main>
    </div>
  );
}

export default About;
