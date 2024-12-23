import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import './App.css'

function App() {
  const [section, setSection] = useState(0)
  const sections = ['Home', 'Education', 'Projects','Contact', 'Resume']
 
  const handleNextSection = () => {
    setSection((prev) => (prev + 1) % sections.length)
  }

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}

function Stars({ section }) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  const cameraRef = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15

    if (cameraRef.current) {
      const targetZ = 3 - section * 1.5
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05)
      state.camera.updateProjectionMatrix()
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default App

