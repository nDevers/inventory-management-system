import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
