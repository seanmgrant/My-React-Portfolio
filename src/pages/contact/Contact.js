import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to your server or email service here
    alert('Form submitted!');
  }

  return (
    <div className='container'>
    <h1>Contact Me</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Label className='name'>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label className='email'>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label className='message'>Message</Form.Label>
        <Form.Control as="textarea" rows="3" name="message" value={formData.message} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default ContactPage;