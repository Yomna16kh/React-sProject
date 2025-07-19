import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <FavoritesProvider>
          <Router>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '100vh' 
            }}>
              <Navbar onSearch={handleSearch} />
              
              <Box component="main" sx={{ 
                flexGrow: 1, 
                pt: { xs: 7, sm: 8 },
                pb: 2
              }}>
                <Routes>
                  <Route 
                    path="/" 
                    element={<HomePage searchTerm={searchTerm} />} 
                  />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/about" element={<AboutPage />} />
                </Routes>
              </Box>
              
              <Footer />
            </Box>
          </Router>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
