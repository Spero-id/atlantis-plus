import React from 'react';
import '../styles/Login.css';
import { FaEnvelope, FaIdCard, FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Section: Welcome Back! */}
      <div className="login-left-panel">
        <img
          src="/LoginBG01.png"
          alt="Building background"
          className="background-image"
        />
        <div className="welcome-content">
          <h1 className="welcome-title">
            WELCOME
            <br />
            BACK!
          </h1>
          <p className="welcome-text">
            Log in your account here tp <br />
            get more and better experience on
            <br />
            our web!
          </p>
          <button className="back-to-website-btn">&larr; Back to Website</button>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="login-right-panel">
        <div className="right-panel-wave"></div>
        <div className="login-card-wrapper">
          <div className="login-logos">
            <img
              src="/smplogonav.png"
              alt="SMP Atlantis Logo"
              className="login-logo"
            />
            <img
              src="/smklogonav.png"
              alt="SMK Atlantis Logo"
              className="login-logo"
            />
          </div>
          <div className="login-card">
            <h2 className="login-title">Log In</h2>
            <p className="login-subtitle">Atlantis Plus</p>
            <p className="login-tagline">Creative, Cheerful, Change the world</p>

            <form className="login-form">
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Gmail"
                  className="login-input"
                />
              </div>
              <div className="input-group">
                <FaIdCard className="input-icon" />
                <input
                  type="text"
                  placeholder="Nomor Induk Siswa"
                  className="login-input"
                />
              </div>
              <div className="input-group">
                <FaEye className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                />
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <div className="or-divider">
                <span>Or Login with</span>
              </div>

              <button type="button" className="google-login-btn">
                <FcGoogle className="google-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
