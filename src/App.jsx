import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import DryContainers from './pages/DryContainers';
import RefrigeratedContainers from './pages/RefrigeratedContainers';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import TransportLogistics from './pages/TransportLogistics';
import ContainerServices from './pages/ContainerServices';
import SmartWarehouse from './pages/SmartWarehouse';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop/dry-containers" element={<DryContainers />} />
              <Route path="/shop/refrigerated" element={<RefrigeratedContainers />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request-a-quote" element={<RequestQuote />} />
              <Route path="/services/transport" element={<TransportLogistics />} />
              <Route path="/services/container" element={<ContainerServices />} />
              <Route path="/services/warehouse" element={<SmartWarehouse />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
