import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rejection from './components/Rejection';
import Funding from './components/Funding';
import Process from './components/Process';
import Cases from './components/Cases';
import Experts from './components/Experts';
import Capabilities from './components/Capabilities';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rejection />
        <Funding />
        <Process />
        <Cases />
        <Experts />
        <Capabilities />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
