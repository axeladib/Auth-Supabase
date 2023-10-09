/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/SupabaseClient";

function SignIn() {
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //TODO: loginUser function
  const loginUser = (email, password) => {
    supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  //TODO: Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage("");
      setLoading(true);
      if (!password.current?.value || !email.current?.value) {
        setErrorMessage("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await loginUser(email.current.value, password.current.value);
      console.log(user, session, error);
      if (error) setErrorMessage(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMessage("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={email} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password} required />
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
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          New User? <Link to={"/sign-up"}>Register</Link>
        </div>
      </Card>
    </>
  );
}

export default SignIn;
