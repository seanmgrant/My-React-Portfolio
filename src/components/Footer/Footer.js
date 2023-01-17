import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col  } from 'react-bootstrap';


export default function Footer() {
  return (
    <div className='footer-basic'>
      <footer className='container text-center'>
      <div className='row'>
          <a
            className='col-sm-2 fa-3x'
            href="https://github.com/seanmgrant"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className='col-sm-2 fa-3x'
            href="https://www.linkedin.com/in/sean-grant-a7858551/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
         
        <a
            className='col-sm-2 fa-3x'
            href="contact"
            target="_blank"
            rel="noreferrer"
            >
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
     
            </div>

      </footer>
      </div>
    
  );
};

