import './Header.css';
import logo from './logo.png';
import react from 'react';
import { Link } from 'react-router-dom';

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
        <Link to='/'>
        <span className='menu-item'>Home</span>
        </Link>
      </div>
      <div className='menu'>
        <Link to='/Projects'>
        <span className='menu-item'>Projects</span>
        </Link>
      </div>
      <div className='menu'>
        <Link to='/ExpAwards'>
        <span className='menu-item'>Experience</span>
        </Link>
      </div>
      <div className='menu'>
        <Link to='/Hobbies'>
        <span className='menu-item'>Hobbies</span>
        </Link>
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