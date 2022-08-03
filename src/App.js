import './App.css'
import Firebaseauthentication from './Firebase/Firebase.initial';
import {signInWithPopup,getAuth,FacebookAuthProvider,signOut } from "firebase/auth";
import {useState} from 'react'
Firebaseauthentication()
function App() {
  const [User,Setuser]=useState({})
   const auth = getAuth();
  function FacebookSignIn(){
    const Facebookprovider = new FacebookAuthProvider();
    signInWithPopup(auth,Facebookprovider)
     .then(result=>{
      const user=result.user
      Setuser(user)
      console.log(user)
     }).catch(error=>{
      console.log(error)
     })
  }
  function FaceSignOut(){
  signOut(auth)
  .then(()=>{
    Setuser({})
  }).catch((error)=>{
    console.log(error)
  })
  }
  return (
    <div className="App">
      {User.email ? <button className="border py-1 px-3" onClick={FaceSignOut}>Sign Out</button>
      :<button className="border py-1 px-3" onClick={FacebookSignIn}>Facebook Sign In</button>}
   
   
   
    {User.email && <div className='dic'>
      <h1>Name:{User.displayName}</h1>
      <h1>Email:{User.email}</h1>
      <h1><img  src={User.photoURL} alt="" /></h1>
    </div>}
    </div>
  );
}

export default App;
