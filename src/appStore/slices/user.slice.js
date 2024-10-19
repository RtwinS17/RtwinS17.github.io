import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userPreference',
  initialState: {
    configuration: {
      theme: "day"
    },
  },
  reducers: {
    switchTheme(state){
      if(state.configuration.theme === 'day') {
        state.configuration.theme = 'dark'
        document.body.className = 'dark-theme' 
      } else {
        state.configuration.theme = 'day'
        document.body.className = 'day-theme' 

      }

    }
  },
});

export const { switchTheme } = userSlice.actions
export default userSlice.reducer;
