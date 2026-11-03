import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  FileText,
  Layers3,
  Workflow,
} from 'lucide-react'
import './LSTMDetail.css'

const content = {
  en: {
    eyebrow: 'INTERNSHIP LEARNING PROJECT · 03',
    title: 'LSTM Text Generation',
    subtitle: 'Exploring Sequence Modeling with Long Short-Term Memory',
    back: 'Back to Projects',
    overviewTitle: 'Project Overview',
    overview:
      'This project documents a learning experience in machine learning using Long Short-Term Memory (LSTM) networks for text generation. The work involved exploring how a recurrent neural network processes sequential text data and learns patterns from a Shakespeare text corpus.',
    objectiveTitle: 'Learning Objectives',
    objectives: [
      'Understand the fundamentals of machine learning and recurrent neural networks.',
      'Explore how LSTM networks learn sequential patterns in text.',
      'Practice preparing and preprocessing text data for model input.',
      'Explore text generation based on patterns learned from the training corpus.',
    ],
    datasetTitle: 'Dataset',
    dataset:
      'The project used Shakespeare text as the source corpus for the text generation learning process. The text served as sequential input for exploring language patterns and model-generated text.',
    workflowTitle: 'Learning Workflow',
    workflow: [
      {
        title: 'Text Preparation',
        description:
          'Preparing the Shakespeare text corpus and examining its structure before model processing.',
      },
      {
        title: 'Preprocessing',
        description:
          'Transforming text into a representation suitable for sequential model input.',
      },
      {
        title: 'LSTM Exploration',
        description:
          'Learning how LSTM processes sequences and captures contextual patterns across text.',
      },
      {
        title: 'Text Generation',
        description:
          'Exploring how a trained model can generate text based on patterns learned from the corpus.',
      },
    ],
    conceptTitle: 'Understanding LSTM',
    concept:
      'Long Short-Term Memory is a type of recurrent neural network designed to process sequential information. Its memory mechanism helps the network retain relevant information across sequence steps, making it useful for exploring text-generation tasks.',
    toolsTitle: 'Tools & Technologies',
    tools: ['Python', 'Google Colab', 'LSTM', 'Machine Learning', 'Text Processing'],
    experienceTitle: 'Internship Experience',
    experience:
      'This project was part of a learning experience during an internship at BRIN Bandung in January–February 2025. The focus was on learning machine learning concepts and exploring LSTM-based text generation using Python and Google Colab.',
    note:
      'This page describes the learning activities and workflow. Quantitative model metrics and detailed experimental configurations are not presented here.',
    footer: 'Learning through practical exploration.',
  },
  id: {
    eyebrow: 'PROYEK PEMBELAJARAN MAGANG · 03',
    title: 'LSTM Text Generation',
    subtitle: 'Eksplorasi Pemodelan Sekuensial dengan Long Short-Term Memory',
    back: 'Kembali ke Proyek',
    overviewTitle: 'Gambaran Proyek',
    overview:
      'Proyek ini mendokumentasikan pengalaman mempelajari machine learning menggunakan jaringan Long Short-Term Memory (LSTM) untuk text generation. Kegiatan berfokus pada eksplorasi cara jaringan saraf berulang memproses data teks sekuensial dan mempelajari pola dari korpus teks Shakespeare.',
    objectiveTitle: 'Tujuan Pembelajaran',
    objectives: [
      'Memahami dasar-dasar machine learning dan recurrent neural network.',
      'Mempelajari cara jaringan LSTM mengenali pola sekuensial dalam teks.',
      'Mempraktikkan persiapan dan preprocessing data teks sebagai input model.',
      'Mengeksplorasi proses pembangkitan teks berdasarkan pola yang dipelajari dari korpus.',
    ],
    datasetTitle: 'Dataset',
    dataset:
      'Proyek ini menggunakan teks Shakespeare sebagai korpus sumber dalam proses pembelajaran text generation. Teks tersebut digunakan sebagai data sekuensial untuk mengeksplorasi pola bahasa dan teks yang dihasilkan model.',
    workflowTitle: 'Alur Pembelajaran',
    workflow: [
      {
        title: 'Persiapan Teks',
        description:
          'Menyiapkan korpus teks Shakespeare dan mempelajari strukturnya sebelum diproses oleh model.',
      },
      {
        title: 'Preprocessing',
        description:
          'Mengubah teks menjadi representasi yang sesuai untuk input model sekuensial.',
      },
      {
        title: 'Eksplorasi LSTM',
        description:
          'Mempelajari cara LSTM memproses urutan data dan menangkap pola konteks dalam teks.',
      },
      {
        title: 'Text Generation',
        description:
          'Mengeksplorasi bagaimana model yang dilatih dapat menghasilkan teks berdasarkan pola yang dipelajari dari korpus.',
      },
    ],
    conceptTitle: 'Memahami LSTM',
    concept:
      'Long Short-Term Memory merupakan salah satu jenis recurrent neural network yang dirancang untuk memproses informasi sekuensial. Mekanisme memorinya membantu jaringan mempertahankan informasi yang relevan pada setiap langkah urutan, sehingga dapat digunakan untuk mengeksplorasi tugas text generation.',
    toolsTitle: 'Tools & Teknologi',
    tools: ['Python', 'Google Colab', 'LSTM', 'Machine Learning', 'Text Processing'],
    experienceTitle: 'Pengalaman Magang',
    experience:
      'Proyek ini merupakan bagian dari pengalaman pembelajaran selama magang di BRIN Bandung pada Januari–Februari 2025. Fokus kegiatan adalah mempelajari konsep machine learning dan mengeksplorasi text generation berbasis LSTM menggunakan Python dan Google Colab.',
    note:
      'Halaman ini menjelaskan aktivitas dan alur pembelajaran. Metrik kuantitatif model dan konfigurasi eksperimen terperinci tidak dicantumkan di sini.',
    footer: 'Belajar melalui eksplorasi praktis.',
  },
}

const workflowIcons = [FileText, Workflow, BrainCircuit, BookOpen]

function LSTMDetail({ language, onBack }) {
  const t = content[language] || content.en

  return (
    <main className="lstm-detail">
      <div className="lstm-detail-shell">
        <button className="lstm-back-button" onClick={onBack}>
          <ArrowLeft size={17} />
          {t.back}
        </button>

        <motion.section
          className="lstm-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lstm-hero-copy">
            <span className="lstm-eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
            <div className="lstm-hero-tags">
              <span>Python</span>
              <span>LSTM</span>
              <span>NLP</span>
              <span>Google Colab</span>
            </div>
          </div>

          <div className="lstm-visual" aria-label="Illustration of sequential text processing">
            <div className="lstm-visual-label">SEQUENCE → MEMORY → OUTPUT</div>
            <div className="lstm-sequence">
              {['To', 'be', 'or', 'not', 'to'].map((word, index) => (
                <div className="lstm-sequence-item" key={`${word}-${index}`}>
                  <span>{word}</span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </div>
              ))}
            </div>
            <div className="lstm-flow-line">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="lstm-memory">
              <BrainCircuit size={35} />
              <div>
                <strong>LSTM</strong>
                <small>Sequence Learning</small>
              </div>
            </div>
            <div className="lstm-output">
              <ArrowUpRight size={17} />
              <span>Text Generation</span>
            </div>
            <div className="lstm-orbit lstm-orbit-one" />
            <div className="lstm-orbit lstm-orbit-two" />
          </div>
        </motion.section>

        <nav className="lstm-toc" aria-label="Project sections">
          {[
            [t.overviewTitle, '#lstm-overview'],
            [t.objectiveTitle, '#lstm-objectives'],
            [t.datasetTitle, '#lstm-dataset'],
            [t.workflowTitle, '#lstm-workflow'],
            [t.toolsTitle, '#lstm-tools'],
          ].map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <section className="lstm-section" id="lstm-overview">
          <div className="lstm-section-heading">
            <span>01 / OVERVIEW</span>
            <h2>{t.overviewTitle}</h2>
          </div>
          <p className="lstm-section-copy">{t.overview}</p>
        </section>

        <section className="lstm-section" id="lstm-objectives">
          <div className="lstm-section-heading">
            <span>02 / OBJECTIVES</span>
            <h2>{t.objectiveTitle}</h2>
          </div>
          <div className="lstm-objectives">
            {t.objectives.map((item, index) => (
              <div className="lstm-objective" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lstm-section" id="lstm-dataset">
          <div className="lstm-section-heading">
            <span>03 / DATASET</span>
            <h2>{t.datasetTitle}</h2>
          </div>
          <div className="lstm-dataset-card">
            <Database size={25} />
            <div>
              <strong>Shakespeare Text Corpus</strong>
              <p>{t.dataset}</p>
            </div>
          </div>
        </section>

        <section className="lstm-section" id="lstm-workflow">
          <div className="lstm-section-heading">
            <span>04 / WORKFLOW</span>
            <h2>{t.workflowTitle}</h2>
          </div>
          <div className="lstm-workflow">
            {t.workflow.map((step, index) => {
              const Icon = workflowIcons[index]
              return (
                <article className="lstm-workflow-card" key={step.title}>
                  <span className="lstm-step-number">STEP 0{index + 1}</span>
                  <Icon size={25} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="lstm-section lstm-concept-section">
          <div className="lstm-section-heading">
            <span>05 / CONCEPT</span>
            <h2>{t.conceptTitle}</h2>
          </div>
          <div className="lstm-concept-card">
            <Layers3 size={27} />
            <p>{t.concept}</p>
          </div>
        </section>

        <section className="lstm-section" id="lstm-tools">
          <div className="lstm-section-heading">
            <span>06 / TECHNOLOGY</span>
            <h2>{t.toolsTitle}</h2>
          </div>
          <div className="lstm-tools">
            {t.tools.map((tool) => (
              <span key={tool}><Code2 size={15} />{tool}</span>
            ))}
          </div>
        </section>

        <section className="lstm-experience">
          <span className="lstm-eyebrow">BRIN BANDUNG · JAN — FEB 2025</span>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experience}</p>
          <small>{t.note}</small>
        </section>

        <button type="button" className="lstm-back-button lstm-back-bottom" onClick={onBack}>
          <ArrowLeft size={16} /> {t.back}
        </button>

        <footer className="lstm-detail-footer">
          <span>{t.footer}</span>
        </footer>
      </div>
    </main>
  )
}

export default LSTMDetail
