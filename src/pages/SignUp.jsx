/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../utils/SupabaseClient";

function SignUp() {
  //TODO: Temporary storage for the email,password and comfirmPassword
  const email = useRef(null);
  const password = useRef(null);
  const comfirmPassword = useRef(null);
  //TODO: State management for errorMessage and message
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //TODO: Function for signUp
  const createUser = (email, password) =>
    supabase.auth.signUp({ email, password });

  //TODO:   Making the change when the form is being submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //TODO: Check if all field is being fill in
    if (
      !email.current?.value ||
      !password.current?.value ||
      !comfirmPassword.current?.value
    ) {
      setErrorMessage("Please fill in all the field");
      return;
    }
    //TODO: Check uf the password and comfirm password match
    if (password.current.value == comfirmPassword.current.value) {
      setErrorMessage("Password is not match");
    }
    //TODO: Custom hook to register the user
    try {
      setErrorMessage("");
      setLoading(true);
      const { data, error } = await createUser(
        email.current.value,
        password.current.value
      );
      console.log(data, error);
      if (!error && data) {
        setMessage(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMessage("Error in creating account");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={email} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password} required />
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={comfirmPassword} required />
            </Form.Group>
            {errorMessage && (
              <Alert
                variant="danger"
                onClose={() => setErrorMessage("")}
                dismissible
              >
                {errorMessage}
              </Alert>
            )}
            {message && (
              <Alert
                variant="success"
                onClose={() => setMessage("")}
                dismissible
              >
                {message}
              </Alert>
            )}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already a User? <Link to={"/sign-in"}>Login</Link>
      </div>
    </>
  );
}

export default SignUp;
