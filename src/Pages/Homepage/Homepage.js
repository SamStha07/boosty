import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection/HeroSection';
import CompanySolutions from './CompanySolutions/CompanySolutions';
import CompanyIntro from './CompanyIntro/CompanyIntro';
import Services from './Services/Services';
import Members from './Members/Members';
import Testimonials from './Testimonials/Testimonials';
import AwardsAndPartners from './AwardsAndPartners/AwardsAndPartners';
import HeaderOpenSection from '../../Components/HeaderOpenSection/HeaderOpenSection';
import Contacts from './Contacts/Contacts';

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const closeBtnHandler = (data) => setOpen(data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {open ? (
        <HeaderOpenSection open={open} closeBtnHandler={closeBtnHandler} />
      ) : (
        <>
          {/* landing section */}
          <HeroSection open={open} handleOpen={handleOpen} />
          {/* Who we are section */}
          <CompanyIntro />
          {/* What sets us apart */}
          <CompanySolutions />
          {/* Our services */}
          <Services />
          {/* TeamMembers */}
          <Members />
          {/* Testimonials */}
          <Testimonials />
          {/* awards and partners */}
          <AwardsAndPartners />
          {/* contacts */}
          <Contacts />
        </>
      )}
    </>
  );
};

export default Homepage;
