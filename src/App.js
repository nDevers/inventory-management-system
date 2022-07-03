import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Features from './Pages/Features/Features';
import CustomerStories from './Pages/CustomerStories/CustomerStories';
import FindExperts from './Pages/FindExperts/FindExperts';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import Integrations from './Pages/Integrations/Integrations';
import Login from './Pages/Authentication/Login';
import Pricing from './Pages/Pricing/Pricing';
import Register from './Pages/Authentication/Register';
import Resources from './Pages/Resources/Resources';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardSummary from './Pages/Dashboard/DashboardSummary';
import RequiredItems from './Pages/Dashboard/RequiredItems';
import Orders from './Pages/Dashboard/Orders/Orders';
import Purchases from './Pages/Dashboard/Purchases';
import Returns from './Pages/Dashboard/Returns';
import Employees from './Pages/Dashboard/Employees';
import Customers from './Pages/Dashboard/Customers';
import Suppliers from './Pages/Dashboard/Suppliers';
import Profile from './Pages/User/Profile';
import Settings from './Pages/User/Settings';
import TermsAndConditions from './Pages/Authentication/TermsAndConditions';
import PrivacyPolicy from './Pages/Authentication/PrivacyPolicy';
import PharmacyProducts from './Pages/Dashboard/Products/Pharmacy/PharmacyProducts';
import NonPharmacyProducts from './Pages/Dashboard/Products/NonPharmacy/NonPharmacyProducts';
import Category from './Pages/Dashboard/Setup/Category/Category';
import UnitType from './Pages/Dashboard/Setup/UnitType/UnitType';
import Company from './Pages/Dashboard/Setup/Company/Company';

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
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardSummary />} />
          <Route path='products/pharmacy' element={<PharmacyProducts />} />
          <Route path='products/non-pharmacy' element={<NonPharmacyProducts />} />
          <Route path='requested-items/pharmacy' element={<RequiredItems />} />
          <Route path='requested-items/non-pharmacy' element={<RequiredItems />} />
          <Route path='orders/pharmacy' element={<Orders />} />
          <Route path='orders/non-pharmacy' element={<Orders />} />
          <Route path='purchases/pharmacy' element={<Purchases />} />
          <Route path='purchases/non-pharmacy' element={<Purchases />} />
          <Route path='setup/category' element={<Category />} />
          <Route path='setup/unit-type' element={<UnitType />} />
          <Route path='setup/company' element={<Company />} />
          <Route path='returns/customer' element={<Returns />} />
          <Route path='returns/expire-or-damage' element={<Returns />} />
          <Route path='employees' element={<Employees />} />
          <Route path='customers' element={<Customers />} />
          <Route path='suppliers/list' element={<Suppliers />} />
          <Route path='suppliers/payment' element={<Suppliers />} />
          <Route path='suppliers/documents' element={<Suppliers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
