import './MainPageContactMe.css';
import github from './github.svg';
import mail from './mail.png';

function MainPageContactMe() {
  return (
    <div className='contact-me-container'>
      <p className='lets-connect'> LET'S CONNECT </p>
      <div className='contact-container'>
        <div className='contact'>
          <img src={github} className='github'></img>
        </div>
        <div className='contact'>
        </div>
        <div className='contact contact-mail'>
          <img src={mail} className='mail'></img>
          <p className='mail-text'>nigelyeotongwei@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default MainPageContactMe;