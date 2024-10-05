import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className="conntainer" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white', 
        color:props.mode==='dark'? 'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>      
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h2> Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h3> Preview</h3>
        <p> {text}</p>
      </div>
    </>
  );
}
