import './ProjBody.css';
import epp1 from './epp1.jpg';
import epp2 from './epp2.jpg';
import turtlebot from './turtlebot.jpg';

function ProjBody() {
  return (
    <div className='proj-overall'>
      {/* <div className='overlay'>
        <strong className='proj-title'>project project project project project project project project</strong>
        <strong className='proj-title'>project project project project project project project project</strong>
        <strong className='proj-title'>project project project project project project project project</strong>
        <strong className='proj-title'>project project project project project project project project</strong>
        <strong className='proj-title'>project project project project project project project project</strong>
        <strong className='proj-title'>project project project project project project project project</strong>
      </div> */}
      <div className="proj-grid">
        <div className='proj-container'>
          <img src={epp1} className='epp1'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={epp2} className='epp2'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={turtlebot} className='turtlebot'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'></div>
        <div className='proj-container'></div>
        <div className='proj-container'></div>
        <div className='proj-container'></div>
        <div className='proj-container'></div>
        <div className='proj-container'></div>
      </div>
    </div>
  )
}

export default ProjBody;