import React, { useState, useEffect } from 'react';
import './App.css';

import Divider from './components/Divider';
import Section from './components/Section';
import { Contact, Bio, Description, Title, Subtitle } from './components/Section/styles';

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
          <span className="Header-title">{cv.location}</span>
        </header>
        <Divider />
        <Section justify="space-around" direction="row">
        {
          cv.contacts.map(o => (
            <Contact type={o.type} value={o.value} />
          ))
        }
        </Section>
        <Section justify="space-around" direction="row">
        {
          cv.social.map(o => (
            <Contact type={o.type} value={o.value} />
          ))
        }
        </Section>
        <Divider />
        <Section>
          <Bio>{cv.about}</Bio>
        </Section>
        <Divider />
        <Section name="Experiences" />
        {
          cv.experiences.map(experience => (
            <Section direction="column" headerContentRender={() => (
              <>
                <Title>{experience.company}</Title>
                {
                  ((experience.period.end) && (
                    <Subtitle>{[experience.period.start, experience.period.end].join(' to ')}</Subtitle>
                  )) || (
                    <Subtitle>Current position</Subtitle>
                  )
                }
              </>
            )}>
              <ul>
              {
                experience.descriptions.map(o => (
                  <Description>{o}</Description>
                ))
              }
              </ul>
            </Section>
          ))
        }
      </div>
    </div>
  );

  const loading = () => (
    <span>Loading!</span>
  );

  return ((cv && content()) || loading());
}

export default App;
