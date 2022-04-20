import './App.css';
import React from 'react';
import { PluginProvider } from './context'
import Main from './containers/Main';

function App() {

  return (
    <PluginProvider>
      <Main/>
    </PluginProvider>
  );
}

export default App;