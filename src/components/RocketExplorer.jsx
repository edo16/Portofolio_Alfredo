import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion'

export default function RocketExplorer() {
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

  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3])

  return (
    <div className="project-character-scene rocket-scene" aria-hidden="true">
      <motion.div className="rocket-character" style={{ y: movement, rotate }}>
        <motion.div
          className="rocket-flame"
          animate={{ scaleY: [0.8, 1.2, 0.9], opacity: [0.8, 1, 0.85] }}
          transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
        />
        <svg viewBox="0 0 180 240" className="rocket-svg" style={{ transform: 'rotate(180deg)' }}>
          <defs>
            <linearGradient id="rocketShell" x1="35" y1="30" x2="145" y2="200">
              <stop stopColor="#E5FAFF" />
              <stop offset=".35" stopColor="#55CFFF" />
              <stop offset="1" stopColor="#1754C8" />
            </linearGradient>
            <linearGradient id="rocketFin" x1="30" y1="130" x2="80" y2="210">
              <stop stopColor="#83E8FF" />
              <stop offset="1" stopColor="#2454C8" />
            </linearGradient>
            <radialGradient id="rocketWindow">
              <stop stopColor="#DDFBFF" />
              <stop offset=".55" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#123D83" />
            </radialGradient>
          </defs>
          <path d="M65 143 L37 183 Q34 193 47 189 L77 174Z" fill="url(#rocketFin)" stroke="#9DEEFF" strokeWidth="2" />
          <path d="M115 143 L143 183 Q146 193 133 189 L103 174Z" fill="#2459C9" stroke="#83E8FF" strokeWidth="2" />
          <path d="M90 16 C57 44 49 91 55 153 L67 181 Q90 194 113 181 L125 153 C131 91 123 44 90 16Z" fill="url(#rocketShell)" stroke="#B7F4FF" strokeWidth="3" />
          <path d="M90 18 C74 48 72 92 75 151" stroke="#FFFFFF" strokeWidth="5" opacity=".5" strokeLinecap="round" />
          <circle cx="90" cy="91" r="23" fill="#123D83" stroke="#C7F7FF" strokeWidth="5" />
          <circle cx="90" cy="91" r="16" fill="url(#rocketWindow)" />
          <path d="M80 84 Q89 75 99 84" stroke="#FFFFFF" strokeWidth="4" opacity=".7" strokeLinecap="round" />
          <path d="M76 181 L104 181 L101 198 L79 198Z" fill="#B6EFFF" />
          <path d="M82 195 Q90 225 98 195Z" fill="#FFB84D" />
          <path d="M86 195 Q90 215 94 195Z" fill="#E8FFFF" />
        </svg>
        <span className="rocket-particle particle-a" />
        <span className="rocket-particle particle-b" />
      </motion.div>
    </div>
  )
}
