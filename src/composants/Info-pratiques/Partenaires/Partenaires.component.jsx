import React, { useState, useEffect } from 'react';

const Partenaires = () => {
  const [partenaires, setPartenaires] = useState([]);
  const [images, setImages] = useState({});
  const categoryId = '8'; // ID de la catégorie Partenaires

  useEffect(() => {
    // Récupérer les partenaires
    fetch(`https://nationsounds.online/wp-json/wp/v2/posts?categories=${categoryId}`)
      .then(response => response.json())
      .then(data => {
        setPartenaires(data);

        // Pour chaque partenaire, récupérer l'image associée
        const imagePromises = data.map(partenaire => {
          const imageId = partenaire.acf.logo;
          if (imageId) {
            return fetch(`http://nationsounds.online/wp-json/wp/v2/media/${imageId}`)
              .then(response => response.json())
              .then(imageData => ({
                id: partenaire.id,
                url: imageData.source_url
              }));
          }
          return null;
        });

        // Attendre que toutes les images soient récupérées
        Promise.all(imagePromises).then(imagesData => {
          const imagesMap = imagesData.reduce((acc, img) => {
            if (img) {
              acc[img.id] = img.url;
            }
            return acc;
          }, {});
          setImages(imagesMap);
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des partenaires:', error));
  }, [categoryId]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Nos Partenaires</h1>
      <div className="grid grid-cols-1 gap-6">
        {partenaires.map(partenaire => (
          <div key={partenaire.id} className="flex items-center space-x-4 p-6 shadow-md rounded-lg">
            {/* Logo du partenaire avec lien */}
            <a href={partenaire.acf.lien} target="_blank" rel="noopener noreferrer">
              <img 
                src={images[partenaire.id] || partenaire.acf.logo} // Utiliser l'image récupérée ou le logo ACF si disponible
                alt={partenaire.acf.nom} 
                className="w-24 h-24 object-contain bg-white rounded-lg" // Fixer la taille des images
              />
            </a>

            {/* Nom et description à droite */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-Orange">{partenaire.acf.nom}</h2>
              <p className="invisible md:visible text-white">{partenaire.acf.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partenaires;
