import './MainPage.css';
import logo from './logo.png';
import me from './me.png';
import downArrow from './icon-arrow-down.svg';

function MainPage() {
  return (
    <div className="mainpage">
      <div className = "header">
        <img src={logo} className="logo"></img>
        <div className="beside-logo">
          <span className="my-name">Nigel Yeo's</span>
          <span className='below-name'>Personal Profile</span>
        </div>
      </div>
      <div className="hero">
        <div className='crop-box'>
          <img src={me} className="me"></img>
        </div>
        <div className='intro-container'>
          <span className='descriptors'>Curious . Creative . Critical . Curious . Creative . Critical . Curious . Creative . Critical . Curious . Creative . Critical .</span>
        </div>
      </div>
      <div className='circle'></div>
      <img src={downArrow} className='down-arrow'></img>
    </div>
  )
}

export default MainPage;