import react, { useState } from "react";
import reactDOM from "react-dom";
import Navbar from "./components/Navbar";
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
          <Text heading="Enter the text to analyze" mode={mode} />
        </div>
      </div>
    </>
  );
}

export default App;
