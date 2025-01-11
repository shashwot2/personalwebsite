import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import Contact from './components/contact'
import Projects from './components/projects'
import Personal from './components/personal'
import Education from './components/education'
import Experience from './components/experience'

export default function App() {
  const [currentSection, setCurrentSection] = useState('Personal')
  const [fastForward, setFastForward] = useState(false)
  const [visibleText, setVisibleText] = useState('Personal')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const sections = ['Personal', 'Education', 'Experience', 'Projects', 'Contact', 'Resume']
  const sectionText = {
    Personal: '',
    Projects: '',
    Education: '',
    Contact: '',
    Resume: 'Download my professional resume below.',
  }

  const handleSectionChange = (section) => {
    if (section === currentSection) return // Skipping if the section is the same
    setFastForward(true)
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentSection(section)
      setVisibleText(section)
      setIsTransitioning(false)
      setFastForward(false)
    }, 700)
  }

  return (
    <>
      <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              fontSize: '16px',
              background: currentSection === section ? '#ffa0e0' : '#444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
          >
            {section}
          </button>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 5,
          width: '80%',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {visibleText === 'Personal' && <Personal />}
        {visibleText === 'Experience' && <Experience />}
        {visibleText === 'Projects' && <Projects />}
        {visibleText === 'Education' && <Education />}
        {visibleText === 'Contact' && <Contact />}
        {visibleText === 'Resume' && (
          <>
            <p style={{ fontSize: '1.5rem', margin: '10px 0', padding: 0 }}>{sectionText.Resume}</p>
            <a
              href="./src/assets/resume.pdf"
              download="Shashwot_KC_Resume.pdf"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                background: 'grey',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.background = '#38a6d4')}
              onMouseOut={(e) => (e.target.style.background = 'grey')}
            >
              Resume
            </a>
          </>
        )}
      </div>

      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars fastForward={fastForward} currentSection={currentSection} />
      </Canvas>

      <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 }}>
        <p style={{ color: '#fff', fontSize: '13px' }}>
          Developed with ReactThreeFiber
        </p>
      </div>
    </>
  )
}

function Stars({ fastForward, currentSection }) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    const speedMultiplier = fastForward ? 18 : 1
    ref.current.rotation.x -= (delta / 10) * speedMultiplier
    ref.current.rotation.y -= (delta / 15) * speedMultiplier
  })

  const sectionColors = {
    Personal: '#ffa0e0',
    Projects: '#00ffcc',
    Education: '#ffcc00',
    Contact: '#ff4444',
    Resume: '#44ccff',
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={sectionColors[currentSection]}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

