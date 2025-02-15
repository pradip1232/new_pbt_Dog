import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import UpcomingPage from './components/UpcomingPage';
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/BlogDetails';
import Dashboard from './pages/Dashboard';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {!isDashboard && <NavbarComponent />}

      <Routes>
        <Route path="upcoming" element={<UpcomingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research-and-innovation" element={<Research />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
