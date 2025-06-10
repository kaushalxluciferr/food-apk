import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Placeorder from './pages/placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Cart from './pages/cart/Cart';
import Login from './components/login/Login';

function App() {
  const [show, setshow] = useState(false);
  const location = useLocation(); // Hook to track the current path

  return (
    <>
      {show ? <Login setshow={setshow} /> : null}

      <div className="app">
        <Navbar setshow={setshow} />

        <Routes>
          {/* Only render Home on the root path, not on /cart */}
          {/* <Route path="/" element={location.pathname !== '/<food-apk>/' ? <Home /> : null} /> */}
          <Route path="/" element={location.pathname !== '/cart' ? <Home /> : null} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
