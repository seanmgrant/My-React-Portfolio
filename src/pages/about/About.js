import React from 'react';
import './about.css';
import SG from './SG.png';

export default function About() {
  return (
    <section className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm">
          <img src={SG} className="img-fluid"  alt="sean" />
        </div>
        <div className="col-sm about-me">
          <p>
            <br/>
            <br/>
            As a Full Stack Web Developer with a passion for music, I thrive at the intersection of technology and art. I will soon be completing a certificate in Full Stack Web Development from the University of Denver Coding Boot Camp, where I honed my skills in creative problem-solving and design.
            <br/>
            <br/> 
            With a desire to create innovative tools for modern music production, such as DAWs, soft synths, and audio plugins, I am driven to make a meaningful impact in the music industry, and I am driven by a desire to create innovative solutions that enhance people's lives.
          </p>
        </div>
      </div>
    </section>
  );
}