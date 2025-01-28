import React from 'react';
import './App.css';
import Header from './components/Header/Header.tsx';
import NovoUsuario from './components/NovoUsuário/NovoUsuario.tsx';
import Toast from './components/Toast/Toast.tsx'

function App() {
  const toastRef = React.useRef<any>(null)
  console.log(toastRef.current)
  return (
    <div>
      <Header />
      <NovoUsuario erro={msg => toastRef.current?.erro(msg)} />
      <Toast ref={toastRef} />
    </div>
  );
}

export default App;
