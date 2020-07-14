import React from 'react';
import './App.css';
import { KeyMap } from 'react-shrtcts'

function App() {
  const shortcutConfig = [{
    keys:['alt', 'j'],
    fn: () => alert('Alt J Pressed')
  },
  {
    keys:['alt', 'w'],
    fn: () => alert('Alt W Pressed')
  }]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test out some shrtcts here bro!
        </p>      
        <KeyMap keyMapConfig={shortcutConfig} />
      </header>
    </div>
  );
}

export default App;
