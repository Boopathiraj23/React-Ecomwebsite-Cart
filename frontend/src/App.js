import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
function App() {
  const [cart_in,setCartIn]=useState([])
  return (
    <div className="App">
      
      <Router>
      <div>
      <ToastContainer theme='dark' position='top-center' />
      <Header cart_in={cart_in}/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Return' element={<Home/>}/>
          <Route path='/search' element={<Home/>}/>
          <Route path='/singleproduct/:id' element={<ProductDetails cart_in={cart_in} setCartIn={setCartIn} />}/>
          <Route path='/cart/' element={<Cart cart_in={cart_in} setCartIn={setCartIn} />}/>
          
          
        </Routes>
        </div>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
