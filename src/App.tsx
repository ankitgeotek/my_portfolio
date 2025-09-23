import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContextProvider, useThemeContext } from './hooks/useTheme';

// Import modular page components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';

// Import common components
import Navbar from './components/common/Navbar';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/common/Footer';

// App Content Component
const AppContent: React.FC = () => {
  const { darkMode } = useThemeContext();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 120px)' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my_portfolio" element={<Home />} />
              <Route path="/ankit" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

// Main App Component - exported only once
const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;