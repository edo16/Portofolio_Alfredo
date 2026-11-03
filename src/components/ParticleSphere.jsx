import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  MathUtils,
} from 'three'

function ParticleCloud() {
  const pointsRef = useRef()

  const geometry = useMemo(() => {
    const count = 3200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const blue = new Color('#527bff')
    const violet = new Color('#b18cff')
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = goldenAngle * i

      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      const index = i * 3
      const sphereRadius = 1.28

      positions[index] = x * sphereRadius
      positions[index + 1] = y * sphereRadius
      positions[index + 2] = z * sphereRadius

      const color = blue.clone().lerp(violet, (y + 1) / 2)
      const brightness = 0.7 + 0.3 * Math.sin(i * 0.37)

      colors[index] = color.r * brightness
      colors[index + 1] = color.g * brightness
      colors[index + 2] = color.b * brightness
    }

    const result = new BufferGeometry()

    result.setAttribute(
      'position',
      new BufferAttribute(positions, 3),
    )

    result.setAttribute(
      'color',
      new BufferAttribute(colors, 3),
    )

    return result
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return

    const points = pointsRef.current

    points.rotation.y += delta * 0.12

    points.rotation.x = MathUtils.damp(
      points.rotation.x,
      state.pointer.y * 0.16,
      2,
      delta,
    )

    points.rotation.z = MathUtils.damp(
      points.rotation.z,
      -state.pointer.x * 0.12,
      2,
      delta,
    )
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        vertexColors
        transparent
        opacity={0.92}
        depthWrite={false}
        blending={AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticleSphere() {
  return (
    <Canvas
      className="particle-canvas"
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      dpr={
        typeof window !== 'undefined' && window.innerWidth <= 680
          ? 1
          : [1, 1.5]
      }
      gl={{
        alpha: true,
        antialias: typeof window !== 'undefined' && window.innerWidth > 680,
        powerPreference: 'high-performance',
      }}
    >
      <ambientLight intensity={0.5} />
      <ParticleCloud />
    </Canvas>
  )
}
