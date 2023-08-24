//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import CheckoutPage from './Pages/CheckoutPage';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
//import SideNavbar from './components/Header/SideNavbar';

function App() {
  const [loggedIn, setLoggedIn]= useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setLoggedIn(true)
      }else(
        setLoggedIn(false)
      )
    })
  },[])
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage />}/>
      <Route path='/checkout'  element={<CheckoutPage loggedIn = {loggedIn}/>}/>
      <Route path='/login' element={<Login loggedIn= {loggedIn}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
