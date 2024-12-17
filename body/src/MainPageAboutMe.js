import './MainPageAboutMe.css';
import me from './about-me-me.jpg';

function MainPageAboutMe() {
  return (
    <div className="about-me">
      <div className="intro">
        <div className='intro-text'>
          <p className='about-me'> ABOUT ME</p>
          <p className='about-me-text'> Hi there! I am Nigel, studying a Computer Engineering Degree in National University of Singapore. Ever since my enrolment in university, I have had many interest and is amidst discovering them. As of right now, I have deep interest in the field of <strong>Frontend Engineering</strong>, <strong>Robotics</strong> and <strong>Artificial Intellegence</strong>. I believe strongly in giving everything a try as well as absorbing as much knowledge as I can. Find out more about me as well as what happens in my day to day life below!</p>
        </div>
      </div>
      <div className='image-me'>
        <img src={me} className='intro-me'></img>
      </div>
    </div>
  )
}

export default MainPageAboutMe;