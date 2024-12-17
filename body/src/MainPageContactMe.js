import './MainPageContactMe.css';
import github from './github.svg';
import mail from './mail.png';
import tele from './tele.svg';

function MainPageContactMe() {

  const copyToClipboardMail = () => {
    navigator.clipboard.writeText("nigelyeotongwei@gmail.com");
  }

  const copyToClipboardTele = () => {
    navigator.clipboard.writeText("@nigelyeo");
  }

  const openGithub = () => {
    window.open('https://github.com/NigelYeoTW').focus();
  }

  return (
    <div className='contact-me-container'>
      <p className='lets-connect'> LET'S CONNECT </p>
      <div className='contact-container'>
        <div className='contact' onClick={openGithub}>
          <img src={github} className='github'></img>
        </div>
        <div className='contact contact-tele' onClick={copyToClipboardTele}>
          <img src={tele} className='tele'></img>
          <p className='tele-text'>@nigelyeo</p>
        </div>
        <div className='contact contact-mail' onClick={copyToClipboardMail}>
          <img src={mail} className='mail'></img>
          <p className='mail-text'>nigelyeotongwei@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default MainPageContactMe;