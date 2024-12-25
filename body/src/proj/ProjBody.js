import './ProjBody.css';
import epp1 from './epp1.jpg';
import epp2 from './epp2.jpg';
import turtlebot from './turtlebot.jpg';
import psa from './psa.png';
import ideate from './ideate.jpg';
import orbital from './orbital.png';
import rtos from './rtos.png';
import wiagi from './wiagi.png';
import rpg from './rpg.png';

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
        <div className='proj-container'>
          <img src={psa} className='psa'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={ideate} className='ideate'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={orbital} className='orbital'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={rtos} className='rtos'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={wiagi} className='wiagi'></img>
          <div className='blur'></div>
        </div>
        <div className='proj-container'>
          <img src={rpg} className='rpg'></img>
          <div className='blur'></div>
        </div>
      </div>
    </div>
  )
}

export default ProjBody;