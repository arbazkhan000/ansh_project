// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/About';
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/contact";
import ErrorPage from "./components/errorPage";
import Footer from "./components/footer";
import AuthState from "./context/authState";
import Logout from "./components/logout";

function App() {

  return (
    <>
    <AuthState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
        </div>
        <Footer/>
      </Router>
      </AuthState>
  </>
  )
}

export default App
