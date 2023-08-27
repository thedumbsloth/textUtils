import react,{useState} from "react";
import reactDOM from "react-dom"
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import "./App.css";

function App() {
  const [mode,setMode] = useState("light");
  const [toggle,toggleTextTo] = useState("DARK");
  const tmp = "primary";
  function handleOnClick(){
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
    <Navbar/>
    <button type="button" className= "btn btn-primary ms-1" onClick={handleOnClick}>Enable {toggle}</button>
    <div className="container my-3">
    <Text heading = "Enter the text to analyze"/>
    </div>
    
    </div>
  );
}

export default App;
