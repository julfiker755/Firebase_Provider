import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
import { getAuth } from "firebase/auth";
const app=initializeApp(firebaseConfig)
function Firebaseauthentication(){
    getAuth(app)
}
export default Firebaseauthentication;