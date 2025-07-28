import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Timeline from './pages/Timeline';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/biography" element={<Layout><Biography /></Layout>} />
      <Route path="/timeline" element={<Layout><Timeline /></Layout>} />
      <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      <Route path="/news" element={<Layout><News /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}
