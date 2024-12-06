import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { Shop } from './pages/Shop';
import { Account } from './pages/Account';
import { Checkout } from './pages/Checkout';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { useThemeStore } from './store/themeStore';
import './styles/glassmorphism.css';

function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
    </>
  );
}

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen bg-gray-50 ${isDarkMode ? 'dark bg-gray-900' : ''}`}>
        <div className="animated-bg fixed inset-0 opacity-10" />
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/account" element={<Account />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;