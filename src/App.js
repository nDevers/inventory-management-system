import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Sidebar />

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
