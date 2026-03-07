import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy-load sections below the fold
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
