import './MainPageTop.css';
import me from './me.png';
import speechBubble from './speech-bubble.png';
import downArrow from './icon-arrow-down.svg';

function MainPageTop() {

  return (
    <div className="mainpage"> 
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