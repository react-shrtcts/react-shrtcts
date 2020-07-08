import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './/App';
import { ShortcutProvider } from 'react-shrtcts'

ReactDOM.render(
  <React.StrictMode>
    <ShortcutProvider>
      <App />
    </ShortcutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);