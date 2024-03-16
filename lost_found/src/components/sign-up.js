import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

import "../styles/Signup.css"; // Import your stylesheet for styling
import img1 from "../images/img1.jpg";


const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState(null);

  

  //if (isSignupSuccess) {
  // return <HomePage />;
  //}

  return (
    <div className="signup-container">
      <div className="image-container">
        {/* Add your image here */}
        <img src={img1} alt="Signup" />
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
           
            className="s-button"
          >
            Sign Up
          </Button>
        </Form>
        <p>
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
