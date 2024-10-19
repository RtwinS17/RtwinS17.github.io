// EventForm.jsx
import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Envoyer les données au backend (Laravel)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Date</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <label>Lieu</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default EventForm;
