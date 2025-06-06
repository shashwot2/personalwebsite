import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from "maath/random"
import Contact from './components/contact'
import Projects from './components/projects'
import Personal from './components/personal'
import Education from './components/education'
import Hamburger from './components/hamburger'
import * as THREE from 'three';
import { SpeedInsights } from "@vercel/speed-insights/react"


export default function App() {
  const [currentSection, setCurrentSection] = useState('Personal')
  const [fastForward, setFastForward] = useState(false)
  const [visibleText, setVisibleText] = useState('Personal')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const sections = ['Personal', 'Education', 'Projects', 'Contact']

  const handleSectionChange = (section: string) => {
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
      <SpeedInsights />
      <div className="hamburger">
        <Hamburger
          isOpen={hamburgerOpen}
          toggleMenu={toggleHamburger}
          currentSection={currentSection}
          handleSectionChange={(section) => {
            handleSectionChange(section); 
            setHamburgerOpen(false);
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          padding: '10px',
          background: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '10px',
          maxWidth: '90%',
        }}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            className={`button ${currentSection === section ? 'active' : ''}`}
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
        {visibleText === 'Projects' && <Projects />}
        {visibleText === 'Education' && <Education />}
        {visibleText === 'Contact' && <Contact />}
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
function Stars({ fastForward, currentSection }: { fastForward: boolean; currentSection: string }) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => Float32Array.from(random.inSphere(new Float32Array(5000), { radius: 1.5 })));
  useFrame((_, delta) => {
    const speedMultiplier = fastForward ? 18 : 1
    ref.current!.rotation.x -= (delta / 10) * speedMultiplier;
    ref.current!.rotation.y -= (delta / 15) * speedMultiplier;
  })

  const sectionColors: { [key: string]: string } = {
    Personal: '#ffa0e0',
    Projects: '#00ffcc',
    Education: '#ffcc00',
    Contact: '#ff4444',
    Resume: '#44ccff',
  };  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={sectionColors[currentSection as keyof typeof sectionColors]}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

