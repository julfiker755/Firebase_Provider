import React from 'react'

function Register() {
    return (
        <div>
            <h1 className='text-[30px] font-bold'>Please Register</h1>
            <form>
                <input type="text" placeholder='Your Name'/><br/>
                <input type="email" placeholder='Your Email' /><br/>
                <input type="password"  placeholder='Your password'/><br/>
                <input type="submit" value="Register"/>

            </form>
        </div>
    )
}

export default Register
