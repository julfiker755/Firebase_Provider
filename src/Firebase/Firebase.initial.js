import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

function Firebaseauthentication(){
    initializeApp(firebaseConfig)
}
export default Firebaseauthentication;