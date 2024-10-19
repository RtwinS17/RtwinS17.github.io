import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [concerts, setConcerts] = useState([]);
  const [newConcert, setNewConcert] = useState({
    Groupe: '',
    Horaires: 0,
    Scene: '',
    Descriptif: '',
  });

  useEffect(() => {
    axios.get('http://serveur.localhost/api/concerts')
      .then(response => setConcerts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConcert(prevConcert => ({ ...prevConcert, [name]: value }));
  };

  const handleAddConcert = () => {
    // Appel API Laravel pour ajouter un nouveau concert
    axios.post('http://serveur.localhost/api/concerts', newConcert) // Assurez-vous que le chemin est correct
      .then(response => {
        // Mettre à jour la liste des concerts après l'ajout
        setConcerts(prevConcerts => [...prevConcerts, response.data]);
        // Réinitialiser le formulaire
        setNewConcert({
          Groupe: '',
          Horaires: 0,
          Scene: '',
          Descriptif: '',
        });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
    handleAddConcert(); // Appeler la fonction de traitement de l'ajout du concert
  };

  return (
    <div>
      <h2>Liste des Concerts</h2>
      <ul>
        {concerts.map(concert => (
          <li key={concert.id}>
            {concert.Groupe} - {concert.Horaires} - {concert.Scene} - {concert.Descriptif}
            <button>Éditer</button>
            <button>Supprimer</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddConcert}>Ajouter un Concert</button>
      <form onSubmit={handleSubmit}>
        <label>Groupe: <input type="text" name="Groupe" value={newConcert.Groupe} onChange={handleInputChange} /></label>
        <label>Horaires: <input type="number" name="Horaires" value={newConcert.Horaires} onChange={handleInputChange} /></label>
        <label>Scene: <input type="text" name="Scene" value={newConcert.Scene} onChange={handleInputChange} /></label>
        <label>Descriptif: <input type="text" name="Descriptif" value={newConcert.Descriptif} onChange={handleInputChange} /></label>
      </form>
    </div>
  );
};

export default EventList;
