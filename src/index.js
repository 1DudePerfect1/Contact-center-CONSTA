import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Theme, presetGpnDefault} from '@consta/uikit/Theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </React.StrictMode>
);

