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
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={epp1} className='epp1'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Obstacle detection and color sensing robot</p>
            <p className='proj-details'>Oct - Nov 2023</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={epp2} className='epp2'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Room mapping remote controlled robot</p>
            <p className='proj-details'>Feb - Apr 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={turtlebot} className='turtlebot'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Autonomous navigation robot</p>
            <p className='proj-details'>Jan - Apr 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={psa} className='psa'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Efficient routing algorithm with displayed UI</p>
            <p className='proj-details'>Oct 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={ideate} className='ideate'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Autonomous aircon temperature regulator device</p>
            <p className='proj-details'>Aug - Sept 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={orbital} className='orbital'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Forum with mini trivia game website</p>
            <p className='proj-details'>May - Aug 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={rtos} className='rtos'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Realtime operating system remote controlled robot</p>
            <p className='proj-details'>Sept - Nov 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={wiagi} className='wiagi'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Command line interface finaincial tracker app</p>
            <p className='proj-details'>Sept - Nov 2024</p>
          </div>
        </div>
        <div className='proj-one-grid'>
          <div className='proj-container'>
            <img src={rpg} className='rpg'></img>
            <div className='blur'></div>
          </div>
          <div className='proj-title-container'>
            <p className='proj-title'>Treasure hunting RPG game</p>
            <p className='proj-details'>Dec 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjBody;