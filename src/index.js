import React from 'react';

import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App';

import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  </React.StrictMode>
 );

export default root;
