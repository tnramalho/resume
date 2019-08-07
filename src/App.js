import React, { useState, useEffect } from 'react';
import './App.css';

import Divider from './components/Divider';
import Section from './components/Section';
import { Contact, Bio, Description, Title, Subtitle } from './components/Section/styles';
import Rate from './components/Rate';

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
                <Subtitle>{experience.location}</Subtitle>
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
        <Section name="Education" />
        {
          cv.education.map(education => (
            <Section direction="column" headerContentRender={() => (
              <>
                <Title>{education.school}</Title>
                <Subtitle>{[education.period.start, education.period.end].join(' to ')}</Subtitle>
              </>
            )}>
              <Title>{education.degree}</Title>
              <ul>
              <Description>{education.description}</Description>
              </ul>
            </Section>
          ))
        }
        <Section name="Skills" justify="space-between">
          <Section direction="column">
          {
            [...cv.skills.slice(0, Math.round(cv.skills.length / 2))].map(skill => (
              <Rate name={skill.name} value={skill.rate} />
            ))
          }
          </Section>
          <Section direction="column">
          {
            [...cv.skills.slice(Math.round(cv.skills.length / 2), cv.skills.length)].map(skill => (
              <Rate name={skill.name} value={skill.rate} />
            ))
          }
          </Section>
        </Section>
      </div>
    </div>
  );

  const loading = () => (
    <span>Loading!</span>
  );

  return ((cv && content()) || loading());
}

export default App;
