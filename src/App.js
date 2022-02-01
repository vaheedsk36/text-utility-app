import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showMessage = (message,type)=>{
    setAlert({
      msg: message,
      type: type
      });

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showMessage('Darkmode has been enabled!','success');
     
      document.body.style.backgroundColor = 'black';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showMessage('Lightmode has been enabled!','success');

      

    }
  }
  return (

    <BrowserRouter>
      <div className="container p-3">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       <Routes>
      <Route path="/" element={<Textform/>}>
        <Route path="/about" element={<About/>}/>
        
      </Route>
       </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
