import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Features from './Pages/Features/Features';
import CustomerStories from './Pages/CustomerStories/CustomerStories';
import FindExperts from './Pages/FindExperts/FindExperts';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Integrations from './Pages/Integrations/Integrations';
import Login from './Pages/Login/Login';
import Pricing from './Pages/Pricing/Pricing';
import Register from './Pages/Register/Register';
import Resources from './Pages/Resources/Resources';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardSummary from './Pages/Dashboard/DashboardSummary';
import Products from './Pages/Dashboard/Products/Products';
import RequiredItems from './Pages/Dashboard/RequiredItems';
import Orders from './Pages/Dashboard/Orders';
import Purchases from './Pages/Dashboard/Purchases';
import Returns from './Pages/Dashboard/Returns';
import Employees from './Pages/Dashboard/Employees';
import Customers from './Pages/Dashboard/Customers';
import Suppliers from './Pages/Dashboard/Suppliers';
import Setup from './Pages/Dashboard/Setup';
import CreateProduct from './Pages/Dashboard/Products/CreateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="customer-stories" element={<CustomerStories />} />
        <Route path="find-experts" element={<FindExperts />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="integration" element={<Integrations />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="register" element={<Register />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardSummary />} />
          <Route path='products' element={<Products />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='required-items' element={<RequiredItems />} />
          <Route path='orders' element={<Orders />} />
          <Route path='purchases' element={<Purchases />} />
          <Route path='setup' element={<Setup />} />
          <Route path='returns' element={<Returns />} />
          <Route path='employees' element={<Employees />} />
          <Route path='customers' element={<Customers />} />
          <Route path='suppliers' element={<Suppliers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
