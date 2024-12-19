import React from 'react';
import {useState, useEffect} from 'react';
import MainPageAboutMe from "./MainPageAboutMe";
import MainPageSelection from "./MainPageSelection";
import MainPageTop from "./MainPageTop";
import Header from "../Header";
import Loading from '../Loading';
import ContactMe from '../ContactMe';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

function MainPage() {

  const [isLoaded, setLoaded] = useState(false);
  const [hasFinished, setFinished] = useState(false);

  const loadAnimation = () => {
    setFinished(true);
  }

  const interval = setInterval(loadAnimation, 3000, []);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setLoaded(true);
      console.log('page loaded');
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
      clearInterval(interval);
    } else {
      window.addEventListener('load', onPageLoad, false);
      setFinished(false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    isLoaded && hasFinished ? 
    <div className='all'>
      <Header />
      <MainPageTop/>
      <MainPageAboutMe/>
      <MainPageSelection/> 
      <ContactMe/>
    </div> : 
    <>
      <Loading setFinished = {setFinished}/>
    </>
  )
}

export default MainPage;