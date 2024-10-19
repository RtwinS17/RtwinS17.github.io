import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const lieuxSlice = createSlice({
    name: 'lieux',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateLieux(state, action) {
            // Mettre à jour les lieux avec les données reçues de l'API
            state.data = action.payload;
            state.loading = false;
        },

        getLieux(state) {
            // Effectuer une requête pour récupérer les lieux
            state.loading = true;
            axios.get('http://localhost:3000/api/lieux')
                .then(response => {
                    // Si la requête est réussie, mettre à jour les lieux dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addLieu(state, action) {
            // Ajouter un nouveau lieu avec l'objet lieu fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/lieux', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter le nouveau lieu au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removeLieu(state, action) {
            // Supprimer un lieu avec l'ID du lieu fourni
            const lieuId = action.payload;
            state.loading = true;
            axios.delete(`http://localhost:3000/api/lieux/${lieuId}`)
                .then(() => {
                    // Si la requête est réussie, supprimer le lieu du state
                    state.loading = false;
                    state.data = state.data.filter(lieu => lieu.id !== lieuId);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showLieux(state) {
            console.log(state.data);
        },
    }
});

export const { updateLieux, getLieux, addLieu, removeLieu, showLieux } = lieuxSlice.actions;
export default lieuxSlice.reducer;
