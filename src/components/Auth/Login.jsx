import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth();
  return (
    <>
      <section className="login">
        <div className="loginContainer">
          <h1 className="mainText">Login</h1>
          <input
            className="authInput"
            autoFocus
            type="text"
            required
            value={email}
            placeholder="Type your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="errorMsg">{emailError}</p>
          <input
            className="authInput"
            autoFocus
            type="password"
            placeholder="Type your password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="errorMsg">{passwordError}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="authButton" onClick={handleLogin}>
                  Sign In
                </button>
                <p className="authP">
                  Don't have an account?
                  <span
                    className="authSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="authButton" onClick={handleSignUp}>
                  Sign up
                </button>
                <p className="authP">
                  Have an account?
                  <span
                    className="authSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
