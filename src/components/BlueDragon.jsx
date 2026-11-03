import { motion, useScroll, useTransform } from 'framer-motion'

export default function BlueDragon() {
  const { scrollYProgress } = useScroll()
  const energyProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const particleOne = useTransform(scrollYProgress, [0, 1], [25, 440])
  const particleTwo = useTransform(scrollYProgress, [0, 1], [170, 585])
  const particleThree = useTransform(scrollYProgress, [0, 1], [310, 725])

  return (
    <div className="blue-energy-scene" aria-hidden="true">
      <div className="blue-energy-aura" />

      <svg
        className="blue-energy-svg"
        viewBox="0 0 180 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="energyGradient" x1="90" y1="0" x2="90" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A5F3FF" />
            <stop offset=".45" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <filter id="energyGlow" x="-100%" y="-20%" width="300%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M90 0 C90 65 45 85 70 145 S135 225 90 285 S45 385 90 480"
          stroke="#164E9A"
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".35"
        />

        <motion.path
          d="M90 0 C90 65 45 85 70 145 S135 225 90 285 S45 385 90 480"
          stroke="url(#energyGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#energyGlow)"
          style={{ pathLength: energyProgress }}
        />

        <path
          d="M90 0 C90 65 45 85 70 145 S135 225 90 285 S45 385 90 480"
          stroke="#D8FAFF"
          strokeWidth="1"
          strokeLinecap="round"
          opacity=".65"
        />

        <motion.circle cx="70" cy="0" r="4" fill="#C4F7FF" filter="url(#energyGlow)" style={{ cy: particleOne }} />
        <motion.circle cx="110" cy="0" r="3" fill="#60DFFF" filter="url(#energyGlow)" style={{ cy: particleTwo }} />
        <motion.circle cx="85" cy="0" r="2.5" fill="#FFFFFF" filter="url(#energyGlow)" style={{ cy: particleThree }} />

        {[45, 125, 205, 285, 365, 445].map((y, i) => (
          <circle
            key={i}
            cx={i % 2 === 0 ? 48 : 132}
            cy={y}
            r="2"
            fill="#8BEAFF"
            opacity=".65"
          />
        ))}
      </svg>

      <span className="blue-energy-caption">SCROLL TO EXPLORE</span>
    </div>
  )
}
