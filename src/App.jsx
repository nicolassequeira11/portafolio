import './App.css'
import { Route, Routes, HashRouter as BrowserRouter, useNavigate } from "react-router-dom";

import { NextUIProvider } from '@nextui-org/react';
import { DarkModeProvider } from './context/DarkModeContext';
import { LanguageProvider } from './context/LanguageContext';

import { Nav } from './pages/components/Navbar';
import { Profile } from './pages/components/Profile';
import { Skills } from './pages/components/Skills';
import { Projects } from './pages/components/Projects';
import { Certificates } from './pages/components/Certificates';
import { Contact } from './pages/components/Contact';
import { Footer } from './pages/components/Footer';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Curriculum } from './pages/components/Curriculum';

export const App = () => {
  const navigate = useNavigate();
  
  return (
    <NextUIProvider navigate={navigate} className="font-montserrat">
      <DarkModeProvider>
        <LanguageProvider>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} 
            />
            <Route path="/" element={<Profile />} 
            />
            <Route path="/" element={<Skills />} 
            />
            <Route path="/" element={<Projects />} 
            />
            <Route path="/" element={<Contact />} 
            />
            <Route path="/" element={<Certificates />} 
            />
            <Route path="/" element={<Footer />} 
            />
            <Route path="/curriculum" element={<CV />} 
            />
            <Route path="/" element={<Curriculum />} 
            />
          </Routes>
        </LanguageProvider>
      </DarkModeProvider>
    </NextUIProvider>
  )
}