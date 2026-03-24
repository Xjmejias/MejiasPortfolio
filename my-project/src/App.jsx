import { useState } from 'react'
import './App.css'

const profilePicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV2LT9Nw11DpNasThW-I8JzSOVeNStIEgAA&s'

function App() {
  const [activeSection, setActiveSection] = useState('skills')

  const sections = {
    skills: [
      'HTML.',
      'CSS.',
      'JavaScript.',
      'React.',
    ],
    achievement: [
      'Our group success in the research project, I created some designs and functionality.',
    ],
    hobbies: ['WEB and Mobile design, with a growing curiosity in how AI can enhance user experiences.'],
    personalInfo: [
      'Mejias, Xavier John D.',
      'A 3rd Year Student BSIT, Want to explore more on technology, how it works and how it can be used to solve real-world problems.',
    ],
  }

  return (
    <div className="app-root">
      <header>
        <img src={profilePicture} alt="Mejias Profile Picture" className="profile-pic" />
        <h1>Mejias Portfolio</h1>
        <nav>
          <ul>
            <li>
              <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>
                Skills
              </button>
            </li>
            <li>
              <button className={activeSection === 'achievement' ? 'active' : ''} onClick={() => setActiveSection('achievement')}>
                Achievement
              </button>
            </li>
            <li>
              <button className={activeSection === 'hobbies' ? 'active' : ''} onClick={() => setActiveSection('hobbies')}>
                Hobbies
              </button>
            </li>
            <li>
              <button className={activeSection === 'personalInfo' ? 'active' : ''} onClick={() => setActiveSection('personalInfo')}>
                Personal Information
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {Object.entries(sections).map(([key, items]) => (
          <section id={key} key={key} className={activeSection === key ? 'active-section' : 'hidden-section'}>
            <h2>{key === 'personalInfo' ? 'Personal Information' : key.charAt(0).toUpperCase() + key.slice(1)}</h2>
            {items.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
