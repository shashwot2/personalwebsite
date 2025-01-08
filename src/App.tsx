import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function App() {
  const [fastForward, setFastForward] = useState(false)

  const toggleFastForward = () => {
    setFastForward(true)
    setTimeout(() => setFastForward(false), 2000) 
  }

  return (
    <>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars fastForward={fastForward} />
      </Canvas>

      <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 }}>
        <button
          onClick={toggleFastForward}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: '#ffa0e0',
            border: 'none',
            borderRadius: '5px',
            color: 'black',
            cursor: 'pointer',
          }}
        >
          Fast Forward Stars
        </button>
      </div>
    </>
  )
}

function Stars({ fastForward }) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    const speedMultiplier = fastForward ? 5 : 1 // Increase speed by 5x in fast-forward mode
    ref.current.rotation.x -= (delta / 10) * speedMultiplier
    ref.current.rotation.y -= (delta / 15) * speedMultiplier
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

