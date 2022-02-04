import React,{useState} from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import Details from './Details'
import './Textform.css'
import Alert from './Alert'

export default function Textform(props) {
    const [text, setText] = useState("This is a demo paragraph written for your reference.");
    const {speak} = useSpeechSynthesis();

    const handleUpClick = ()=>{
        console.log("Button clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        console.log("Button clicked")
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleTitleClick = ()=>{
        console.log("Button clicked")
        let newText = text.split(" ").map((item)=>{
            return (item.charAt(0).toUpperCase()+item.substring(1))
        }).join(" ");
        setText(newText);
    }

    const handleT2SClick = ()=>{
        speak({text:text});
    }

    const alertFn = props.alertfn;

    const handleCopyClick = ()=>{
        console.log("Button clicked");
        navigator.clipboard.writeText(text);
        alertFn('Content copied to clipboard!','warning');
        <Alert alert={alertFn}/>
    }


    const handleClearClick = ()=>{
        console.log("Button clicked")
        let newText = "";
        setText(newText);
    }

    
    const handleOnChange = (event)=>{
        console.log("Demo text");
        setText(event.target.value);
    }

    return (

        <div>
        <div className="container">
    <div className="row">
        <div className="col-sm">
        <div className="bg-secondary text-white rounded p-2 my-3">
            <h2>{text.split(" ").length-1} words, {text.length} characters</h2>
        </div>    
        <div className="container bg-light-gray p-1 border border-secondary rounded">
            <button className={`btn btn-secondary border border-${props.mode} m-1`} onClick={handleUpClick}>Upper</button>
            <button className={`btn btn-secondary border border-${props.mode} m-1`} onClick={handleLoClick}>Lower</button>
            <button className={`btn btn-secondary border border-${props.mode} m-1`} onClick={handleTitleClick}>Title Case</button>
            <button className={`btn btn-secondary border border-${props.mode} m-1`} onClick={handleT2SClick}>Text 2 Speech</button>
            <button className={`btn btn-secondary border border-${props.mode} m-1`} onClick={handleCopyClick}>Copy</button>
            <button className={`btn btn-secondary border border-${props.mode} m-1`} onClick={handleClearClick}>Clear</button>
            
        </div>

        <h1>{props.title}</h1>
        <div className="mb-3">
        <textarea className="form-control my-1" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="15"></textarea>
    
    </div>
        <div className="bg-secondary text-white border border-secondary rounded p-2">
            <h5>{text.split(" ").length-1} words, {text.length} characters</h5>
        </div>

        
        <h3 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>Preview</h3>
            <p className = "bg-light p-4 border border-secondary rounded">{text}</p>

        </div>

        <Details dispData = {text}/>
        
    </div>

    
    </div>
    

        </div>
    )
}
