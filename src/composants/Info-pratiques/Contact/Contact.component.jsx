import React, { useState } from 'react';
import './Contact.style.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [emailValid, setEmailValid] = useState(true); // Etat pour gérer la validité de l'email

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Si le champ email est modifié, on valide l'email
        if (name === 'email') {
            setEmailValid(validateEmail(value));
        }
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        // Regex pour la validation de l'email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const maxLength = 500;

        if (message.length > maxLength) {
            alert('Le message ne peut pas dépasser 500 caractères.');
            return;
        }

        if (!emailValid) { // Vérifier si l'email est valide
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Envoi du message à l'adresse spécifiée
        const mailtoLink = `mailto:miaou@graou.minou?subject=${name} (${email})&body=${message}`;
        window.location.href = mailtoLink;
    };

    return (

            <div className="h-full flex flex-col gap-2 py-2 px-6 md:px-24">
                <h1 className="text-2xl font-bold mb-2">Contactez-nous</h1>
                <form onSubmit={handleSubmit} className="h-full flex flex-col gap-4 text-center contactForm">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full p-2 border rounded-md ${emailValid ? '' : 'border-red-500'}`}
                        />
                        {!emailValid && <p className="text-red-500 text-sm">Veuillez entrer une adresse email valide.</p>}
                    </div>

                    <div className='grow flex flex-col'>
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            maxLength={500}
                            className="w-full p-2 border rounded-md grow"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center"><button type="submit" className="flex items-center justify-center btn-accent w-1/2 p-2">Envoyer</button></div>
                    
                </form>
            </div>
    );
};
