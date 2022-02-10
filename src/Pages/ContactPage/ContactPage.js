import React, { useEffect, useState } from 'react';
import HeaderOpenSection from '../../Components/HeaderOpenSection/HeaderOpenSection';
import HeroSection from './HeroSection/HeroSection';

function ContactPage() {
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
          <HeroSection open={open} handleOpen={handleOpen} />
        </>
      )}
    </>
  );
}

export default ContactPage;
