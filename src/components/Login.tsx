import React, { useEffect, useState } from "react";
import loginService from "../services/loginService";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginService.login(username, password).then((res) => {
      console.log(res);
    });
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </label>
        <button type="submit" style={{ padding: "8px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
