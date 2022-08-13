import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Register from './Component/Register/Register';
import Nopage from './Component/Nopage/Nopage';
import Producy from './Component/Product/Producy';




function App() {
  return (
    <div className="App">
         <Router>
          <Header/>
          <Routes>
            <Route index path="/" element={<Home/>}></Route>
            <Route  path="/Home" element={<Home/>}></Route>
            <Route path="/LogIn" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Nopage/>}/>
            <Route path="/Product" element={<Producy/>}/>
          </Routes>
         </Router>
      </div>
  );
}

export default App;
