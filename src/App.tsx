import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import userService from "./services/userService";
import loginService from "./services/loginService";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // loginService.login("testuser@example.com", "testuser@123").then((res) => {
    //   // console.log(res);
    // });
    userService.getAllUsers().then((users) => {
      console.log(users);
    });
  }, []);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
