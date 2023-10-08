/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
