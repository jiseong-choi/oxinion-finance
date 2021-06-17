import React from "react";
import styled from "styled-components";

const SignForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signup = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="signup-body">
          <h2 className="signup-header">Sign Up</h2>
          <SignForm>
            <div className="signup-email">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="signup-password">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="signup-password-confirm">
              <label>Confirm</label>
              <input type="password" required />
            </div>
            <button type="submit">Sign Up</button>
          </SignForm>
        </div>
      </div>
      <div className="direct-login">Already have an account? Log In</div>
    </div>
  );
};

export default Signup;
