import React, { useState } from 'react';
import { postAdminConcert } from '../../../Service/adminAPI/adminAPI.service';
import { useNavigate } from 'react-router-dom';

import './CreateConcert.style.css';

export const CreateConcert = () => {
    const navigate = useNavigate();
    const [concertData, setConcertData] = useState({
        Groupe: '',
        Duree: '',
        Horaire: '',
        scene_id: '1',
        Descriptif: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConcertData({ ...concertData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await postAdminConcert(concertData);
            setConcertData({
                Groupe: '',
                Duree: '',
                Horaire: '',
                scene_id: '1',
                Descriptif: ''
            });
            alert('Concert créé avec succès ! Vous allez être redirigé.');
            setTimeout(() => {
                navigate('/admin/programmation');
            }, 1000);
        } catch (error) {
            console.error('Error creating concert:', error);
            alert('Une erreur s\'est produite lors de la création du concert.');
        }
    };

    return (

            <form className="h-full flex flex-col justify-between gap-2 text-center CreateConcertContainer" onSubmit={handleSubmit}>
                <label htmlFor="Groupe">Nom du Groupe:</label>
                <input
                    type="text"
                    id="Groupe"
                    maxLength={20}
                    name="Groupe"
                    value={concertData.Groupe}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="Duree">Durée du concert (en heures):</label>
                <select
                    id="Duree"
                    name="Duree"
                    value={concertData.Duree}
                    onChange={handleChange}
                    required
                >
                    <option value="1">1 heure</option>
                    <option value="2">2 heures</option>
                    <option value="3">3 heures</option>
                    <option value="4">4 heures</option>
                </select>

                <label htmlFor="Horaire">Date de début</label>
                <input
                    type="datetime-local"
                    id="Horaire"
                    name="Horaire"
                    value={concertData.Horaire}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="scene_id">ID de la scène:</label>
                <select
                    id="scene_id"
                    name="scene_id"
                    value={concertData.scene_id}
                    onChange={handleChange}
                    required
                >
                    <option value="1">Principale</option>
                    <option value="2">Secondaire</option>
                    <option value="3">Electronic Tent</option>
                </select>

                <label htmlFor="Descriptif">Descriptif:</label>
                <textarea
                    id="Descriptif"
                    maxLength={100}
                    name="Descriptif"
                    value={concertData.Descriptif}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" className='btn-accent p-2'>Créer Concert</button>
            </form>
    );
};
