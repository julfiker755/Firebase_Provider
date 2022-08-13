import React from 'react'
import {Link} from 'react-router-dom'
import useFirebase from '../Hooks/UseFirebase'

function Header() {
    const {user,handlesignout}=useFirebase()
    return (
        <div className='navcss'>
           <Link to="/Home">Home</Link> 
           <Link to="/Product">Products</Link>
           <Link to="/orders">Orders</Link>
           <Link to="/register">Register</Link>
           <span>{user?.displayName && user.displayName}</span>
           {user?.uid ? <button onClick={handlesignout}>Sign Out</button>:<Link to="/LogIn">Log In</Link>}
        </div>
    )
}

export default Header
