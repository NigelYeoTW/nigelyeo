import './ExpAwardsBody.css';
import react from 'react';
import { useEffect, useState } from 'react';
import sestoOne from './sesto-one.jpg';
import sestoTwo from './sesto-two.jpg';
import psaOne from './psa-one.jpg';
import psaTwo from './psa-two.jpg';
import ideateOne from './ideate-one.jpg';
import ideateTwo from './ideate-two.jpg';
import ros from './ros.svg';
import cpp from './cpp.svg';
import js from './js.svg';
import css from './css.svg';
import python from './python.svg';
import html from './html.svg';
import vue from './vue.svg';
import downArrow from './downArrow.svg';

function ExpAwardsBody() {

  const [maxHeight1, setMaxHeight1] = useState(0);
  const [maxHeight2, setMaxHeight2] = useState(0);
  const [maxHeight3, setMaxHeight3] = useState(0);


  const displayContent1 = () => {
    var coll = document.querySelector('.collapsable1');
    coll.classList.add("display");
    if (maxHeight1 == 0) {
      setMaxHeight1(maxHeight1 => coll.scrollHeight);
    } else {
      setMaxHeight1(maxHeight1 => 0);
    }
  }

  const displayContent2 = () => {
    var coll = document.querySelector('.collapsable2');
    coll.classList.add("display");
    if (maxHeight2 == 0) {
      setMaxHeight2(maxHeight2 => coll.scrollHeight);
    } else {
      setMaxHeight2(maxHeight2 => 0);
    }
  }

  const displayContent3 = () => {
    var coll = document.querySelector('.collapsable3');
    coll.classList.add("display");
    if (maxHeight3 == 0) {
      setMaxHeight3(maxHeight1 => coll.scrollHeight);
    } else {
      setMaxHeight3(maxHeight1 => 0);
    }
  }

  return (
    <div className="exp-awards-body">
      <span className='category'>Experience</span>
      <div className='exp-awards-container'>
        <div className='exp-awards-header'>
          <div className='exp-awards-summary'>
            <strong className='title'>Robotics Engineer, National University Singapore, EDIC</strong>
            <p className='role'>Team Lead, May 2024 - Aug 2024</p>
          </div>
          <div className="down-arrow-container">
            <img src={downArrow} className="down" onClick={displayContent1}></img>
          </div>
        </div>
        <div className='dividor'></div>
        <div className='collapsable1' style={{maxHeight: maxHeight1 ? maxHeight1 : 0}}>
        <div className='experience-grid'>
          <div className='experience-text'>
            <div className='written'>
              <p className='description'>
                <ul>
                  <li>Work with the SESTO Magnus Lite and SESTO Magnus industrial robots to carry out manual task around the hub such as transportation of equipment</li>
                  <li>Liason with team and SESTO engineers to troubleshoot robots</li>
                  <li>Integrate external microcontrollers such as ESP32 to the SESTO local network</li>
                  <li>Enable call systems to the SESTO robots from various locations in the hub</li>
                </ul>
              </p>
              <div className='skills'>
                <img src={ros}></img>
                <img src={python}></img>
                <img src={cpp}></img>
              </div>
            </div>
            <div className='experience-pic-container'>
              <div className='experience-pic-one'>
                <img src={sestoOne} className='sesto-one'></img>
              </div>
              <div className='experience-pic-two'>
                <img src={sestoTwo} className='sesto-two'></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <span className='category'>Awards</span>
      <div className='exp-awards-container'>
        <div className='exp-awards-header'>
          <div className='exp-awards-summary'>
            <strong className='title'>PSA CodeSprint Finalist, 5-8th place out of 92 teams</strong>
            <p className='role'>2024</p>
          </div>
          <div className="down-arrow-container">
            <img src={downArrow} className="down" onClick={displayContent2}></img>
          </div>
        </div>
        <div className='dividor'></div>
        <div className='collapsable2' style={{maxHeight: maxHeight2 ? maxHeight2 : 0}}>
        <div className='experience-grid'>
          <div className='experience-text'>
            <div className='written'>
              <p className='description'>
                <ul>
                  <li>Route and cargo optimisation through the usage of dijkstra and genetic algorithm</li>
                  <li>Real time responsiveness of algorithm to reroute cargo at transit ports to allow least delay</li>
                  <li>Creation of UI pages for admin to monitor ship statuses and for ships to be notified of instructions and changes</li>
                </ul>
              </p>
              <div className='skills'>
                <img src={html}></img>
                <img src={css}></img>
                <img src={js}></img>
                <img src={vue}></img>
                <img src={python}></img>
              </div>
            </div>
            <div className='experience-pic-container'>
              <div className='experience-pic-one'>
                <img src={psaOne} className='psa-one'></img>
              </div>
              <div className='experience-pic-two'>
                <img src={psaTwo} className='psa-two'></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='exp-awards-container'>
        <div className='exp-awards-header'>
          <div className='exp-awards-summary'>
            <strong className='title'>Ideate Hackathon Finalist, 1st Runner Up</strong>
            <p className='role'>2024</p>
          </div>
          <div className="down-arrow-container">
            <img src={downArrow} className="down" onClick={displayContent3}></img>
          </div>
        </div>
        <div className='dividor'></div>
        <div className='collapsable3' style={{maxHeight: maxHeight3 ? maxHeight3 : 0}}>
        <div className='experience-grid'>
          <div className='experience-text'>
            <div className='written'>
              <p className='description'>
                <ul>
                  <li>Proof of concept of a autonomous temperature reading wearable that controls the household airconditioning and calibrates it to the user</li>
                  <li>Computation of data through ESP32</li>
                  <li>Communication to other IoT devices through ESP32 bluetooth and infrared sensors</li>
                  <li>Creation of a WEB-BLE to configure wearable device seamlessly and easily</li>
                </ul>
              </p>
              <div className='skills'>
                <img src={cpp}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={js}></img>
              </div>
            </div>
            <div className='experience-pic-container'>
              <div className='experience-pic-one'>
                <img src={ideateOne} className='ideate-one'></img>
              </div>
              <div className='experience-pic-two'>
                <img src={ideateTwo} className='ideate-two'></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ExpAwardsBody;