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
    function Clear(){
        const newText = "";
        setText(newText);
    }
    function CapitaliseEachWord(){
        let newText = "";
        let ch = text.charAt(0);
        newText += ch.toUpperCase();
        for(let i = 1; i < text.length; i++){
            ch = text.charAt(i);
            if(text.charAt(i-1) === " ")
            ch = ch.toUpperCase();
            newText += ch;

        }
        console.log(newText);
        
        setText(newText);
    }
    function camelCase(){

    }
    return (
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <div className="form-outline">
        <textarea className={`form-control ${props.mode === "light"?"white":"grey" } `} id="myBox" rows="8" value= {text} onChange={handleOnChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary my-3 me-1" onClick={Lower}>lowercase</button>
        <button type="button" className="btn btn-primary my-3 me-1" onClick={Upper}>UPPERCASE</button>
        <button type="button" className="btn btn-primary my-3 me-1" onClick={Clear}>Clear Text</button>
        <button type="button" className="btn btn-primary my-3 me-1" onClick={CapitaliseEachWord}>Capitalise Each Word</button>
        
        </div>
    )
}

export default Text;