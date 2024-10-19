
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBarMobile.style.css';
import BurgerIcon from '../../../Molecule/Icon/burgerIcon-component';
import FacebookIcon from '../../../Molecule/Icon/fbIcon-component';
import TwitterIcon from '../../../Molecule/Icon/xIcon-component';
import InstagramIcon from '../../../Molecule/Icon/instIcon-component';
import XIcon from '../../../Molecule/Icon/closeMobNavbarIcon-component';

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
    {isMenuOpen ? <div className='absolute h-full w-full z-20 bg-black opacity-95' onClick={() => closeMenu()}></div> : ''}
    
      <div className='fixed flex justify-end w-[90%] pointer-events-none h-[50px] top-5 left-4 z-10'>
        
    
        <div onClick={toggleMenu}>
          <BurgerIcon />
        </div>
      </div>
      <div className={`flex flex-col text-white fixed top-0 right-0 h-full ${isMenuOpen ? 'w-[70%]' : 'w-0'} z-50 transition-width rounded-l-3xl duration-500 ease-in-out navBarMob`}>
          <ul className='navBarMob-li  '>
          <li><Link onClick={() => closeMenu()} to="/">Accueil</Link></li>
          <li><Link onClick={() => closeMenu()} to="/billetterie">Billeterie</Link></li>
          <li><Link onClick={() => closeMenu()} to="/discover/programmation">Programmation</Link></li>
          <li><Link onClick={() => closeMenu()} to="/map">Carte</Link></li>
          <li><Link onClick={() => closeMenu()} to="/infos-pratiques">Infos pratiques</Link></li>
          <li><Link onClick={() => closeMenu()} to="/partenaires">Partenaires</Link></li>
        </ul>
        <div className='flex flex-row gap-x-6 mx-auto'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <div onClick={toggleMenu} className='flex justify-end w-full p-10'>
          <XIcon />
        </div>


      </div>
    </>
  )
}

export default NavBarMobile;
