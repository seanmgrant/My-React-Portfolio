import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Card, Image, Modal, Button } from "react-bootstrap";


export default function Footer() {
  return (
    <div className='footer-basic'>
      <footer className='container text-center'>
      <div className='row'>
          <a
            className='col-2 fa-2x me-3'
            href="https://github.com/seanmgrant"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className='col-2 fa-2x me-3'
            href="https://www.linkedin.com/in/sean-grant-a7858551/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className='col-2 fa-2x me-3 '
            href="https://www.instagram.com/youngodyssey/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
            </div>

      </footer>
      </div>
    
  );
};

