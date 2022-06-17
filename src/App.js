import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import DefaultNavbar from "./components/DefaultNavbar";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
