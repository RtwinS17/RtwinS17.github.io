import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import homeLogo from "./../../../ressources/Nation-sounds_1.png";
import "./icons.style.css";

function HomeLogo() {
  return (
    <div className="absolute flex w-full justify-center top-10 sm:top-10 z-10">
      <div className="">
        {/* Utilisation de Link pour faire du logo un lien vers la page d'accueil */}
        <Link to="/">
          <img 
            src={homeLogo} 
            alt="Logo Nation Sounds" 
            className="w-[45%] h-[65%] sm:w-[30%] rounded-2xl mx-auto cursor-pointer" 
          />
        </Link>
      </div>
    </div>
  );
}

export default HomeLogo;
