import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

interface LoginProps {
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const Login = (props: LoginProps) => {
  const [id, setId] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setId(id)
  };

  const handleCreateId = () => {
    props.setId(uuidv4())
  }

  return (
    <Container
      className="d-flex align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-2">
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e: any) => setId(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="me-2">
          Login
        </Button>
        <Button variant="secondary" onClick={handleCreateId}>
          Create A new Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
