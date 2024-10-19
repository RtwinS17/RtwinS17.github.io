import React from "react";
import { Link } from 'react-router-dom';
import './navBarDesktop.style.css';


export const NavBarDesktop = () => {
   

    return (
        <nav className='relative navBarDesk-container bg-white bg-opacity-25 mt-6 flex p-4 md:flex-row justify-around z-20'>
        <Link to="/">
        <div className='items-center hover:text-orange-500'>
          Accueil
        </div>
        </Link>
        <div className='border-r border-Bleufonce self-stretch'></div>
        <Link to="/discover/programmation">
        <div className='items-center hover:text-orange-500'>
          Programmation
        </div>
        </Link>
        <div className='border-r border-Bleufonce self-stretch'></div>
      
        
      <Link to="/billetterie">
        <div className='flex h-full items-center hover:text-orange-500'>
          Billetterie
        </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>
        
      <Link to="/map">
        <div className='flex h-full items-center hover:text-orange-500'>
          Plan
        </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>

      <Link to="/infos-pratiques">
        <div className='flex h-full items-center hover:text-orange-500'>
          Infos Pratiques
        </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>
      
      <Link to="/partenaires">
        <div className='flex h-full items-center hover:text-orange-500'>
          Partenaires
        </div>
      </Link>
          
        </nav>
    );
}


