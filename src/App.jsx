/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";

function App() {
  //FIXME : Create the authentication here


  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
          {/* TODO: Passed the key and session as a prop to the AuthRoute component */}
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
