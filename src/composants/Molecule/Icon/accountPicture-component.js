import React from 'react';
import { useSelector } from 'react-redux';
import accountLog from './../../../ressources/account-svgrepo-com.svg';
import accountLogNight from './../../../ressources/accountIcon_night.svg';

import './icons.style.css';

function AccountIcon({id=""}) {
  let theme = useSelector(store => store.user.configuration.theme)
  // Import result is the URL of your image
  return (
    <div id={id} className='icon-user-logIn w-[50px] btn-secondary pointer-events-auto'>
      {theme === 'day' ? <img src={accountLog} alt="Icon for login" /> : <img src={accountLogNight} alt="Icon for login" />  }  
    </div>
  )
}

export default AccountIcon;