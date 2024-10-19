import React from 'react';
import './artistCard.style.css'; 

const ArtistCard = ({ artist }) => {
  if (!artist) {
    return null;
  }

  return (
    <div className="w-80 mx-4 my-4 rounded-lg shadow-lg overflow-hidden">
      <div className="relative rounded overflow-hidden h-48 md:h-64">
      <img src={artist.photo} alt={artist.nom_groupe} className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-bold">{artist.nom_groupe}</h5>
        <p className="text-base mb-2">{artist.type_musique}</p>
      </div>
    </div>
  );
};

export default ArtistCard;