import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import "./Login.css";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    //   if()
  };

  const loginToApp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ethernet.svg/1280px-Ethernet.svg.png"
        alt="ethernet logo"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
