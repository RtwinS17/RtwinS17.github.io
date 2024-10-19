import React from 'react';
import ReactDOM from 'react-dom/client';

import './theme/theme_tailwind.css';
import './theme/theme_btn.css';
import './theme/theme_state.css';
import './theme/class_btn.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './appStore/store';
import { Provider } from 'react-redux';

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
