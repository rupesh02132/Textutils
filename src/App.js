// import logo from './logo.svg';
import "./App.css";
import TextForm from "./TextForm";
import Navbar from "./Navbar";
import Alert from "./Alert";
import About from "./About";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
    }
     else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  showalert={showalert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              </div>
            }
          />
          <Route path="/about"  element={<About  mode={mode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
