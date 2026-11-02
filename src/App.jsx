import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
  Download} from 'lucide-react'
import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { translations } from './translations'
import './App.css'
import SmartPOSDetail from './components/SmartPOSDetail'
import PneumoniaDetail from './components/PneumoniaDetail'
import LSTMDetail from './components/LSTMDetail'

const ParticleSphere = lazy(() => import('./components/ParticleSphere'))

const projects = [
  {
    number: '01',
    category: 'WEB DEVELOPMENT · BUSINESS INTELLIGENCE',
    title: 'SmartPOS',
    description:
      'A modern point-of-sale application with inventory management, transaction monitoring, business analytics, and operational insights.',
    tags: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js'],
    className: 'project-blue',
    label: 'BUSINESS APPLICATION',
  },
  {
    number: '02',
    category: 'ARTIFICIAL INTELLIGENCE · COMPUTER VISION',
    title: 'Pneumonia Detection',
    description:
      'Implementation of Capsule Network with activation functions for pneumonia classification using chest X-ray images.',
    tags: ['Python', 'TensorFlow', 'Capsule Network', 'Deep Learning'],
    className: 'project-purple',
    label: 'RESEARCH PROJECT',
  },
  {
    number: '03',
    category: 'MACHINE LEARNING · NLP',
    title: 'LSTM Text Generation',
    description:
      'An exploration of sequence modeling and text generation using Long Short-Term Memory neural networks.',
    tags: ['Python', 'LSTM', 'NLP', 'Google Colab'],
    className: 'project-orange',
    label: 'MACHINE LEARNING',
  },
]

const experiences = [
  {
    period: 'JUN — AUG 2026',
    role: 'Field Enumerator',
    gallery: '/images/experience/bps',
    organization: 'Badan Pusat Statistik (BPS) · South Lampung',
    description:
      'Collected field data and interviewed respondents following BPS procedures, verified response completeness and consistency, and maintained accurate records while observing schedules and confidentiality.',
  },
  {
    period: 'FEB 2024 — FEB 2026',
    role: 'Lampung Sub-Region Coordinator',
    gallery: '/images/experience/ikahimatika',
    organization: 'Ikatan Himpunan Mahasiswa Matematika (IKAHIMATIKA) Indonesia · Region II',
    description:
      'Coordinated communication among Mathematics Student Associations across Lampung, represented the regional network at organizational events, and supported inter-campus collaboration.',
  },
  {
    period: 'JAN — FEB 2025',
    role: 'Information Retrieval Intern',
    gallery: '/images/experience/brin',
    organization: 'Badan Riset dan Inovasi Nasional (BRIN) · Bandung',
    description:
      'Explored machine learning and Information Retrieval concepts during an internship at BRIN, using Python and Google Colab for data preprocessing and LSTM-based text-generation experiments.',
  },
  {
    period: 'JAN — DEC 2024',
    role: 'Head of External Affairs',
    gallery: '/images/experience/himatika-external',
    organization: 'Himpunan Mahasiswa Jurusan Matematika (HIMATIKA) · Universitas Lampung',
    description:
      'Led a 14-member external affairs division, managed organizational partnerships and stakeholder communication, coordinated team activities, supported social media communication, and shared knowledge about futsal techniques and teamwork.',
  },
  {
    period: 'AUG 2024',
    role: 'Guest Speaker · EFROMATIKA 2024',
    gallery: '/images/experience/efromatika-2024',
    organization: 'HIMATIKA · Institut Teknologi Sumatera (ITERA)',
    description: 'Delivered a presentation about IKAHIMATIKA Region II.',
  },
  {
    period: 'FEB — DEC 2023',
    role: 'Staff of Interests and Talents',
    gallery: '/images/experience/himatika-interest',
    organization: 'Himpunan Mahasiswa Jurusan Matematika (HIMATIKA)',
    description:
      'Contributed to the Interests and Talents Division, led a two-day Design and Videography Training program, coordinated futsal activities, and supported other committee programs.',
  },
  {
    period: 'JUN — NOV 2023',
    role: 'Head of Competition Division',
    gallery: '/images/experience/himatika-competition',
    organization: 'Himpunan Mahasiswa Jurusan Matematika (HIMATIKA)',
    description:
      'Led the competition division for HIMATIKA COMPETITION, coordinating participants, division tasks, and event operations for a regional sports and esports tournament across Lampung.',
  },
]

const skills = [
  'Python',
  'SQL',
  'Microsoft Excel',
  'Statistical Analysis',
  'Data Analytics',
  'Machine Learning',
  'TensorFlow',
  'Data Visualization',
  'JavaScript',
  'HTML & CSS',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [activeGallery, setActiveGallery] = useState(null)
  const [zoomedImage, setZoomedImage] = useState(null)
  const [isSmartPOSDetail, setIsSmartPOSDetail] = useState(window.location.hash === '#/projects/smartpos')
  const [isPneumoniaDetail, setIsPneumoniaDetail] = useState(window.location.hash === '#/projects/pneumonia')
  const [isLSTMDetail, setIsLSTMDetail] = useState(window.location.hash === '#/projects/lstm')

  useLayoutEffect(() => {
    if (!isSmartPOSDetail && !isPneumoniaDetail && !isLSTMDetail && window.location.hash === '#works') {
      const worksSection = document.getElementById('works')
      if (worksSection) {
        const top = worksSection.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top, behavior: 'instant' })
      }
    }
  }, [isSmartPOSDetail, isPneumoniaDetail, isLSTMDetail])


  useEffect(() => {
    if (!activeGallery) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveGallery(null)
        setZoomedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeGallery])
  useEffect(() => {
    const handlePortfolioRoute = () => {
      setIsSmartPOSDetail(window.location.hash === '#/projects/smartpos')
      setIsPneumoniaDetail(window.location.hash === '#/projects/pneumonia')
      setIsLSTMDetail(window.location.hash === '#/projects/lstm')
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', handlePortfolioRoute)
    return () => window.removeEventListener('hashchange', handlePortfolioRoute)
  }, [])

  const openSmartPOSDetail = () => {
    window.history.pushState(null, '', '#/projects/smartpos')
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setIsSmartPOSDetail(true)
    setIsPneumoniaDetail(false)
  }

  const openPneumoniaDetail = () => {
    window.history.pushState(null, '', '#/projects/pneumonia')
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setIsSmartPOSDetail(false)
    setIsPneumoniaDetail(true)
  }

  const openLSTMDetail = () => {
    window.history.pushState(null, '', '#/projects/lstm')
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setIsSmartPOSDetail(false)
    setIsPneumoniaDetail(false)
    setIsLSTMDetail(true)
  }

  const backToPortfolio = () => {
    window.history.replaceState(null, '', '#works')
    setIsSmartPOSDetail(false)
    setIsPneumoniaDetail(false)
    setIsLSTMDetail(false)
  }

  const t = translations[language]
  const pageRef = useRef(null)

  useEffect(() => {
    const root = pageRef.current

    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const sectionAnimations = [
        {
          section: '#about',
          targets: '.section-heading, .about-portrait, .about-copy h2, .about-text p',
        },
        {
          section: '#expertise',
          targets: '.section-heading, .expertise-intro > h2, .expertise-intro > p',
        },
        {
          section: '#works',
          targets: '.section-heading, .works-intro > h2, .works-intro > p',
        },
        {
          section: '#experience',
          targets: '.section-heading, h2',
        },
        {
          section: '#contact',
          targets: '.section-heading, .contact-content > *',
        },
      ]

      sectionAnimations.forEach(({ section, targets }) => {
        const sectionElement = root.querySelector(section)

        if (!sectionElement) return

        const elements = sectionElement.querySelectorAll(targets)

        gsap.from(elements, {
          autoAlpha: 0,
          y: 36,
          filter: 'blur(8px)',
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top 78%',
            once: true,
          },
        })
      })

      const timeline = root.querySelector('.timeline')
      const timelineProgress = root.querySelector('.timeline-progress')

      if (timeline && timelineProgress) {
        gsap.fromTo(
          timelineProgress,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timeline,
              start: 'top 72%',
              end: 'bottom 70%',
              scrub: true,
            },
          }
        )
      }
    }, root)

    return () => ctx.revert()
  }, [])

  const navigateToSection = (sectionId) => {
    setMenuOpen(false)

    // Ubah URL tanpa memicu hashchange yang memaksa scroll ke atas.
    window.history.pushState(null, '', `#${sectionId}`)

    // Tampilkan kembali halaman portfolio.
    setIsSmartPOSDetail(false)
    setIsPneumoniaDetail(false)
    setIsLSTMDetail(false)

    // Tunggu portfolio dirender, lalu scroll ke section tujuan.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.getElementById(sectionId)

        if (section) {
          const top =
            section.getBoundingClientRect().top + window.scrollY - 90

          window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth',
          })
        }
      })
    })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main ref={pageRef}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); navigateToSection("home") }}>
          <span className="brand-name">
            ALFREDO RAUL ADAMSYAH<span className="brand-dot">.</span>
          </span>
          <span className="brand-dino" aria-hidden="true">🦖</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {[
            { id: 'about', label: t.nav.about },
            { id: 'expertise', label: t.nav.expertise },
            { id: 'works', label: t.nav.works },
            { id: 'experience', label: t.nav.experience },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                navigateToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}

          <div className="language-switch" aria-label="Choose language">
            <button
              className={language === 'id' ? 'active' : ''}
              onClick={() => setLanguage('id')}
              aria-label="Gunakan Bahasa Indonesia"
            >
              ID
            </button>
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <a className="nav-contact" href="#contact" onClick={(event) => { event.preventDefault(); navigateToSection("contact") }}>
            {t.nav.contact} <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {isSmartPOSDetail ? (
        <SmartPOSDetail language={language} onBack={backToPortfolio} />
      ) : isPneumoniaDetail ? (
        <PneumoniaDetail language={language} onBack={backToPortfolio} />
      ) : isLSTMDetail ? (
        <LSTMDetail language={language} onBack={backToPortfolio} />
      ) : (
        <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="status-dot" />
            {t.hero.availability}
          </motion.div>

          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1>
            <span className="hero-title-mask">
              <motion.span
                className="hero-title-line"
                initial={{ opacity: 0, y: '115%', filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
                transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {t.hero.titleTop}
              </motion.span>
            </span>

            <span className="hero-title-mask">
              <motion.span
                className="hero-title-line"
                initial={{ opacity: 0, y: '115%', filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
                transition={{ duration: 0.95, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="gradient-text">{t.hero.titleMiddle}</span> {t.hero.titleEnd}
              </motion.span>
            </span>

            <span className="hero-title-mask">
              <motion.span
                className="hero-title-line"
                initial={{ opacity: 0, y: '115%', filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
                transition={{ duration: 0.95, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="outline-text">{t.hero.titleLast}</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.75, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tagline-dot" />
            {t.hero.cardBottom}
          </motion.p>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
        >
          <div className="visual-grid" />
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-middle" />
          <div className="orbit orbit-inner" />
          <div className="core-glow" />
          <Suspense fallback={<div className="particle-fallback" />}>
            <ParticleSphere />
          </Suspense>
          <span className="visual-coordinate">05°25' S — 105°16' E</span>
        </motion.div>

      </section>

      <section className="about section-block" id="about">
        <div className="section-wrap">
        <div className="section-heading">
          <span className="section-index">{t.about.index}</span>
          <span className="section-note">{t.about.note}</span>
        </div>

        <div className="about-content">
          <div className="about-portrait">
            <img
              src="/images/about-portrait.png"
              alt="Alfredo Raul Adamsyah"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <h2>
              <span>{t.about.titleTop}</span>
              <span className="muted-heading">{t.about.titleMiddle}</span>
              <span>{t.about.titleBottom}</span>
            </h2>

            <div className="about-text">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="expertise section-wrap section-block" id="expertise">
        <div className="section-heading">
          <span className="section-index">{t.expertise.index}</span>
          <span className="section-note">{t.expertise.note}</span>
        </div>

        <div className="expertise-intro">
          <h2>
            {t.expertise.titleTop}
            <br />
            <span className="gradient-text">{t.expertise.titleBottom}</span>
          </h2>
          <p>
            {t.expertise.description}
          </p>
        </div>

        <div className="skill-grid">
          {t.expertise.groups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight size={17} />
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="works section-wrap section-block" id="works">
        <div className="section-heading">
          <span className="section-index">{t.works.index}</span>
          <span className="section-note">{t.works.note}</span>
        </div>

        <div className="works-intro">
          <h2>
            {t.works.titleTop}
            <br />
            <span className="muted-heading">{t.works.titleBottom}</span>
          </h2>
          <p>
            {t.works.description}
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.className}`}
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
              onClick={index === 0 ? openSmartPOSDetail : index === 1 ? openPneumoniaDetail : index === 2 ? openLSTMDetail : undefined}
              onKeyDown={index < 3 ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  if (index === 0) openSmartPOSDetail()
                  else if (index === 1) openPneumoniaDetail()
                  else if (index === 2) openLSTMDetail()
                }
              } : undefined}
              role={index < 3 ? 'button' : undefined}
              tabIndex={index < 3 ? 0 : undefined}
              aria-label={index === 0 ? 'Open SmartPOS project documentation' : index === 1 ? 'Open Pneumonia Detection project documentation' : index === 2 ? 'Open LSTM Text Generation project documentation' : undefined}
            >
              <div className="project-topline">
                <span>{project.number} / {t.works.projects[index].label}</span>
                <ArrowUpRight size={21} />
              </div>
              <div className="project-content">
                <span className="project-category">{t.works.projects[index].category}</span>
                <h3>{project.title}</h3>
                <p>{t.works.projects[index].description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {index < 3 ? (
                  <span className="project-view-link">
                    {language === 'id' ? 'Lihat Selengkapnya' : 'View Details'}
                    <ArrowUpRight size={16} />
                  </span>
                ) : (
                  <span className="project-view-link project-coming-soon">
                    {language === 'id' ? 'Segera Hadir' : 'Coming Soon'}
                  </span>
                )}
              </div>
              <div className="project-decoration">
                <div className="decoration-ring" />
                <div className="decoration-core" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience section-wrap section-block" id="experience">
        <div className="section-heading">
          <span className="section-index">{t.experience.index}</span>
          <span className="section-note">{t.experience.note}</span>
        </div>

        <h2>
          {t.experience.titleTop}
          <br />
          <span className="muted-heading">{t.experience.titleBottom}</span>
        </h2>

        <div className="timeline">
          <div className="timeline-progress" aria-hidden="true" />
          {experiences.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="timeline-period">{item.period}</span>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3>{t.experience.items[index].role}</h3>
                <span>{t.experience.items[index].organization}</span>
                {t.experience.items[index].location && (
                  <span className="timeline-location">
                    {t.experience.items[index].location}
                  </span>
                )}
                <span className="timeline-employment">
                  {t.experience.items[index].employment} · {t.experience.items[index].duration}
                </span>
                <p>{t.experience.items[index].description}</p>
                <div className="timeline-responsibilities">
                  <strong>{language === 'en' ? 'Responsibilities' : 'Tanggung Jawab'}</strong>
                  <ul>
                    {t.experience.items[index].responsibilities.map((responsibility, responsibilityIndex) => (
                      <li key={responsibilityIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="gallery-trigger"
                  onClick={() =>
                    setActiveGallery({
                      title: t.experience.items[index].role,
                      path: item.gallery,
                    })
                  }
                >
                  {language === 'en' ? 'View Documentation' : 'Lihat Dokumentasi'}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact section-wrap section-block" id="contact">
        <div className="section-heading">
          <span className="section-index">{t.contact.index}</span>
          <span className="section-note">{t.contact.note}</span>
        </div>

        <div className="contact-content">
          <span className="contact-eyebrow">{t.contact.eyebrow}</span>
          <h2>
            {t.contact.titleTop}
            <br />
            <span className="gradient-text">{t.contact.titleBottom}</span>
          </h2>
          <p>
            {t.contact.description}
          </p>
          <div className="contact-actions">
            <a
              className="button-primary contact-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alfredoraul160104@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'en' ? 'Send Me an Email' : 'Kirim Email'}
              <Mail size={17} />
            </a>

            <a
              className="button-secondary contact-button"
              href="https://www.linkedin.com/in/alfredo-raul-adamsyah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'en' ? 'Connect on LinkedIn' : 'Terhubung di LinkedIn'}
              <ArrowUpRight size={17} />
            </a>

            <a
              className="button-secondary contact-button"
              href="/CV_Alfredo_Raul_Adamsyah.pdf"
              download="CV_Alfredo_Raul_Adamsyah.pdf"
            >
              {language === 'en' ? 'Download CV' : 'Unduh CV'}
              <Download size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <span>{t.footer.tagline}</span>
        <span>© 2026 ALFREDO RAUL ADAMSYAH.</span>
      </footer>

        </>
      )}

      <AnimatePresence>
        {activeGallery && (
          <motion.div
            className="gallery-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveGallery(null)
              setZoomedImage(null)
            }}
          >
            <motion.div
              className="gallery-modal"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="gallery-modal-header">
                <div>
                  <span className="gallery-modal-eyebrow">
                    {language === 'en' ? 'EXPERIENCE ARCHIVE' : 'ARSIP PENGALAMAN'}
                  </span>
                  <h2>{activeGallery.title}</h2>
                  <p>
                    {language === 'en'
                      ? 'Selected moments and activity documentation.'
                      : 'Dokumentasi kegiatan dan momen pilihan.'}
                  </p>
                </div>

                <button
                  type="button"
                  className="gallery-close"
                  aria-label={language === 'en' ? 'Close gallery' : 'Tutup galeri'}
                  onClick={() => {
                    setActiveGallery(null)
                    setZoomedImage(null)
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="gallery-grid">
                {[1, 2].map((number) => {
                  const imagePath = `${activeGallery.path}/documentation-${number}.jpg`

                  return (
                    <button
                      type="button"
                      className="gallery-image-card"
                      key={number}
                      onClick={() => setZoomedImage(imagePath)}
                    >
                      <div className="gallery-image-placeholder">
                        <Sparkles size={24} />
                        <span>
                          {language === 'en'
                            ? `Documentation ${number}`
                            : `Dokumentasi ${number}`}
                        </span>
                        <small>
                          {language === 'en'
                            ? 'Photo will appear here'
                            : 'Foto akan ditampilkan di sini'}
                        </small>
                      </div>
                      <img
                        src={imagePath}
                        alt={`${activeGallery.title} documentation ${number}`}
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                      <span className="gallery-image-number">
                        0{number}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="gallery-modal-footer">
                <span>
                  {language === 'en'
                    ? 'Click an image to enlarge'
                    : 'Klik foto untuk memperbesar'}
                </span>
                <span>01 — 02</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="gallery-zoom-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <button
              type="button"
              className="gallery-close gallery-zoom-close"
              aria-label={language === 'en' ? 'Close enlarged image' : 'Tutup gambar'}
              onClick={() => setZoomedImage(null)}
            >
              <X size={22} />
            </button>
            <motion.img
              src={zoomedImage}
              alt={activeGallery?.title || 'Experience documentation'}
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
