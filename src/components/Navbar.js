import react,{useState} from "react";
import  ReactDOM  from "react-dom"
// #4f2c30b0
// #2c4c4fb0
//#6c8714b0
function Navbar(props){

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode==="white"?"light":"dark"} bg-${props.mode==="white"?"light":"dark"}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TEXTUTILS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
  <label className="form-check-label" for="flexSwitchCheckDefault" >Enable {props.mode === "white"?"DARK":"LIGHT"}</label>
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary ms-3" onClick={props.handleOnClick} >COLOR - 1</button>
  <button type="button" class="btn btn-secondary" onClick={props.handleOnClick}>COLOR - 2</button>
  <button type="button" class="btn btn-secondary" onClick={props.handleOnClick}>COLOR - 3</button>
</div>
</div>
    </div>
  </div>
</nav>
        </>
    )
}
export  default Navbar;