import './HobbiesBody.css';
import phone from './phone.png';
import bouldering from './bouldering.jpg';
import singing from './singing.png';
import softball from './softball.jpg';

function HobbiesBody() {
  return (
    <div>
      <div className='phone-image-container'>
        <img src={phone} className='phone-image'></img>
        <div className='contents-container'>
          <span className='gram-logo'>nigelgram</span>
          <div className='gram-body-container'>
            <div className='gram-image-container'>
              <img src={bouldering} className='bouldering'></img>
              <div className='singing filler'>
                <img src={singing} className='singing'></img>
              </div>
              <img src={softball} className='softball'></img>
            </div>
            <div className='gram-text'>
              <div className='button-container'>
                <button className='change'>
                  <span>&lt;</span>
                </button>
                <button className='change'>
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
        </div>
      </div>
    </div>
  )
}

export default HobbiesBody;