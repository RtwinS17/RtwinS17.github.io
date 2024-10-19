import { configureStore } from '@reduxjs/toolkit';
import alertesReducer from './slices/alertes.slice';
import commentairesReducer from './slices/commentaires.slice';
import concertsReducer from './slices/concerts.slice';
import userReducer from './slices/user.slice';



export default configureStore({
    reducer: {
        alertes: alertesReducer,
        commentaires: commentairesReducer,
        concerts: concertsReducer,
        user: userReducer,
    },
    devTools: true,
})