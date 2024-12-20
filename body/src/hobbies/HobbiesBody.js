import './HobbiesBody.css';
import phone from './phone.png';
import bouldering from './bouldering.jpg';
import singing from './singing.png';
import softball from './softball.jpg';
import react from 'react';
import { useState, useEffect, useRef } from 'react';
import archive from './archive.svg';
import football from './football.jpg';
import back from './return.png';

function HobbiesBody() {

  const [isArchive, setArchive] = useState(false);
  const [swipeNumber, setSwipeNumber] = useState(0);
  let swipePictures = document.querySelectorAll('.picture');
  let swipeTexts = document.querySelectorAll('.text');
  let archiveText = document.querySelector('.archive-text');
  let archiveIcon = document.querySelector('.archive-logo');
  let backIcon = document.querySelector('.back-logo');

  const clickArchive = () => {
    if (isArchive) {
      archiveText.classList.remove('appear');
      archiveIcon.classList.add('appear');
      backIcon.classList.remove('appear')
    } else {
      archiveText.classList.add('appear');
      backIcon.classList.add('appear');
      archiveIcon.classList.remove('appear')
    }
    setArchive(isArchive => !isArchive);
    setSwipeNumber(0);
  } 

  const swipeLeft = () => {
    if (swipeNumber == 0) {
      return;
    }
    swipePictures[swipeNumber - 1].classList.remove('swiped-picture');
    swipeTexts[swipeNumber - 1].classList.remove('swiped-text');
    setSwipeNumber(swipeNumber => swipeNumber - 1);
  }

  const swipeRight = () => {
    if (swipeNumber >= 2) {
      return;
    }
    swipePictures[swipeNumber].classList.add('swiped-picture');
    swipeTexts[swipeNumber].classList.add('swiped-text');
    setSwipeNumber(swipeNumber => swipeNumber + 1);
  }

  useEffect(() => {
    swipePictures = document.querySelectorAll('.picture');
    swipeTexts = document.querySelectorAll('.text');
    archiveText = document.querySelector('.archive-text');
    archiveIcon = document.querySelector('.archive-logo');
    backIcon = document.querySelector('.back-logo');
  }, [isArchive])

  return (
    <div>
      <div className='phone-image-container'>
        <img src={phone} className='phone-image'></img>
        <div className='contents-container'>
          <div className='gram-header'>
            <span className='gram-logo'>nigelgram</span>
            <span className='archive-text grey-text'>Archive</span>
            <div className='corner-icon'>
            <img src={back} className='back-logo' onClick={clickArchive}></img>
            <img src={archive} className='appear archive-logo' onClick={clickArchive}></img>
            </div>
          </div>
          { isArchive ? <>
          <div className='gram-body-container'>
            <div className='gram-image-container'>
              <div className='picture football grey-out'>
                <img src={football} className='football blend'></img>
              </div>
            </div>
            <div className='gram-text'>
              <div className='grey-text text bouldering'>
                <strong>Football.</strong>
                <p>
                  Football is one of the only sports that I have consistently keep up with the news. I have watched football all my life 
                  and in Junior College I decided to finally give it a try on a more serious note. I played for 2 years as a Center Back 
                  and though I still love football deeply, I realise that this sport isn't the one for me and I enjoyed it more as a spectator.
                </p>
              </div>
            </div>
          </div>
          </> : <>
          <div className='gram-body-container'>
            <div className='gram-image-container'>
              <div className='picture bouldering filler'>
                <img src={bouldering} className='bouldering'></img>
              </div>
              <div className='picture singing filler'>
                <img src={singing} className='singing'></img>
              </div>
              <div className='picture softball filler'>
                <img src={softball} className='softball'></img>
              </div>
            </div>
            <div className='gram-text'>
              <div className='button-container'>
                <button className='change' onClick={swipeLeft}>
                  <span>&lt;</span>
                </button>
                <button className='change' onClick={swipeRight}>
                  <span>&gt;</span>
                </button>
              </div>
              <div className='text bouldering'>
                <strong>Bouldering.</strong>
                <p>
                  First picked up bouldering back in 2021 and have been been casually bouldering ever since.
                  I saw bouldering as a challenge at first due to my fear of heights but with time, I overcame
                  this phobia and now it is a really fun activity that I do with friends. I enjoy the rigor and 
                  problem solving aspect of this sport which challenges me each time.
                </p>
              </div>
              <div className='text singing'>
                <strong>Singing.</strong>
                <p>
                  I have been singing as far as I could remember. I use to always sing at home to the radio as a
                  kid and it has been a major form of stress relief for me. After enrolling in university, I 
                  formed a band with my friends and we have jam sessions every now and then. Singing has been a 
                  huge part of my life and something I hope to continue for years to come.
                </p>
              </div>
              <div className='text softball'>
                <strong>Softball.</strong>
                <p>
                  I started to pick up softball seriously shortly after national service as it was one of the 
                  sports that has always intridged me. From there I found myself a club and learnt all my basics 
                  and fundamentals there. I have since fell in love with the sport and play for the Diamond Warriors, 
                  actively participating in tournaments and competitions.
                </p>
              </div>
            </div>
          </div>
          </>}
        </div>
      </div>
    </div>
  )
}

export default HobbiesBody;