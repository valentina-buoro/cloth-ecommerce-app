//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/checkout'  element={<CheckoutPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
