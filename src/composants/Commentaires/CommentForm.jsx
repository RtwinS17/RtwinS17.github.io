import React, { useState } from 'react';
import axios from 'axios';

function CommentForm() {
    const [commentData, setCommentData] = useState({
        Id_user: '',
        Id_concert: '',
        Texte: '',
        Note: '',
        Date: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCommentData({...commentData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {

            const response = await axios.post('http://localhost:8000/api/commentaires', commentData);
            alert('Commentaire envoyé avec succès!');
            setCommentData({
                Id_user: '',
                Id_concert: '',
                Texte: '',
                Note: '',
                Date: ''
            });
            setLoading(false);
        } catch (error) {
            console.error('Erreur lors de la soumission du commentaire:', error);
            setError('Erreur lors de l\'envoi du commentaire. Veuillez réessayer.');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="Id_user"
                value={commentData.Id_user}
                onChange={handleChange}
                placeholder="ID Utilisateur"
                required
            />
            <input
                type="text"
                name="Id_concert"
                value={commentData.Id_concert}
                onChange={handleChange}
                placeholder="ID Concert"
                required
            />
            <textarea
                name="Texte"
                value={commentData.Texte}
                onChange={handleChange}
                placeholder="Votre commentaire"
                required
            />
            <input
                type="number"
                name="Note"
                value={commentData.Note}
                onChange={handleChange}
                placeholder="Note sur 5"
                required
            />
            <input
                type="date"
                name="Date"
                value={commentData.Date}
                onChange={handleChange}
                required
            />
            {loading ? <p>Envoi en cours...</p> : <button type="submit">Envoyer le commentaire</button>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default CommentForm;
