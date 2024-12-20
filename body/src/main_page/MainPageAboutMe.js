import './MainPageAboutMe.css';
import me from './about-me-me.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import react from 'react';
import { useRef, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function MainPageAboutMe() {

  const refText = useRef();
  useEffect(() => {
      const el = refText.current;
      gsap.fromTo(el, { xPercent: -100, opacity: 0 }, {
          xPercent: 0, opacity: 1, scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'top top',
              scrub: true 
          }
      })
  }, [])

  const refImage = useRef();
  
  useEffect(() => {
      const el = refImage.current;
      gsap.fromTo(el, { xPercent: 100, opacity: 0 }, {
          xPercent: 0, opacity: 1, scrollTrigger: {
              trigger: el,
              start: '40 bottom',
              end: '60 70',
              scrub: true 
          }
      }, '<')
  }, [])

  return (
    <div className="about-me">
      <div ref={refText} className="intro">
        <div className='intro-text'>
          <p className='about-me'> ABOUT ME</p>
          <p className='about-me-text'> Hi there! I am Nigel, studying a Computer Engineering Degree in National University of Singapore. Ever since my enrolment in university, I have had many interest and is amidst discovering them. As of right now, I have deep interest in the field of <strong>Frontend Engineering</strong>, <strong>Robotics</strong> and <strong>Artificial Intellegence</strong>. I believe strongly in giving everything a try as well as absorbing as much knowledge as I can. Find out more about me as well as what happens in my day to day life below!</p>
        </div>
      </div>
      <div ref={refImage} className='image-me'>
        <img src={me} className='intro-me'></img>
      </div>
    </div>
  )
}

export default MainPageAboutMe;