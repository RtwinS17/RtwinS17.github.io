import React from 'react';
import darkIcon from './../../../ressources/darkMode.svg';
import './icons.style.css';

export function DarkIcon({id=""}) {
    // Import result is the URL of your image
    return (
        <div id={id} className='theme-icons'>
            <img src={darkIcon} alt="Icon for dark Mode" />
        </div>
    )
}