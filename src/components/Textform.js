import React,{useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("This is a demo paragraph written for your reference.");

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

        <>
        <div className="container">
    <div className="row">
        <div className="col-sm">
        <div className="bg-dark text-white border border-secondary rounded p-2 my-3">
            <h2>{text.split(" ").length-1} words, {text.length} characters</h2>
        </div>    
        <div className="container bg-light p-1">
            <button className="btn btn-secondary m-1" onClick={handleUpClick}>Upper</button>
            <button className="btn btn-secondary m-1" onClick={handleLoClick}>Lower</button>
            <button className="btn btn-secondary m-1" onClick={handleTitleClick}>Title Case</button>
            <button className="btn btn-secondary m-1" onClick={handleClearClick}>Clear</button>
        </div>
    
        <h1>{props.title}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="15"></textarea>
    
    </div>
        <div className="bg-secondary text-white border border-secondary rounded p-2">
            <h5>{text.split(" ").length-1} words, {text.length} characters</h5>
        </div>

        
        <h3 className='my-3'>Preview</h3>
            <p className = "bg-light p-4 border border-secondary rounded">{text}</p>

        </div>
        <div className="col-sm-3">
            <div className="container">
              <h4 className = "bg-secondary text-white p-2 rounded">Details</h4>
              <ul className="list-group">
                  <li className="list-group-item">Total Sentences {text.split(".").length-1}</li>
                  <li className="list-group-item">Read time {(0.008*text.split(" ").length).toFixed(3)} minutes</li>
                  <li className="list-group-item">Words {text.split(" ").length-1}</li>
                  <li className="list-group-item">Characters {text.length}</li>
                  <li className="list-group-item">Paragraphs</li>
                  <li className="list-group-item">Speaking Time</li>
              </ul>
              
            </div>
            
        </div>
        
    </div>

    
    </div>

        </>
    )
}
