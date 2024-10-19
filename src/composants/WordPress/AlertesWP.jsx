import React, { useState, useEffect } from 'react';
import './AlertesWP.style.css';

const AlertesWP = () => {
  const [alertes, setAlertes] = useState([]);
  const categoryId = '11'; // ID de la catégorie Alertes

  useEffect(() => {
    // Récupérer les alertes
    fetch(`https://nationsounds.online/wp-json/wp/v2/posts?categories=${categoryId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Ajouter ce log pour voir la structure des données
        setAlertes(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des alertes:', error));
  }, [categoryId]);

  return (
    <div className='h-full overflow-y-auto rounded-b-md alertes-container'>
      <h1 className='text-center p-8'>Alertes</h1>
      <ul className='flex flex-col gap-8 my-8 overflow-y-scroll '>
        {alertes.map(alerte => (
          <li className='p-4 w-[80%] md:w-[60%] text-center m-auto rounded-3xl bg-Orange hover:bg-opacity-50 text-white' key={alerte.id}>
            <h3 className='font-bold text-white'>{alerte.acf.titre }</h3>
            <p className='text-sm text-white'>{alerte.acf.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertesWP;
