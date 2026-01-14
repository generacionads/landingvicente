import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropsSection from '../components/ValuePropsSection';
import RoomsSection from '../components/RoomsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Page() {
  return (
    <React.Fragment>
      <HeroSection />
      <ValuePropsSection />
      <RoomsSection />
      <TestimonialsSection />
    </React.Fragment>
  );
}