import React from "react";

export default function Login() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>login</button>
    </form>
  );
}
