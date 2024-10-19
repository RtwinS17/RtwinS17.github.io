import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const pointsInteretsSlice = createSlice({
    name: 'pointsInterets',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updatePointsInterets(state, action) {
            // Mettre à jour les points d'intérêt avec les données reçues de l'API
            state.data = action.payload;
            state.loading = false;
        },

        getPointsInterets(state) {
            // Effectuer une requête pour récupérer les points d'intérêt
            state.loading = true;
            axios.get('http://localhost:3000/api/pointsInterets')
                .then(response => {
                    // Si la requête est réussie, mettre à jour les points d'intérêt dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addPointInteret(state, action) {
            // Ajouter un nouveau point d'intérêt avec l'objet point d'intérêt fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/pointsInterets', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter le nouveau point d'intérêt au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removePointInteret(state, action) {
            // Supprimer un point d'intérêt avec l'ID du point d'intérêt fourni
            const pointInteretId = action.payload;
            state.loading = true;
            axios.delete(`http://localhost:3000/api/pointsInterets/${pointInteretId}`)
                .then(() => {
                    // Si la requête est réussie, supprimer le point d'intérêt du state
                    state.loading = false;
                    state.data = state.data.filter(pointInteret => pointInteret.id !== pointInteretId);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showPointsInterets(state) {
            console.log(state.data);
        },
    }
});

export const { updatePointsInterets, getPointsInterets, addPointInteret, removePointInteret, showPointsInterets } = pointsInteretsSlice.actions;
export default pointsInteretsSlice.reducer;
