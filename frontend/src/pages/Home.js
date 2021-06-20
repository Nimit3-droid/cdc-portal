import React from 'react';
import HeroSection from '../components/herosection1';
import AboutUs from '../components/AboutUs/AboutUs';
import CarouselNewsWrapper from '../components/CarouselNewsWrapper/CarouselRecentNews';
import MediaControlCard from '../components/DirectorMessage/DirectorMessage';
import PastRecruiters from '../components/PastRecruiters/PastRecruiters';
import AlumniTestimonial from '../components/AlumniTestimonial/NewAlumni';
import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.aboutusWrapper}>
      <>
        <HeroSection />
      </>
      <>
        <AboutUs />
      </>
      <>
        <MediaControlCard />
      </>
      <div>
        <CarouselNewsWrapper />
      </div>
      <div>
        <PastRecruiters />
      </div>
      <div>
        <AlumniTestimonial />
      </div>
    </div>
  );
}

export default Home;
