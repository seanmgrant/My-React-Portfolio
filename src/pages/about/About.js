import React from 'react';
import './about.css';
import SG from './SG.jpg';

export default function About() {
  return (
    <section className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm">
          <img src={SG} id="img-fluid" alt="sean" />
        </div>
        <div className="about-me">
          <p>
            As a Full Stack Web Developer with a passion for music, I thrive at the intersection of technology and art. I will soon be completing a certificate in Full Stack Web Development from the University of Denver Coding Boot Camp, where I honed my skills in creative problem-solving and design. With a desire to create innovative tools for modern music production, such as DAWs, soft synths, and audio plugins, I am driven to make a meaningful impact in the music industry, and I am driven by a desire to create innovative solutions that enhance people's lives.
          </p>
        </div>
      </div>
    </section>
  );
}