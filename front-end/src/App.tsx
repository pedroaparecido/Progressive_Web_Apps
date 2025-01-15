import React from 'react';
import './App.css';
import Header from './components/Header/Header.tsx';
import NovoUsuario from './components/NovoUsuário/NovoUsuario.tsx';

function App() {
  return (
    <div>
      <Header />
      <NovoUsuario />
    </div>
  );
}

export default App;
