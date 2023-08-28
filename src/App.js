import react, { useState } from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Text from "./components/Text";
import "./App.css";

// #4f2c30b0
// #2c4c4fb0
//#6c8714b0

function App() {
  const [mode, setMode] = useState("white");
  const [text, toggleTextTo] = useState("DARK");
  const [color, setColor] = useState("");
  function handleOnClick(event) {
    let newColor = color;
    if (event.target.innerHTML === "COLOR - 1") newColor = "#4f2c30b0";
    if (event.target.innerHTML === "COLOR - 2") newColor = "#2c4c4fb0";
    if (event.target.innerHTML === "COLOR - 3") newColor = "#6c8714b0";

    setColor(newColor);
    setMode("");
  }
  function toggleMode() {
    if (mode === "white") {
      setMode("#042743");
      toggleTextTo("LIGHT");
      setColor("");
    } else {
      setMode("white");
      toggleTextTo("DARK");
      setColor("");
    }
  }
  return (
    <>
    <Router>
    <div
      style={{
        backgroundColor: color === "" ? mode : color,
        color: mode === "white" ? "black" : "white",
        height: "100%",
      }}
    >
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        handleOnClick={handleOnClick}
      />
      
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={<Text heading="Enter the text to analyze" mode={mode} />}
            ></Route>
          </Routes>
        </div>
      
    </div>
    </Router>
    </>
  );
}

export default App;
