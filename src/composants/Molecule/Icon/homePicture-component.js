import React from 'react';
import { useSelector } from 'react-redux';
import homeIcon from './../../../ressources/home-1-svgrepo-com.svg';
import homeIconNight from './../../../ressources/homeIcon_night.svg';

import './icons.style.css';

function HomeIcon({id=""}) {
    let theme = useSelector(store => store.user.configuration.theme)
    return (
        <div id={id} className='w-[50px] icon-home-navBar'>
         {theme === 'day' ? <img src={homeIcon} alt="Icon for login" /> : <img src={homeIconNight} alt="Icon for login" />}   
        </div>
    )
}

export default HomeIcon;