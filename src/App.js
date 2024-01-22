import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React,{ useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode , setMode] = useState('light'); //Whether dark mode is enabled or not
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      mssg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing Mode"
      // },2000)
      // setInterval(()=>{
      //   document.title="Install TextUtils"
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - Light Mode"
    }   
  }
  
  return (
    <> 
      <Router>
        <Navbar title="DemoUtils" aboutPage="AboutUs" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-2">
        <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<TextForm heading="Enter your text below" mode={mode} showAlert={showAlert}/>} />
        </Routes>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
