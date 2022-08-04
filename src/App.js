import './App.css'
import Firebaseauthentication from './Firebase/Firebase.initial';
import { getAuth ,createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import {useState} from 'react'

Firebaseauthentication()
function App() {
  
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  function handleEmail(event){
    setemail(event.target.value)
  }
  function handlepass(event){
    setpass(event.target.value)
  }
  const HandleSubmit=(e)=>{
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,pass)
    .then(result=>{
      const user=result.user
      console.log(user)
      EmailVarify()
    }).catch((error)=>{
      console.log(error)
    })
  }
  //! Note:how to in your email inbox not allow.Your email check spam button.
  function EmailVarify() {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
      .then(() => {
      console.log("Your Email sent in your inbox")
      });
  }
  return (
    <div className="App">
      <br/>
     <form className="space-y-3" onSubmit={HandleSubmit}>
      <h1>Email:<input onChange={handleEmail} className="border border-red-800" type="text"/></h1>
      <h1>Password:<input onChange={handlepass} className="border border-red-800" type="password"/></h1>
      <button className="border border-[green] px-3">Sign In</button>
     </form>
      </div>
  );
}

export default App;
