
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';



function App() {
  const[mode, setMode]=useState('light');//whether dark mode is enabled or not
  const[alert, setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","sucess")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","sucess")
    }
  }
  return (
    <>
      
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>
<div className="container my-3" >

  <TextForm  heading="Enter the text to analyze below"  mode={mode}/>
</div>

    </>
  );
}

export default App;
