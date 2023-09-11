import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Doc from './components/Doc';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
 

function App() {

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
    }
  

  const [mode, setMode] = useState('light')

  const darkMode=()=>{
    if (mode === 'light'){
      setMode('dark') 
      document.body.style.backgroundColor='#4e4f52';
      showAlert("Dark Mode enabled","success");
       }
    else{
      setMode  ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled","success");
    }
  }
  return (
 
    <div className="App">
      <Router> 
 
       <Navbar mode={mode} darkMode={darkMode}/>
       <Alert alert={alert}/>
     
 
  
        <Routes> 
 <Route exact path="/" element={<TextForm    mode={mode}/>}/>
      
         
 <Route exact path="/doc" element={<Doc  mode={mode}/>}/> 
   
   
        <Route exact path="/contact" element={<Contact/>}/>
  
        </Routes>
        </Router>
    </div>
 
  );
}

export default App;
