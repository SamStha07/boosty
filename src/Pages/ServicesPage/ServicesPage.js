import React, { useEffect, useState } from 'react';
import HeaderOpenSection from '../../Components/HeaderOpenSection/HeaderOpenSection';
import LetsTalk from '../../Components/LetsTalk/LetsTalk';
import HeroSection from './HeroSection/HeroSection';
import OurProductsSection from './OurProductsSection/OurProductsSection';
import ServicesSection from './ServicesSection/ServicesSection';

const ServicesPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const closeBtnHandler = (data) => setOpen(data);
  return (
    <>
      {open ? (
        <HeaderOpenSection open={open} closeBtnHandler={closeBtnHandler} />
      ) : (
        <>
          {/* Hero section */}
          <HeroSection open={open} handleOpen={handleOpen} />
          {/* Services section */}
          <ServicesSection />

          {/* our products section */}
          <OurProductsSection />

          <LetsTalk />
        </>
      )}
    </>
  );
};

export default ServicesPage;
