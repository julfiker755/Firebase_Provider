import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import { getAuth} from "firebase/auth";
import { Navigate,useLocation} from 'react-router-dom';
import app from '../Firebase/Firebase.int';

const auth=getAuth(app)
const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    if(!user){
        return <Navigate to="/SignIn" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;