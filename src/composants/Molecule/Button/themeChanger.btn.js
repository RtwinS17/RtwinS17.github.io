import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DarkIcon } from "../Icon/lightModeIcon.component";
import { LightIcon } from "../Icon/darkModeIcon.component";

import './themeChanger.btn.style.css';
import { switchTheme } from "../../../appStore/slices/user.slice";

export const ThemeBtn = () => {
  const dispatch = useDispatch()
  const theme = useSelector((store) => store.user.configuration.theme)
    return (
    <>
    <button className="btn-accent theme-btn fixed top-5 left-4 z-[20]" onClick={() => dispatch(switchTheme())}>
      {theme === 'day' ? <DarkIcon id="darkIcon-id"/> : <LightIcon id="lightIcon-id"/> }
    </button>
  
    </>
)
}