import './App.css';
import Login from './components/Login/Login';
import Header from './components/Feed/Header';
import {useState} from 'react';
import firebase from '@firebase/app-compat';
import 'firebase/compat/auth';



function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  firebase.auth().onAuthStateChanged((usuario)=>{
    if (usuario) {
      return setIsSignIn(true)  
    }else{
      setIsSignIn(false)
    }
  })
  if (isSignIn){
    return (
      window.location.href = "http://localhost:3000/"
    );
  }else{
    return (
      <div className="App">
        <Login/> 
      </div>
    );
  }
}

export default App;
