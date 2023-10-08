/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/sign-up"></Route>
            <Route path="/sign-in"></Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
