import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { createUser} from "../features/userDetailSlice";

function Createuser() {

  const dispatch = useDispatch();

  const[users, setUsers] = useState({
        name: '',
        email: '',
        Age: '',
        gender: ''
  });

  const getUserData = (e) => {
    setUsers({...users, [e.target.name] : e.target.value})
  }

 const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(createUser(users));
    console.log(users)
  };

  return (
    <>
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your Name" onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="name@example.com" onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" name="Age" placeholder="name@example.com" onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" name="gender" placeholder="name@example.com" onChange={getUserData} />
      </Form.Group>
       <Button type="submit">Submit form</Button>
    </Form>
    </Container>
    </>
  )
}

export default Createuser