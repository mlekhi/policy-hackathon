'use client';

import Hero from './components/Hero';
import About from './components/About';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
