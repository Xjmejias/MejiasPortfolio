import { useState } from 'react'
import './App.css'

const profilePicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV2LT9Nw11DpNasThW-I8JzSOVeNStIEgAA&s'

function App() {
  const [activeSection, setActiveSection] = useState('skills')

  const sections = {
    skills: [
      'In our house i can cook adobo and do dishes.',
      'I can play basketball.',
      'I am good listener.',
      'I have a emotional intelligence.',
    ],
    achievement: [
      'In my highschool journey or G12 i have a honor.',
      'In basketball tournament i have a mythical five award and rookie of the year.',
    ],
    hobbies: ['Playing Basketball.', 'Listening to music.', 'Cooking sometimes.', 'Bonding to my family.'],
    personalInfo: [
      'Mejias, Xavier John D.',
      'I am 20 years old',
      'I live in Brgy 2, Mamburao Occidental Mindoro',
      '09457263325',
      'mejiasxavierjohn@gmail.com',
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
