import React from 'react';
import './App.css';
import { useShortcuts } from 'react-shrtcts'

function App() {
  useShortcuts([{
    keys:['alt', 'j'],
    fn: () => alert('Keys Pressed')
  },
  {
    keys:['ctrl', 'j'],
    fn: () => alert('Keys Pressed')
  }])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test out some shrtcts here bro!
        </p>      
        
        
      </header>
    </div>
  );
}

export default App;
