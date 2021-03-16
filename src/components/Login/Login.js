import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ethernet.svg/1280px-Ethernet.svg.png"
        alt="ethernet logo"
      />
      ,
      <form>
        <input placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
