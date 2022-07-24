import React, { useState } from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log("Up case");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }

    const handleClrClick = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let tArea = document.getElementById("myBox");
        tArea.select();
        navigator.clipboard.writeText(tArea.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");

    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" style={{ background: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-1 my-1`} onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your text summary</h2>
                <p><b>{(text.split(/\s+/)).filter(element => element !== '').length}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{(0.008 * (text.split(/\s+/)).filter(element => element !== '').length).toFixed(2)}</b> Minutes Read</p>
                <h2>Preview</h2>
                <p style={{ whiteSpace: "pre", width: "70vw", height: "70vh", overflow: "auto", border: "1px solid", borderRadius: "3px" }}>{text}</p>
            </div>
        </>
    )
}
