import React from 'react';
import lightIcon from './../../../ressources/lightMode.svg';
import './icons.style.css';

export function LightIcon({id=""}) {
    // Import result is the URL of your image
    return (
        <div id={id} className='theme-icons'>
            <img src={lightIcon} alt="Icon for light Mode" />
        </div>
    )
}