/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Button, Card, Link } from "react-bootstrap";

function SignIn() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>

            <div className="text-center mt-2">
              <Button type="submit" className="w-50">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          New User? <Link to={"/register"}>Register</Link>
        </div>
      </Card>
    </>
  );
}

export default SignIn;
