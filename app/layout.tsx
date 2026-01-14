import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Escapology Madrid - Escape Room Premium</title>
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        
        {/* Tailwind CSS & Config */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    slate: { 950: '#020617' },
                    amber: { 500: '#f59e0b', 600: '#d97706' }
                  },
                  fontFamily: {
                    serif: ['Cinzel', 'serif'],
                    sans: ['Lato', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #020617; color: #e2e8f0; }
          `
        }} />
      </head>
      <body className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;