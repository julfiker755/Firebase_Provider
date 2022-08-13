import { useState,useEffect } from "react"
import Firebaseauthentication from "../../Firebase/Firebase.initial"
import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
Firebaseauthentication()

const Googleprovider = new GoogleAuthProvider();
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const auth = getAuth();
    const signInwidthgoogle=()=>{
        signInWithPopup(auth,Googleprovider)
        .then((result)=>{
            const user=result.user
            setUser(user)
            console.log(user)
        })
    }
    const handlesignout=()=>{
        signOut(auth)
        .then(()=>{})
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    }, []);

    return {
        user,
        signInwidthgoogle,
        handlesignout,
    }
}

export default useFirebase;