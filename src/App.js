import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Servies from './Component/Servies/Servies';
import LogIn from './Component/LogIn/LogIn';
import SignIn from './Component/SignIn/SignIn';
import Header from './Component/Header/Header';
import Order from './Component/Order/Order';
import RequireAuth from './Component/RequireAuth/RequireAuth';


function App() { 
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Servies" element={<Servies/>}/>
            <Route path="/Order" element={
              <RequireAuth><Order/></RequireAuth>
            }></Route>
            <Route path="/LogIn" element={<LogIn/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>

          </Routes>
        </Router>
      </div>
  );
}

export default App;
