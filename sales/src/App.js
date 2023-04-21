
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AddSales from './components/AddSales';
import Top from './components/Top';
import Revenue from './components/Revenue';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import { BrowserRouter,  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >

          <Route path="/AddSales" element={<AddSales />} />
          

          <Route path="/Top" element={<Top/>} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout />} />

</Route>
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
