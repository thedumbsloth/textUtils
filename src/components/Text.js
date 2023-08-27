import react,{useState} from "react";
import reactDOM from "react-dom";

function Text(props){
    const [text,setText] = useState("Enter text here");
    function Lower(){
        const newText = text.toLowerCase();
        setText(newText);
    }
    function Upper(){
        const newText = text.toUpperCase();
        setText(newText);
    }
    function handleOnChange(event){
        setText(event.target.value);
    }
    return (
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <div className="form-outline">
        <textarea className="form-control" id="myBox" rows="8" value= {text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary my-3 me-1" onClick={Lower}>lowercase</button>
        <button type="button" className="btn btn-primary my-3 me-1" onClick={Upper}>UPPERCASE</button>
        
        </div>
    )
}

export default Text;