import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);
  const [images, setImages] = useState({});
  const [selectedButton, setSelectedButton] = useState('all'); // Suivre le bouton sélectionné
  const categoryId = '10'; // Remplace par l'ID correct

  useEffect(() => {
    fetch(`https://nationsounds.online/wp-json/wp/v2/posts?categories=${categoryId}`)
      .then(response => response.json())
      .then(data => {
        const sortedConcerts = sortConcertsChronologically(data); // Trier les concerts
        setConcerts(sortedConcerts);
        setFilteredConcerts(sortedConcerts); // Afficher les concerts triés

        // Récupérer les images des concerts
        sortedConcerts.forEach(concert => {
          const imageId = concert.acf.photo;
          if (imageId) {
            fetch(`https://nationsounds.online/wp-json/wp/v2/media/${imageId}`)
              .then(response => response.json())
              .then(imageData => {
                setImages(prevImages => ({
                  ...prevImages,
                  [concert.id]: imageData.source_url // Associer l'URL de l'image à l'ID du concert
                }));
              })
              .catch(error => console.error('Erreur lors de la récupération de l\'image:', error));
          }
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des concerts:', error));
  }, [categoryId]);

  // Fonction pour trier les concerts par ordre chronologique (date et heure)
  const sortConcertsChronologically = (concertsList) => {
    return concertsList.sort((a, b) => {
      const dateA = dayjs(`${a.acf.date} ${a.acf.heuredebut}`);
      const dateB = dayjs(`${b.acf.date} ${b.acf.heuredebut}`);
      return dateA - dateB;
    });
  };

  // Fonction pour formater l'heure
  const formatTime = (timeString) => {
    if (!timeString) {
      return "Heure non disponible"; // Gérer le cas où l'heure est manquante
    }

    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes, seconds);
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  // Gestion des boutons de filtre
  const handleButtonClick = (filterType) => {
    setSelectedButton(filterType); // Mettre à jour l'état pour garder le bouton sélectionné
    if (filterType === 'all') {
      showAllArtists();
    } else if (filterType === 'friday') {
      filterByDate5Sep2025();
    } else if (filterType === 'saturday') {
      filterByDate6Sep2025();
    }
  };

  // Fonction pour afficher tous les artistes
  const showAllArtists = () => {
    setFilteredConcerts(concerts);
  };

  // Fonction pour filtrer les concerts du 5 septembre 2025
  const filterByDate5Sep2025 = () => {
    const filtered = concerts.filter(concert => concert.acf.date === '20250905');
    setFilteredConcerts(filtered);
  };

  // Fonction pour filtrer les concerts du 6 septembre 2025
  const filterByDate6Sep2025 = () => {
    const filtered = concerts.filter(concert => concert.acf.date === '20250906');
    setFilteredConcerts(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className='flex mb-4 font-extrabold text-3xl justify-center'>Concerts</h1>

      {/* Boutons de filtre */}
      <div className="flex text-sm md:text-base space-x-2 mt-6 justify-center">
        <button
          onClick={() => handleButtonClick('all')}
          className={`font-bold px-4 py-2 rounded ${
            selectedButton === 'all' ? 'bg-Bleuclair' : 'bg-Jaune hover:bg-Bleuclair'
          } text-white`}
        >
          ALL ARTISTS
        </button>

        <button
          onClick={() => handleButtonClick('friday')}
          className={`font-bold px-4 py-2 rounded ${
            selectedButton === 'friday' ? 'bg-Bleuclair' : 'bg-Jaune hover:bg-Bleuclair'
          } text-white`}
        >
          VENDREDI
        </button>

        <button
          onClick={() => handleButtonClick('saturday')}
          className={`font-bold px-4 py-2 rounded ${
            selectedButton === 'saturday' ? 'bg-Bleuclair' : 'bg-Jaune hover:bg-Bleuclair'
          } text-white`}
        >
          SAMEDI
        </button>
      </div>

      {/* Affichage des concerts avec grille responsive */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {filteredConcerts.map(concert => (
          <li key={concert.id} className="  rounded-lg md:shadow-md">
            <div className='flex flex-row items-center space-x-4'>
              <div className='w-40 h-40'>
                {/* Afficher l'image si elle existe */}
                {images[concert.id] && <img src={images[concert.id]} alt={concert.title.rendered} className="w-full h-full object-cover overflow-hidden rounded-lg" />}
              </div>

              {/* Informations du concert */}
              <div className='flex flex-col items-start justify-start mt-4 sm:mt-0 sm:ml-4'>
                <h2 className='font-semibold '>{concert.title.rendered}</h2>
                <p className='text-white text-sm md:text-base'>{concert.acf.type}</p>
                <p className='text-white text-sm md:text-base'>{concert.acf.lieu}</p>
                <p className='text-white text-sm md:text-base'>
                  {dayjs(concert.acf.date).format('DD/MM/YYYY')} | {formatTime(concert.acf.heuredebut)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Concerts;
