import React, { useState } from "react";
export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("The text has been converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    console.log("Lowerrcase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowerCasse", "success");
  };

  const handleClear = () => {
    console.log("Clear text clicked");
    let newText = "";
    setText(newText);
    props.showalert("Text has been cleared", "success");
  };

  // function handlecopy() {
  //   const text = document.querySelector("#myBox");
  //   if (text) {
  //     text.select();
  //     text.setSelectionRange(0, 99999);

  //     // modern approach to copying text to the clipboard
  //     navigator.clipboard
  //       .writeText(text.value)
  //       .then(() => {
  //         console.log("Text copied to clipboard");
  //       })
  //       .catch((err) => {
  //         console.error("Failed to copy text: ", err);
  //       });
  //   }
  // }

  const handlecopy=()=>{
   
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard", "success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra space has been removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode !== "dark" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13455e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>
          Copy all Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove ExtraSpace
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0)
              .length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview!"}
        </p>
      </div>
    </>
  );
}
