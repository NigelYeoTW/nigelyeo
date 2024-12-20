import './Header.css';
import logo from './logo.png';

function Header() {

  const scrollBottom = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }

  return (
    <div className = "header">
      <div className='main-logo-container'>
        <img src={logo} className="logo"></img>
        <div className="beside-logo">
          <span className="my-name">Nigel Yeo's</span>
          <span className='below-name'>Personal Profile</span>
        </div>
      </div>
      <div className='menu'>
        <span className='menu-item'>Home</span>
      </div>
      <div className='menu'>
        <span className='menu-item'>Projects</span>
      </div>
      <div className='menu'>
        <span className='menu-item'>Experience</span>
      </div>
      <div className='menu'>
        <span className='menu-item'>Hobbies</span>
      </div>
      <div className='menu'>
        <div className='contact-button-container' onClick={scrollBottom}>
          <button className='contact-button' onClick={scrollBottom}> 
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;