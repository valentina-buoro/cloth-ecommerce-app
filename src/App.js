//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import CheckoutPage from './Pages/CheckoutPage';
import Login from './components/Login/Login';
//import SideNavbar from './components/Header/SideNavbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/checkout'  element={<CheckoutPage/>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
