import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { getAuth,signOut} from "firebase/auth";
import { useAuthState} from 'react-firebase-hooks/auth';
import app from '../Firebase/Firebase.int';
import CustomLink from '../CustomLink/CustomLink';
const auth=getAuth(app)

function Header() {
    const [user] = useAuthState(auth);
    return (
        <div className='div'>
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/Servies">Servies</CustomLink>
            <CustomLink to="/Order">Order</CustomLink>
            <CustomLink to="/LogIn">LogIn</CustomLink>
            <span>{user?.displayName && user.displayName }</span>
            {user?.displayName ?<button onClick={()=>signOut(auth)}>Sign Out</button>:<CustomLink to="/SignIn">Sign In</CustomLink>}
        </div>
    )
}

export default Header
