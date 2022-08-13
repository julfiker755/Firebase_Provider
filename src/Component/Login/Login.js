import React from 'react'
import useFirebase from '../Hooks/UseFirebase'

function Login() {
    const {signInwidthgoogle}=useFirebase()
    return (
        <div>
             <h1 className='text-[30px] font-bold'>Please LogIn</h1>
             <button onClick={signInwidthgoogle}>Google Sign In</button>
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

export default Login
