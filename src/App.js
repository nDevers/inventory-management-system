import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import CustomerStories from './pages/CustomerStories';
import FindExperts from './pages/FindExperts';
import ForgotPassword from './pages/authentication/ForgotPassword';
import Integrations from './pages/Integrations';
import Login from './pages/authentication/Login';
import Pricing from './pages/Pricing';
import Register from './pages/authentication/Register';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardSummary from './pages/dashboard/DashboardSummary';
import Customers from './pages/dashboard/Customers';
import Employees from './pages/dashboard/Employees';
import Profile from './pages/user/Profile';
import Settings from './pages/user/Settings';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PharmacyProducts from './pages/dashboard/products/PharmacyProducts';
import NonPharmacyProducts from './pages/dashboard/products/NonPharmacyProducts';
import Categories from './pages/dashboard/setup/Categories';
import UnitTypes from './pages/dashboard/setup/UnitTypes';
import Companies from './pages/dashboard/setup/Companies';
import PharmacyOrders from './pages/dashboard/orders/PharmacyOrders';
import NonPharmacyOrders from './pages/dashboard/orders/NonPharmacyOrders';
import PurchaseNonPharmacyProducts from './pages/dashboard/purchase/PurchaseNonPharmacyProducts';
import PurchasePharmacyProducts from './pages/dashboard/purchase/PurchasePharmacyProducts';
import NonPharmacyItems from './pages/dashboard/requestedItems/NonPharmacyItems';
import PharmacyItems from './pages/dashboard/requestedItems/PharmacyItems';
import CustomersReturns from './pages/dashboard/returns/CustomersReturns';
import ExpiresOrDamagesReturns from './pages/dashboard/returns/ExpiresOrDamagesReturns';
import SuppliersList from './pages/dashboard/suppliers/SuppliersList';
import SuppliersDocuments from './pages/dashboard/suppliers/SuppliersDocuments';
import SuppliersPayments from './pages/dashboard/suppliers/SuppliersPayments';

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
          <Route path='requested-items/pharmacy' element={<PharmacyItems />} />
          <Route path='requested-items/non-pharmacy' element={<NonPharmacyItems />} />
          <Route path='orders/pharmacy' element={<PharmacyOrders />} />
          <Route path='orders/non-pharmacy' element={<NonPharmacyOrders />} />
          <Route path='purchases/pharmacy' element={<PurchasePharmacyProducts />} />
          <Route path='purchases/non-pharmacy' element={<PurchaseNonPharmacyProducts />} />
          <Route path='setup/categories' element={<Categories />} />
          <Route path='setup/unit-types' element={<UnitTypes />} />
          <Route path='setup/companies' element={<Companies />} />
          <Route path='returns/customers' element={<CustomersReturns />} />
          <Route path='returns/expires-or-damages' element={<ExpiresOrDamagesReturns />} />
          <Route path='employees' element={<Employees />} />
          <Route path='customers' element={<Customers />} />
          <Route path='suppliers/lists' element={<SuppliersList />} />
          <Route path='suppliers/payments' element={<SuppliersPayments />} />
          <Route path='suppliers/documents' element={<SuppliersDocuments />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
