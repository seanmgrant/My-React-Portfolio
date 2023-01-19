import React from "react";
import "./resume.css";



export default function Resume() {
  return (
    <div>
      <p>
        <a className="d-btn" href="../sgResume.pdf" download> 
          Download Resume
        </a>
      </p>
      <div className="tech-skills">
        <h1>Technical Skills</h1>
        <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GraphQL, GitHub, MySQL, Express, React, Node,AJAX, JSON, jQuery, Bootstrap, Sequelize, MongoDB, Pro Tools, Logic Pro, Ableton, Premiere Pro </p>
        
      </div>
    </div>
  );
}