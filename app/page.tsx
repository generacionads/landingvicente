import React from 'react';
import HeroSection from '../components/HeroSection';
import ValentineHeroSection from '../components/ValentineHeroSection';
import ValuePropsSection from '../components/ValuePropsSection';
import RoomsSection from '../components/RoomsSection';
import SpecialGroupsSection from '../components/SpecialGroupsSection';
import GiftCardSection from '../components/GiftCardSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Page() {
  return (
    <React.Fragment>
      <ValentineHeroSection />
      <HeroSection />
      <ValuePropsSection />
      <RoomsSection />
      <SpecialGroupsSection />
      <GiftCardSection />
      <TestimonialsSection />
    </React.Fragment>
  );
}