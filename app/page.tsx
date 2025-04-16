'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      setMessage("Thank you for joining our waitlist! We'll be in touch soon.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[#2f4f97] clip-diagonal z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              ONTARIO<br />
              POLICY<br />
              HACKATHON
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl">
              A 48-hour hands-on event where innovators come together to solve policy issues with real data.
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-[#2f4f97] mb-6">
                Beyond Advocacy,<br />Into Action
              </h2>
              <div className="h-1 w-24 bg-[#2f4f97] mb-8" />
            </div>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                The Ontario Policy Hackathon brings together <span className="font-bold text-[#2f4f97] hover:text-[#1a365d] transition-colors">diverse minds</span> to tackle <span className="italic underline decoration-[#2f4f97] decoration-2">real policy challenges</span>. Whether you're a data scientist, policy analyst, developer, or simply <span className="font-semibold text-[#2f4f97]">passionate about creating positive change</span>, this event is for you.
              </p>
              <p>
              Each team explores the <span className="italic text-[#2f4f97]">root of a specific challenge</span> and builds a solution using census surveys or community insights. That could be a new data collection tool, a community program, or a pilot initiative but it must be backed by a <span className="font-bold underline decoration-[#2f4f97] decoration-2">clear policy proposal</span> that could be presented and adopted by governments, institutions, or local organizations.
              </p>
              <p>
              It's also a <span className="italic text-[#2f4f97] hover:text-[#1a365d] transition-colors">low-stakes, collaborative</span> way for anyone to learn how policy works. You don't need to have a specific background or skill set, just <span className="font-bold text-[#2f4f97] hover:text-[#1a365d] transition-colors">curiosity, creativity, and a passion for solving problems</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Framework Section */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#2f4f97] mb-12 text-center">
              Understanding Policy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/ontario policy hackathon (5).png"
                  alt="Policy Framework Diagram showing interdisciplinary aspects including technical and non-technical elements"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="relative aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/ontario policy hackathon (6).png"
                  alt="Definition of Policy as a definite course or method of action"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Waitlist Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2f4f97]">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Join the Waitlist
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Be the first to know when applications open for the next Ontario Policy Hackathon.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-8 py-4 bg-white text-[#2f4f97] rounded-lg font-bold transition-all ${
                  status === 'loading' 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:bg-white/90'
                }`}
              >
                {status === 'loading' ? 'Subscribing...' : 'Notify Me'}
              </button>
              {message && (
                <p className={`text-sm ${
                  status === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Ontario Policy Hackathon
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#2f4f97] transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2f4f97] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2f4f97] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
    </main>
  );
}
