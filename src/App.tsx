import React from 'react';
import Navigation from'./pages/Navbar/Navigation'
import Profil from'./pages/Profil/Profil'
import Message from './pages/Message/Message';
import Accueil from './pages/Accueil/Accueil';

function App() {
  return (
    <div className="App">
      <Navigation ></Navigation>
      <div className="inline-flex ">
      <Profil></Profil>
      <Message></Message>
      <Accueil></Accueil>
      </div>
    </div>
  );
}

export default App;
