

import { useState } from "react";

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function register (ev){
    ev.preventDefault();
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({userName, password}),
      headers: {'Content-Type': 'application/json'},
    })
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={ev => setUserName(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>register</button>
    </form>
  );
}
