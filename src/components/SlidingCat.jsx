import { motion, useScroll, useTransform } from 'framer-motion'

export default function SlidingCat() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-20, 105])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5])

  return (
    <div className="project-character-scene cat-scene" aria-hidden="true">
      <motion.div className="cat-character" style={{ y, rotate }}>
        <motion.svg viewBox="0 0 220 230" className="cat-svg">
          <defs>
            <linearGradient id="catFur" x1="55" y1="30" x2="165" y2="190">
              <stop stopColor="#FFFFFF" />
              <stop offset=".55" stopColor="#DCEBFA" />
              <stop offset="1" stopColor="#8DA8C9" />
            </linearGradient>
            <linearGradient id="catEar" x1="70" y1="25" x2="150" y2="100">
              <stop stopColor="#FFB5C5" />
              <stop offset="1" stopColor="#E889A5" />
            </linearGradient>
            <filter id="catShadow" x="-40%" y="-30%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <ellipse cx="110" cy="205" rx="58" ry="10" fill="#4BAAFF" opacity=".2" filter="url(#catShadow)" />
          <motion.path
            d="M153 151 C194 145 188 102 164 111 C149 117 169 132 181 119"
            fill="none" stroke="#DCEBFA" strokeWidth="13" strokeLinecap="round"
            animate={{ rotate: [0, 12, -5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '155px 150px' }}
          />
          <path d="M65 82 L59 28 Q58 17 69 27 L101 57Z" fill="url(#catFur)" stroke="#9CB5D3" strokeWidth="2" />
          <path d="M155 82 L161 28 Q162 17 151 27 L119 57Z" fill="url(#catFur)" stroke="#9CB5D3" strokeWidth="2" />
          <path d="M68 65 L67 37 L89 60Z M152 65 L153 37 L131 60Z" fill="url(#catEar)" />
          <ellipse cx="110" cy="82" rx="57" ry="49" fill="url(#catFur)" stroke="#AFC4DD" strokeWidth="2" />
          <path d="M72 75 Q82 63 94 75 M126 75 Q138 63 148 75" stroke="#8BA5C6" strokeWidth="3" fill="none" />
          <ellipse cx="91" cy="85" rx="5" ry="8" fill="#263D61" />
          <ellipse cx="129" cy="85" rx="5" ry="8" fill="#263D61" />
          <circle cx="93" cy="82" r="2" fill="#FFFFFF" />
          <circle cx="131" cy="82" r="2" fill="#FFFFFF" />
          <path d="M105 98 Q110 104 115 98 Q110 94 105 98Z" fill="#E98FA8" />
          <path d="M110 103 Q105 113 98 108 M110 103 Q115 113 122 108" stroke="#8D9FB8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M77 105 L49 100 M78 113 L48 116 M143 105 L171 100 M142 113 L172 116" stroke="#A4B6CD" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="110" cy="155" rx="43" ry="48" fill="url(#catFur)" stroke="#AFC4DD" strokeWidth="2" />
          <ellipse cx="110" cy="163" rx="23" ry="29" fill="#FFFFFF" opacity=".8" />
          <motion.path d="M83 185 L78 207 M101 190 L100 210 M127 190 L130 210 M145 183 L151 205"
            stroke="#DCEBFA" strokeWidth="14" strokeLinecap="round"
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: .55, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '110px 185px' }}
          />
          <path d="M83 188 L77 207 M101 193 L100 210 M127 193 L130 210 M145 186 L151 205" stroke="#AFC4DD" strokeWidth="1.5" strokeLinecap="round" />
        </motion.svg>
        <span className="cat-sparkle sparkle-a">✦</span>
        <span className="cat-sparkle sparkle-b">✧</span>
      </motion.div>
      <span className="character-caption">PAWSITIVE DISCOVERY</span>
    </div>
  )
}
