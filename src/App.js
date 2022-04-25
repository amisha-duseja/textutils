
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light'); 
  const [alert, setalert] = useState(null);
  const showAlert=(messege,type)=>{
      setalert({
        msg:messege,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
 const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark') ;// only navbar becomes dark because this prop is coming from navbar only
      document.body.style.backgroundColor='#5e5050' ;//The entire body becomes dark
      showAlert("DarkMode has been enabled", "success");
      document.title="TextUtils -darkmode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been enabled", "success");
      document.title="TextUtils -lightmode";



    }
  }
   return (
   <>
   
  
{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
{/* <Navbar /> */}
<Router>


 <Navbar title="TextUtils" mode={mode} Togglemode={togglemode}/>
 <Alert alert={alert}></Alert>
<div className="container">

<Switch>
          <Route exact path="/About">
            <About/>
          </Route>
       
          <Route exact path="/">
        <TextForm heading="Give Heading" mode={mode} showAlert={showAlert}/>  
            
          </Route>
  </Switch>
  </div>
  </Router>

   </>
  );
}

export default App;
