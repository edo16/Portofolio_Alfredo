import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion'

export default function CapsuleSpaceship() {
  const { scrollYProgress } = useScroll()
  const [travelDistance, setTravelDistance] = useState(1200)
  const maxScrollProgress = useMotionValue(0)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (current > maxScrollProgress.get()) {
      maxScrollProgress.set(current)
    }
  })

  useEffect(() => {
    const updateDistance = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight - 260
      setTravelDistance(Math.max(0, distance))
    }

    updateDistance()
    window.addEventListener('resize', updateDistance)
    const observer = new ResizeObserver(updateDistance)
    observer.observe(document.documentElement)

    return () => {
      window.removeEventListener('resize', updateDistance)
      observer.disconnect()
    }
  }, [])

  const movement = useSpring(
    useTransform(maxScrollProgress, [0, 1], [0, travelDistance]),
    { stiffness: 18, damping: 32, mass: 1.8 }
  )

  const tilt = useTransform(scrollYProgress, [0, 1], [-3, 3])

  return (
    <div className="project-character-scene capsule-scene" aria-hidden="true">
      <motion.div className="capsule-character" style={{ y: movement, rotate: tilt }}>
        <svg viewBox="0 0 300 180" className="capsule-svg" style={{ transform: 'rotate(90deg)' }}>
          <defs>
            <linearGradient id="podHull" x1="45" y1="30" x2="250" y2="150">
              <stop stopColor="#FFFFFF" />
              <stop offset=".3" stopColor="#DCEBFA" />
              <stop offset=".7" stopColor="#829FCA" />
              <stop offset="1" stopColor="#344D78" />
            </linearGradient>
            <linearGradient id="podMetal" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#EAFBFF" />
              <stop offset="1" stopColor="#527BAE" />
            </linearGradient>
            <radialGradient id="podGlass">
              <stop stopColor="#D5FBFF" />
              <stop offset=".5" stopColor="#43BCEB" />
              <stop offset="1" stopColor="#102E5B" />
            </radialGradient>
            <linearGradient id="podEngine" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#FFFFFF" />
              <stop offset=".4" stopColor="#65E8FF" />
              <stop offset="1" stopColor="#397BFF" />
            </linearGradient>
          </defs>

          <ellipse cx="151" cy="151" rx="112" ry="13" fill="#39BFFF" opacity=".15" />

          <path d="M57 75 L22 55 Q10 50 13 68 L31 105 L64 104Z"
            fill="#4B78B4" stroke="#A9E9FF" strokeWidth="3" />
          <path d="M57 105 L23 124 Q11 131 22 143 L69 126Z"
            fill="#345C98" stroke="#8DDFFF" strokeWidth="3" />

          <path d="M48 90 L17 88 L5 98 L18 108 L51 107Z"
            fill="url(#podEngine)" opacity=".9" />

          <rect x="42" y="48" width="220" height="84" rx="42"
            fill="url(#podHull)" stroke="#E8FAFF" strokeWidth="3" />

          <path d="M69 54 Q135 43 222 57" fill="none"
            stroke="#FFFFFF" strokeWidth="7" opacity=".55" strokeLinecap="round" />

          <path d="M75 51 Q63 90 75 129" fill="none"
            stroke="#668BB8" strokeWidth="3" opacity=".7" />

          <path d="M224 52 Q242 90 224 128"
            fill="none" stroke="#EAFBFF" strokeWidth="3" opacity=".8" />

          <ellipse cx="151" cy="89" rx="34" ry="29"
            fill="#183B70" stroke="#F3FDFF" strokeWidth="5" />
          <ellipse cx="151" cy="89" rx="27" ry="22" fill="url(#podGlass)" />
          <path d="M137 80 Q151 68 165 80"
            fill="none" stroke="#FFFFFF" strokeWidth="5" opacity=".75" strokeLinecap="round" />

          <rect x="105" y="119" width="92" height="5" rx="2.5"
            fill="#F4FCFF" opacity=".65" />

          <circle cx="84" cy="91" r="4" fill="#5BE5FF" />
          <circle cx="216" cy="91" r="4" fill="#5BE5FF" />
          <circle cx="238" cy="75" r="3" fill="#FFFFFF" />
          <circle cx="238" cy="105" r="3" fill="#FFFFFF" />

          <path d="M10 98 L-5 98" stroke="#6DEBFF" strokeWidth="5" strokeLinecap="round" />
          <path d="M5 91 L-9 91" stroke="#FFFFFF" strokeWidth="2" opacity=".8" />
        </svg>

        <motion.span
          className="capsule-particle capsule-particle-a"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.3, 0.7] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <motion.span
          className="capsule-particle capsule-particle-b"
          animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}
