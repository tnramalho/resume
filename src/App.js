import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Divider from './components/Divider';

function App() {

  const [cv, setCV] = useState();

  useEffect(() => {
    fetch('./assets/cv-en.json').then(response => response.json().then(cv => setCV(cv)));
  }, []);

  const content = () => (
    <div className="Body">
      <div className="Content">
        <header className="Header">
          <img className="Header-photo" src="./assets/profile.jpg" />
          <span className="Header-name">{cv.name}</span>
          <span className="Header-title">{cv.title}</span>
        </header>
        <Divider />
      </div>
    </div>
  );

  const loading = () => (
    <span>Loading!</span>
  );

  return ((cv && content()) || loading());
}

export default App;
