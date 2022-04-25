import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUppercaseClick=()=>{
        console.log("uppercase button is clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success");
    }


  const handleSmallcaseClick=()=>{
    console.log('smallcase button is clicked');
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","success");

  }
    const handleChange=(event)=>{
        console.log("changed the textarea");
        setText(event.target.value);
    }
    const clearText=()=>{
      console.log('Clear text is clicked');
      setText(' ');
    }
    const [text,setText] =useState("Enter Text Here");
    // text="amsiha" wrong way to update text it can be updated only by setText() method
  return (
    <>
      <div style={ {color:props.mode==='dark'?'white':'#5e5050'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3" >
      <label htmlFor="myBox" className="form-label" >textarea</label>
      <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#5e5050'}}></textarea>
      
    </div>
    <button className='btn.btn.primary mx-3' onClick={handleUppercaseClick} >Convert to Uppercase</button>
    <button className='btn.btn.primary mx-3' onClick={handleSmallcaseClick}  >Convert to LowerCase</button>
    <button className='btn.btn.primary' onClick={clearText}  >Clear Text</button>

   
    <div className='container my-3'> 
      <p>No of words:{text.split(" ").length} No of chars:{text.length}</p>
    </div>
    </div>
   </>
  )
}
