import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditConcert.style.css';
import { editAdminConcert } from '../../../Service/adminAPI/adminAPI.service';

export const EditConcert = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const concert = location.state;
    const [formData, setFormData] = useState({
        Groupe: concert.Groupe,
        Duree: concert.Duree,
        Horaire: concert.Horaire,
        scene_id: concert.scene_id,
        Descriptif: concert.Descriptif
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editAdminConcert(concert.id, formData);
            console.log('Data Sent : ', formData);
            navigate('/admin/programmation');
        } catch (error) {
            console.error(error)
        }
        console.log('Form data submitted:', formData);
    };

    return (
            <div className='h-full flex flex-col gap-2 overflow-y-auto'>
                <h1 className="text-2xl font-bold">Éditer le Concert</h1>
                <form onSubmit={handleSubmit} className="grow flex flex-col justify-between text-center editConcertForm">
                 
                        <label className="text-sm font-medium">
                            Nom du Groupe 
                            <input
                                type="text"
                                name="Groupe"
                                maxLength={20}
                                value={formData.Groupe}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </label>
                  
                        <label className="text-sm font-medium">
                            Durée (*heure) 
                            <select
                                name="Duree"
                                value={formData.Duree}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                            >
                                <option value="1">1 heure</option>
                                <option value="2">2 heures</option>
                                <option value="3">3 heures</option>
                                <option value="4">4 heures</option>
                            </select>
                        </label>
                  
                        <label className="text-sm font-medium">
                            Date 
                            <input
                                type="datetime-local"
                                name="Horaire"
                                value={formData.Horaire}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </label>
                  
                        <label className="text-sm font-medium">
                            Scène 
                            <select
                                name="scene_id"
                                value={formData.scene_id}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                            >
                                <option value="1">Principale</option>
                                <option value="2">Secondaire</option>
                                <option value="3">Electronic Tent</option>
                            </select>
                        </label>
                  
                        <label className="text-sm font-medium">
                            Descriptif
                            <textarea
                                name="Descriptif"
                                value={formData.Descriptif}
                                maxLength={100}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </label>
              
                        <button type="submit" className="btn-accent p-2"> Enregistrer </button>
                </form>
            </div>
    );
};
