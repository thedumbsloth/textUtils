import react,{useState} from "react";
import reactDOM from "react-dom"
import Navbar,{mode} from "./components/Navbar";
import Text from "./components/Text";
import "./App.css";

function App() {
  const [mode,setMode] = useState("light");
  const [text,toggleTextTo] = useState("DARK");

  function toggleMode(){
    if(mode === "light")
    {
    setMode("dark");
    toggleTextTo("LIGHT");
    }
    else
    {
    setMode("light");
    toggleTextTo("DARK");
    }

}
  return (
    <div className={mode}>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {/* <button type="button" className= "btn btn-primary ms-1" onClick={handleOnClick}>Enable {toggle}</button> */}
    <div className="container my-3">
    <Text heading = "Enter the text to analyze" mode={mode} />
    </div>
    
    </div>
  );
}

export default App;
