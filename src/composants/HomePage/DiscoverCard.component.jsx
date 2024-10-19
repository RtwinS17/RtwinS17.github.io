import React from "react";
import { Link } from "react-router-dom";
import './DiscoverCard.style.css';

export const DiscoverCards = ({ title = "Titre à ajouter", linkText = "En savoir plus", imageSrc = "", linkTo = "" }) => {
    return (
        <div className="cardDiscover-container grow h-full flex flex-col sm:flex-row bg-white rounded-lg  shadow-lg transform transition-transform hover:scale-105">
            {/* Texte et lien à gauche */}
            <div className="flex flex-col justify-center items-center p-6 sm:w-[50%]  text-white">
                <h3 className="font-bold text-2xl text-center mb-4">{title}</h3>
                <p className="mb-6 text-center">{linkText}</p>
                <Link className="bg-Jaune text-black text-center py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300" to={linkTo}>{linkText}</Link>
            </div>
            {/* Image à droite */}
            <div className="h-full w-full sm:w-[50%]">
                <img src={imageSrc} alt="festival photography" className="object-cover h-full w-full" />
            </div>
        </div>
    );
};
