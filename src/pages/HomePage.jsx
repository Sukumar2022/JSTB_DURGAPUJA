import React from 'react'
import HomeSection from '../component/HeroSection'
import AboutAndCountdown from '../component/AboutAndCountdown'
import PujaSchedule from '../component/PujaSchedule'
import MomentsOfPuja from '../component/MomentsOfPuja'
import PujaGallery from './PujaGallery'
const HomePage = () => {
  return (
    <>
        <HomeSection/>
        <AboutAndCountdown/>
        <PujaSchedule/>
        <MomentsOfPuja/>
    </>
  )
}

export default HomePage