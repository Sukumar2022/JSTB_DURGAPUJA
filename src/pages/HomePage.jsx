import React from 'react'
import HomeSection from '../component/HeroSection'
import AboutAndCountdown from '../component/AboutAndCountdown'
import PujaSchedule from '../component/PujaSchedule'
import MomentsOfPuja from '../component/MomentsOfPuja'
import PujaGallery from './PujaGallery'
import MovingBanner from '../component/MovingBanner'
const HomePage = () => {
  return (
    <>
        <HomeSection/>
        <AboutAndCountdown/>
        <MovingBanner/>
        <PujaSchedule/>
        <MomentsOfPuja/>
    </>
  )
}

export default HomePage