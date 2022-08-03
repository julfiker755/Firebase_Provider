import './App.css'
import Firebaseauthentication from './Firebase/Firebase.initial';
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut } from "firebase/auth";
import {useState} from 'react'
Firebaseauthentication()
function App() {
  const [User,Setuser]=useState({})
   const auth = getAuth();
  function GoogleSign(){
    const googleprovider = new GoogleAuthProvider();
     signInWithPopup(auth,googleprovider)
     .then(result=>{
      const user=result.user
      Setuser(user)
      console.log(user)
     }).catch(error=>{
      console.log(error)
     })
  }
  function GoogleSignOut(){
  signOut(auth)
  .then(()=>{
    Setuser({})
  }).catch((error)=>{
    console.log(error)
  })
  }
  return (
    <div className="App">
      {User.email ? <button className="border py-1 px-3" onClick={GoogleSignOut}>Sign Out</button>
      :<button className="border py-1 px-3" onClick={GoogleSign}>Google Sign In</button>}
   
   
   
    {User.email && <div className='dic'>
      <h1>Name:{User.displayName}</h1>
      <h1>Email:{User.email}</h1>
      <h1><img  src={User.photoURL} alt="" /></h1>
    </div>}
    </div>
  );
}

export default App;
