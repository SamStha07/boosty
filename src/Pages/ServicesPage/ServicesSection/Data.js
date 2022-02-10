import verticalLine from '../../../assests/images/servicesPage/verticalSlider.svg';
import verticalLine2 from '../../../assests/images/servicesPage/designVerticalSlider.svg';
import motorImg from '../../../assests/images/servicesPage/motor.svg';
import telephoneImg from '../../../assests/images/servicesPage/phone.svg';

export const engineeringData = {
  id: '01',
  title: 'Engineering',
  titleIntro:
    'From the research stage, to testing and product launch,our track record of successfully delivering digital products speaks for itself.',
  body_title: 'Full-cycle product development',
  body_desc:
    'Although our expertise lies in fintech, blockchain and cloud, we are constantly looking for new ways to apply blockchain, fintech and cloud technologies. Our explorations has led us to building a marketplace for the agricultural industry, or a long term apartment renting platform for a NYC real estate firm. Therefore, even if you are not in the fintech, blockchain or cloud storage space, this will not prevent from providing you with an awesome digital solution.',
  body_imageLeft: verticalLine,
  body_imageRight: motorImg,
};

export const designData = {
  id: '02',
  title: 'Design',
  titleIntro:
    'Although Boosty is known as an engineering firm, we have a team of industry award winning designers. These creative geniuses continue to inspire us with their masterpieces.',
  body_title: 'Our areas od design',
  body_desc: [
    'Product design',
    'Website Design',
    'App Design',
    'UI/UX Design',
    'Branding',
  ],
  body_imageLeft: verticalLine2,
  body_right:
    'Let our award winning designers build products that will accelerate the growth of your business.',
};

export const consultingData = {
  id: '03',
  title: 'Consulting',
  titleIntro:
    'As your adviser, Boosty guides you through all stages of the process - from design to product delivery.',
  body_desc:
    'As a startup ourselves, we have been through it all. Startups will not only benefit from our market leading software solutions, but also our coaching. Starting from the bottom and working our way into becoming an industry leader, our position gives us unique insights into your needs. We are fully committed to accelerating the growth of your startup.',
  body_imageLeft: null,
  body_imageRight: telephoneImg,
};
