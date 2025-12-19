import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {
  
  return (
    <Container>
      <div className="users-wrapper">
        <div className="user-item">
          <p>username: xyz</p>  
          <p>email:xyz@gmail.com</p>
          <p>Age: 21</p>
          <p>Gender:female</p>

          <Button variant="primary" className="me-3">View</Button>
          <Button variant="primary" className="me-3">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </Container>
  )
}

export default Home