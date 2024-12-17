import React from 'react';
import {useState, useEffect} from 'react';
import MainPageAboutMe from "./MainPageAboutMe";
import MainPageSelection from "./MainPageSelection";
import MainPageTop from "./MainPageTop";
import Loading from './Loading';
import MainPageContactMe from './MainPageContactMe';

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
      <MainPageTop/>
      <MainPageAboutMe/>
      <MainPageSelection/> 
      <MainPageContactMe/>
    </div> : 
    <>
      <Loading setFinished = {setFinished}/>
    </>
  )
}

export default MainPage;