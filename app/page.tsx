import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropsSection from '../components/ValuePropsSection';
import RoomsSection from '../components/RoomsSection';
import SpecialGroupsSection from '../components/SpecialGroupsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Page() {
  return (
    <React.Fragment>
      <HeroSection />
      <ValuePropsSection />
      <RoomsSection />
      <SpecialGroupsSection />
      <TestimonialsSection />
    </React.Fragment>
  );
}