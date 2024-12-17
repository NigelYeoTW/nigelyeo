import './MainPageTop.css';
import logo from './logo.png';
import me from './me.png';
import downArrow from './icon-arrow-down.svg';
import speechBubble from './speech-bubble.png';

function MainPageTop() {

  const scrollBottom = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }

  return (
    <div className="mainpage">
      <div className = "header">
        <img src={logo} className="logo"></img>
        <div className="beside-logo">
          <span className="my-name">Nigel Yeo's</span>
          <span className='below-name'>Personal Profile</span>
        </div>
        <div className='contact-button-container' onClick={scrollBottom}>
          <button className='contact-button' onClick={scrollBottom}> 
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero">
        <div className='crop-box'>
          <img src={me} className="me"></img>
        </div>
        <div className="quotation-container">
          <span className='quotation-open'>“</span>
          <span className='quote'>Take every opportunity that presents itself to you and give it your best.</span>
          <span className='quotation-close'>”</span>
        </div>
        {/* <div className='speech-bubble-container'>
          <img src={speechBubble} className="speech-bubble"></img>
          <span className='speech'>Hi there! I'm Nigel.</span>
        </div> */}
        <div className='intro-container'>
          <span className='descriptors'>Curious . Creative . Critical . Curious . Creative . Critical . Curious . Creative . Critical . Curious . Creative . Critical .</span>
        </div>
      </div>
      <div className='circle'></div>
      <img src={downArrow} className='down-arrow'></img>
    </div>
  )
}

export default MainPageTop;