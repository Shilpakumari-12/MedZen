import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import JournalPublication from './pages/services/JournalPublication';
import CaseReport from './pages/services/CaseReport';
import ReviewArticle from './pages/services/ReviewArticle';
import Thesis from './pages/services/Thesis';
import Protocol from './pages/services/Protocol';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/journal-publication" element={<JournalPublication />} />
              <Route path="/services/case-report" element={<CaseReport />} />
              <Route path="/services/review-article" element={<ReviewArticle />} />
              <Route path="/services/thesis" element={<Thesis />} />
              <Route path="/services/protocol" element={<Protocol />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;