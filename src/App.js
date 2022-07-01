import './App.css';
import Navbar from './components/common/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cars from './components/pages/Cars';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
// import Footer from './components/pages/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cars' element={<Cars />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
