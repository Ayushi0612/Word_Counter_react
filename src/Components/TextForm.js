import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
    // console.log("handleUpClick Button was Clicked")
    // setText("You have clicked on handleUpClick button")
    console.log(typeof(text))
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","primary")
  }

  const convertLowerCase=()=>{
    console.log(typeof(text))
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","danger")
  }

  const countLetters=()=>{
    console.log(typeof(text))
    let newText=String(text.length);//here converting the obtained length of the text to string
    setText(newText)
    props.showAlert("Letters have been counted","success")
  }

  const clearText=()=>{
    var newText="";
    setText(newText);
    props.showAlert("Text have been cleared","warning")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text have been spoken","info")
  }

  const handleCopy=()=>{
    console.log("I am copy")
    // Access the textarea element with the id "myBox"
    var text=document.getElementById("myBox")
    
  // Select the text within the textarea
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text have been copied","secondary")
  }
  

  const handleOnClick=(event)=>{
    // console.log("On Change")
    console.log(event)//here event is an object which has information about the event, such as the type of the event and the target element (in this case, the textarea).

    setText(event.target.value) //This line sets the state variable text to the value entered by the user in the textarea. 
  }

  const [text, setText]= useState('');
  return ( 
    <> 
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea> 
        {/* here above, double curly braces is for one for javascript and other for object that is we have written an object inside javascript */}
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-danger mx-1" onClick={convertLowerCase}>LowerCase</button>
        <button className="btn btn-success mx-1" onClick={countLetters}>CountLetters</button>
        <button className="btn btn-warning mx-1" onClick={clearText}>ClearText</button>
        <button className="btn btn-secondary mx-1" onClick={handleCopy}>CopyText</button>
        <button type="submit" className="btn btn-info mx-1" onClick={speak}>Speak</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>WordCounter</h1>
      <p><b>{text.split(" ").length} words and {text.length} characters</b></p> 
      {/* here split function will give an array */}
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in textbox above to preview here"}</p>
    </div>
    </> 
  )
}
