import React from 'react'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth} from "firebase/auth";
import { useNavigate, useLocation} from 'react-router-dom';
import app from '../Firebase/Firebase.int';

const auth=getAuth(app)
 
function SignIn() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    function GooglesignIn(){
        signInWithGoogle()
        .then(()=>{
         navigate(from)
        })
    }
    return (
        <div>
        <h1 className='text-[30px] font-bold'>Please LogIn</h1>
        <button onClick={GooglesignIn}>Google Sign In</button>
        <br/>
        <br/>
       <form>
           <input type="email" placeholder='Your Email' /><br/>
           <input type="password"  placeholder='Your password'/><br/>
           <input type="submit" value="Log In"/>

       </form>
   </div>
    )
}

export default SignIn
