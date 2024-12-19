import './Header.css';
import logo from './logo.png';

function Header() {

  const scrollBottom = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }

  return (
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
  )
}

export default Header;