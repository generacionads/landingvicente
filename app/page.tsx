import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropsSection from '../components/ValuePropsSection';
import RoomsSection from '../components/RoomsSection';
import TestimonialsSection from '../components/TestimonialsSection';

// This is the main page component that would be served at '/'
export default function Page() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <RoomsSection />
      <TestimonialsSection />
    </>
  );
}