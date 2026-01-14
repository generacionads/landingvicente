import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// In a real Next.js app, we would import metadata and fonts here.
// Since we are running in a client-side environment for this preview,
// we are rendering the Navbar and Footer here to simulate the layout wrapper.

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
