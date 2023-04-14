import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
//import {
 // BrowserRouter as Router,
//  Switch,
 // Route,
//  Link
//} from "react-router-dom";//



function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode= ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","success");
      document.title='TextUtils-Dark Mode';
    }
    //if(mode==='light'){
     // setMode('dark');
    //  document.body.style.backgroundColor='yellow';
    //}//
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
   { /*<Router>*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="containe my-3">
    {/*<Switch*>*/}
        {  /*<Route exact path="/About">8?}
           { /*<About />*/}
          {/*</Route>*/}
          {/*<Route  exact path="/"**/}
          <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
           {/* </Route>*/}
       { /*</Switch**/}
  {/*<About/>*/}
  </div>
  {/*</Router>*/}
   
  </>
    
   );
}

export default App;
