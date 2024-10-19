import React from 'react';
import { useSelector } from 'react-redux';
import burgerIcon from './../../../ressources/burger-menu-svgrepo-com.svg';
import burgerIconNight from './../../../ressources/burgerIcon_night.svg';
import './icons.style.css';

function BurgerIcon({id="", size="50px"}) {
  let theme = useSelector(store => store.user.configuration.theme)

  return (
    <div id={id} className={`w-[${size}] pointer-events-auto`}>
     {theme === "day" ? <img src={burgerIcon} alt="Icon for menu" /> : <img src={burgerIconNight} alt="Icon for menu" />} 
    </div>
  )
}

export default BurgerIcon;