import React from "react";
import { Link } from "react-router-dom";
import AlertesIcon from './../../ressources/alertesIcon.jpg';
import FAQIcon from './../../ressources/FAQIcon.jpg';
import contactIcon from './../../ressources/contactIcon.jpg';
import partenaireIcon from './../../ressources/partenaireIcon.jpg';

export const InfoPratiques = ({ deviceUsed = 'mobile' }) => {
  return (
    <div className="flex flex-col h-full p-4 gap-8 sm:grid sm:grid-cols-2 sm:gap-10 text-center">
      {/* Section 1: Alertes */}
      <section className="flex flex-col items-center p-6  shadow-lg rounded-lg hover:shadow-xl transition">
        <h3 className="w-full font-bold text-xl mb-4">ALERTES</h3>
        {deviceUsed === 'mobile' ? (
          <Link to={'/alertes'} className="text-white hover:text-Bleuclair">
            Retrouver toutes les alertes récentes
          </Link>
        ) : (
          <Link to={'/alertes'} className="w-full">
            <img src={AlertesIcon} alt="Alertes" className="w-32 h-32 object-cover mx-auto rounded-full" />
          </Link>
        )}
      </section>

      {/* Section 2: FAQ */}
      <section className="flex flex-col items-center p-6  shadow-lg rounded-lg hover:shadow-xl transition">
        <h3 className="w-full font-bold text-xl mb-4">FAQ</h3>
        {deviceUsed === 'mobile' ? (
          <Link to={'/FAQ'} className="text-white hover:text-Bleuclair">
            Les réponses à vos questions sont ici !
          </Link>
        ) : (
          <Link to={'/FAQ'} className="w-full">
            <img src={FAQIcon} alt="FAQ" className="w-32 h-32 object-cover mx-auto rounded-full" />
          </Link>
        )}
      </section>

      {/* Section 3: Contact */}
      <section className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:shadow-xl transition">
        <h3 className="w-full font-bold text-xl mb-4">CONTACT</h3>
        {deviceUsed === 'mobile' ? (
          <Link to={'/contact'} className="text-white hover:text-Bleuclair">
            Contactez-nous ici
          </Link>
        ) : (
          <Link to={'/contact'} className="w-full">
            <img src={contactIcon} alt="Contact" className="w-32 h-32 object-cover mx-auto rounded-full" />
          </Link>
        )}
      </section>

      {/* Section 4: Partenaires */}
      <section className="flex flex-col items-center p-6  shadow-lg rounded-lg hover:shadow-xl transition">
        <h3 className="w-full font-bold text-xl mb-4">PARTENAIRES</h3>
        {deviceUsed === 'mobile' ? (
          <Link to={'/partenaires'} className="text-white hover:text-Bleuclair">
            Ceux qui permettent l'événement
          </Link>
        ) : (
          <Link to={'/partenaires'} className="w-full">
            <img src={partenaireIcon} alt="Partenaires" className="w-32 h-32 object-cover mx-auto rounded-full" />
          </Link>
        )}
      </section>
    </div>
  );
};
