// import logo from './logo.svg';
import './App.css';
import { redirect } from "react-router-dom";
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Switch, Route, Link, useLocation } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage';
import Home from './Components/Home';
// import BrowserRouter from 'react-rou'
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        {/* <ProfilePage></ProfilePage> */}
        <div className=""> 
          <Routes>
            <Route exact path="/" element={<Home></Home>}>
            </Route>
            <Route exact path="/SignIn" element={<SignIn></SignIn>}>
            </Route>
            <Route exact path="/SignUp" element={<SignUp></SignUp>}>
            </Route>
            <Route exact path="/ProfilePage" element={<ProfilePage></ProfilePage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
