import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowUpRight, Layers3, Database,
  Workflow, BrainCircuit, ChartNoAxesCombined,
  Code2, ShieldCheck, Activity, Microscope
} from 'lucide-react'
import './PneumoniaDetail.css'

const content = {
  en: {
    back: 'Back to Work',
    eyebrow: 'RESEARCH PROJECT · 02',
    title: 'Pneumonia Detection',
    subtitle: 'Capsule Network for Chest X-ray Classification',
    lead: 'Implementation of a Capsule Network model with activation functions to classify chest X-ray images into Normal and Pneumonia categories.',
    overview: 'Project Overview',
    overviewText: `This project implements a Capsule Network (CapsNet) model with activation functions for chest X-ray image classification in pneumonia detection.

The research applies a Deep Learning approach to classify chest X-ray images into two categories: Normal and Pneumonia. This project was developed as part of an undergraduate thesis in Mathematics, with a concentration in Statistics.`,
    objectives: 'Research Objectives',
    objectiveItems: [
      'Implement a Capsule Network architecture for chest X-ray classification.',
      'Apply activation functions within the Capsule Network architecture.',
      'Train the model using a chest X-ray image dataset.',
      'Evaluate the model in classifying Normal and Pneumonia images.',
      'Analyze model performance using classification evaluation metrics.',
    ],
    dataset: 'Dataset',
    datasetText: 'The research uses the Chest X-Ray Images (Pneumonia) dataset from Kaggle, provided by Paul Mooney. The dataset contains 5,863 images in two categories: Normal and Pneumonia.',
    split: 'Dataset Distribution',
    splitHeaders: ['Dataset', 'Images'],
    splitItems: [['Training', '4,099'], ['Validation', '877'], ['Testing', '880'], ['Total', '5,863']],
    methodology: 'Research Methodology',
    methodologyItems: [
      ['Dataset Collection', 'Collecting and preparing the chest X-ray image dataset.'],
      ['Image Preprocessing', 'Preparing images with grayscale color mode and a resolution of 128 × 128 pixels.'],
      ['Data Splitting', 'Organizing the dataset into training, validation, and testing subsets.'],
      ['Model Development', 'Building the Capsule Network architecture and its activation functions.'],
      ['Model Training', 'Training the model using the training dataset.'],
      ['Validation & Evaluation', 'Monitoring validation performance and evaluating predictions on the test dataset.'],
    ],
    architecture: 'Model Architecture',
    architectureText: 'The model uses convolutional feature extraction followed by capsule layers and dynamic routing to produce class representations.',
    architectureItems: [
      ['Convolutional Layer', 'Extracts visual features from input X-ray images.'],
      ['Primary Capsule Layer', 'Transforms extracted features into capsule representations with 8-dimensional vectors.'],
      ['Digit Capsule Layer', 'Produces class-specific capsule representations with 16 dimensions.'],
      ['Dynamic Routing', 'Uses iterative routing to establish relationships between lower-level and higher-level capsules.'],
      ['Squash Activation', 'Scales capsule vectors while preserving their directional information.'],
      ['Margin Loss', 'Optimizes the model output for the two classification categories.'],
    ],
    configuration: 'Model Configuration',
    parameter: 'Parameter',
    value: 'Value',
    config: [
      ['Programming Language', 'Python'],
      ['Framework', 'TensorFlow / Keras'],
      ['Image Size', '128 × 128 pixels'],
      ['Color Mode', 'Grayscale'],
      ['Epochs', '30'],
      ['Batch Size', '16'],
      ['Primary Capsule Dimension', '8'],
      ['Digit Capsule Dimension', '16'],
      ['Optimizer', 'Adam'],
      ['Learning Rate', '0.0001'],
      ['Routing Iterations', '3'],
      ['Positive Margin (m+)', '0.9'],
      ['Negative Margin (m−)', '0.1'],
      ['Lambda', '0.5'],
    ],
    results: 'Experimental Results',
    resultsText: 'The model was evaluated using the test dataset containing 880 images. It correctly classified 848 images, resulting in a test accuracy of 96.36%.',
    training: 'Training Accuracy',
    validation: 'Validation Accuracy',
    testing: 'Test Accuracy',
    loss: 'Test Loss',
    correct: 'Correct Predictions',
    evaluation: 'Classification Report',
    className: 'Class',
    precision: 'Precision',
    recall: 'Recall',
    f1: 'F1-Score',
    support: 'Support',
    report: [
      ['Normal', '0.93', '0.94', '0.93', '238'],
      ['Pneumonia', '0.98', '0.97', '0.97', '642'],
    ],
    metrics: 'Evaluation Metrics',
    metricItems: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'Confusion Matrix'],
    tools: 'Technologies',
    toolsText: 'Tools and libraries used in the research and model development.',
    toolsItems: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Google Colab'],
    documentation: 'Research Documentation',
    thesis: 'Undergraduate Thesis',
    thesisTitle: 'Implementation of Capsule Network Model With Activation Functions for X-ray Image Classification in Pneumonia Detection',
    author: 'Author',
    study: 'Study Program',
    concentration: 'Concentration',
    university: 'University',
    disclaimer: 'Academic Research Disclaimer',
    disclaimerText: 'This project was developed for academic and research purposes. The model is an experimental image classification system and is not a substitute for professional medical diagnosis.',
    repository: 'View GitHub Repository',
    footer: 'DEVELOPED AS AN UNDERGRADUATE RESEARCH PROJECT',
    toc: 'ON THIS PAGE',
    sections: ['Overview', 'Objectives', 'Dataset', 'Methodology', 'Architecture', 'Configuration', 'Results', 'Technologies', 'Documentation'],
  },
  id: {
    back: 'Kembali ke Work',
    eyebrow: 'PROYEK PENELITIAN · 02',
    title: 'Deteksi Pneumonia',
    subtitle: 'Capsule Network untuk Klasifikasi Citra X-ray',
    lead: 'Implementasi model Capsule Network dengan fungsi aktivasi untuk mengklasifikasikan citra X-ray dada ke dalam kategori Normal dan Pneumonia.',
    overview: 'Tentang Penelitian',
    overviewText: `Proyek ini merupakan implementasi model Capsule Network (CapsNet) dengan fungsi aktivasi untuk klasifikasi citra X-ray dalam mendeteksi pneumonia.

Penelitian menerapkan pendekatan Deep Learning untuk mengklasifikasikan citra rontgen dada ke dalam dua kategori, yaitu Normal dan Pneumonia. Proyek ini dikembangkan sebagai bagian dari penelitian skripsi pada Program Studi Matematika dengan peminatan Statistika.`,
    objectives: 'Tujuan Penelitian',
    objectiveItems: [
      'Mengimplementasikan arsitektur Capsule Network untuk klasifikasi citra X-ray.',
      'Menerapkan fungsi aktivasi pada arsitektur Capsule Network.',
      'Melakukan pelatihan model menggunakan dataset citra X-ray.',
      'Mengevaluasi kemampuan model dalam mengklasifikasikan citra Normal dan Pneumonia.',
      'Menganalisis performa model berdasarkan metrik evaluasi klasifikasi.',
    ],
    dataset: 'Dataset',
    datasetText: 'Penelitian menggunakan dataset Chest X-Ray Images (Pneumonia) dari Kaggle yang disediakan oleh Paul Mooney. Dataset terdiri dari 5.863 citra dengan dua kategori, yaitu Normal dan Pneumonia.',
    split: 'Distribusi Dataset',
    splitHeaders: ['Dataset', 'Jumlah Citra'],
    splitItems: [['Pelatihan', '4.099'], ['Validasi', '877'], ['Pengujian', '880'], ['Total', '5.863']],
    methodology: 'Metodologi Penelitian',
    methodologyItems: [
      ['Pengumpulan Dataset', 'Mengumpulkan dan mempersiapkan dataset citra X-ray dada.'],
      ['Pra-pemrosesan Citra', 'Mempersiapkan citra dengan mode grayscale dan resolusi 128 × 128 piksel.'],
      ['Pembagian Dataset', 'Membagi dataset menjadi subset pelatihan, validasi, dan pengujian.'],
      ['Pembangunan Model', 'Membangun arsitektur Capsule Network beserta fungsi aktivasinya.'],
      ['Pelatihan Model', 'Melatih model menggunakan dataset pelatihan.'],
      ['Validasi & Evaluasi', 'Memantau performa validasi dan mengevaluasi prediksi pada dataset pengujian.'],
    ],
    architecture: 'Arsitektur Model',
    architectureText: 'Model menggunakan ekstraksi fitur konvolusional yang dilanjutkan dengan lapisan capsule dan dynamic routing untuk menghasilkan representasi kelas.',
    architectureItems: [
      ['Convolutional Layer', 'Mengekstraksi fitur visual dari citra X-ray masukan.'],
      ['Primary Capsule Layer', 'Mengubah fitur yang diekstraksi menjadi representasi capsule dengan vektor berdimensi 8.'],
      ['Digit Capsule Layer', 'Menghasilkan representasi capsule spesifik kelas dengan dimensi 16.'],
      ['Dynamic Routing', 'Menggunakan proses routing iteratif untuk membangun hubungan antara capsule tingkat bawah dan tingkat atas.'],
      ['Squash Activation', 'Mengatur skala vektor capsule dengan tetap mempertahankan informasi arahnya.'],
      ['Margin Loss', 'Mengoptimalkan keluaran model untuk dua kategori klasifikasi.'],
    ],
    configuration: 'Konfigurasi Model',
    parameter: 'Parameter',
    value: 'Nilai',
    config: [
      ['Bahasa Pemrograman', 'Python'],
      ['Framework', 'TensorFlow / Keras'],
      ['Ukuran Citra', '128 × 128 piksel'],
      ['Mode Warna', 'Grayscale'],
      ['Epoch', '30'],
      ['Batch Size', '16'],
      ['Dimensi Primary Capsule', '8'],
      ['Dimensi Digit Capsule', '16'],
      ['Optimizer', 'Adam'],
      ['Learning Rate', '0,0001'],
      ['Routing Iterations', '3'],
      ['Margin Positif (m+)', '0,9'],
      ['Margin Negatif (m−)', '0,1'],
      ['Lambda', '0,5'],
    ],
    results: 'Hasil Penelitian',
    resultsText: 'Model dievaluasi menggunakan dataset pengujian yang terdiri dari 880 citra. Sebanyak 848 citra berhasil diklasifikasikan dengan benar sehingga menghasilkan akurasi pengujian sebesar 96,36%.',
    training: 'Akurasi Pelatihan',
    validation: 'Akurasi Validasi',
    testing: 'Akurasi Pengujian',
    loss: 'Loss Pengujian',
    correct: 'Prediksi Benar',
    evaluation: 'Classification Report',
    className: 'Kelas',
    precision: 'Precision',
    recall: 'Recall',
    f1: 'F1-Score',
    support: 'Support',
    report: [
      ['Normal', '0,93', '0,94', '0,93', '238'],
      ['Pneumonia', '0,98', '0,97', '0,97', '642'],
    ],
    metrics: 'Metrik Evaluasi',
    metricItems: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'Confusion Matrix'],
    tools: 'Teknologi yang Digunakan',
    toolsText: 'Tools dan library yang digunakan dalam penelitian serta pengembangan model.',
    toolsItems: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Google Colab'],
    documentation: 'Dokumentasi Penelitian',
    thesis: 'Skripsi Sarjana',
    thesisTitle: 'Implementasi Model Capsule Network Dengan Fungsi Aktivasi Untuk Klasifikasi Citra X-ray Dalam Deteksi Pneumonia',
    author: 'Penulis',
    study: 'Program Studi',
    concentration: 'Peminatan',
    university: 'Universitas',
    disclaimer: 'Catatan Penelitian Akademik',
    disclaimerText: 'Proyek ini dikembangkan untuk keperluan akademik dan penelitian. Model merupakan sistem klasifikasi citra eksperimental dan bukan pengganti diagnosis medis profesional.',
    repository: 'Lihat Repository GitHub',
    footer: 'DIKEMBANGKAN SEBAGAI PROYEK PENELITIAN SKRIPSI',
    toc: 'DAFTAR ISI',
    sections: ['Tentang Penelitian', 'Tujuan', 'Dataset', 'Metodologi', 'Arsitektur', 'Konfigurasi', 'Hasil', 'Teknologi', 'Dokumentasi'],
  },
}

const sectionIds = ['overview', 'objectives', 'dataset', 'methodology', 'architecture', 'configuration', 'results', 'tools', 'documentation']

export default function PneumoniaDetail({ language, onBack }) {
  const t = content[language] || content.en
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveSection(visible[0].target.id.replace('pneumonia-', ''))
    }, { rootMargin: '-15% 0px -70% 0px' })

    sectionIds.forEach(id => {
      const el = document.getElementById(`pneumonia-${id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const jumpTo = (id) => {
    document.getElementById(`pneumonia-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.main
      className="pneumonia-detail"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="pneumonia-wrap">
        <button className="pneumonia-back" onClick={onBack}>
          <ArrowLeft size={16} /> {t.back}
        </button>

        <header className="pneumonia-hero">
          <div className="pneumonia-hero-content">
            <span className="pneumonia-eyebrow"><Microscope size={14} /> {t.eyebrow}</span>
            <h1>{t.title}<span>.</span></h1>
            <h2>{t.subtitle}</h2>
            <p>{t.lead}</p>
            <div className="pneumonia-hero-tags">
              <span>Python</span><span>TensorFlow</span><span>Capsule Network</span><span>Computer Vision</span>
            </div>
          </div>
          <div className="pneumonia-visual" aria-hidden="true">
            <div className="pneumonia-scan-ring ring-one" />
            <div className="pneumonia-scan-ring ring-two" />
            <div className="pneumonia-scan-core"><Activity size={54} strokeWidth={1} /></div>
            <div className="pneumonia-scan-line" />
            <span className="pneumonia-particle particle-one" />
            <span className="pneumonia-particle particle-two" />
            <span className="pneumonia-particle particle-three" />
            <span className="scan-label scan-label-top">CAPSNET / 02</span>
            <span className="scan-label scan-label-bottom">IMAGE CLASSIFICATION</span>
          </div>
        </header>

        <div className="pneumonia-layout">
          <aside className="pneumonia-toc">
            <span>{t.toc}</span>
            {sectionIds.map((id, i) => (
              <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => jumpTo(id)}>
                <small>{String(i + 1).padStart(2, '0')}</small>{t.sections[i]}
              </button>
            ))}
          </aside>

          <div className="pneumonia-content">
            <section id="pneumonia-overview" className="pneumonia-section">
              <div className="pneumonia-kicker"><Layers3 size={16} /> 01</div>
              <h2>{t.overview}</h2>
              <p className="pneumonia-preline">{t.overviewText}</p>
            </section>

            <section id="pneumonia-objectives" className="pneumonia-section">
              <div className="pneumonia-kicker"><Workflow size={16} /> 02</div>
              <h2>{t.objectives}</h2>
              <div className="pneumonia-objectives">
                {t.objectiveItems.map((item, i) => <div className="pneumonia-objective" key={i}><span>{String(i + 1).padStart(2, '0')}</span><p>{item}</p></div>)}
              </div>
            </section>

            <section id="pneumonia-dataset" className="pneumonia-section">
              <div className="pneumonia-kicker"><Database size={16} /> 03</div>
              <h2>{t.dataset}</h2>
              <p>{t.datasetText}</p>
              <div className="pneumonia-dataset-total"><strong>5,863</strong><span>{language === 'id' ? 'Citra X-ray' : 'X-ray Images'}</span><div><span>NORMAL</span><span>PNEUMONIA</span></div></div>
              <h3>{t.split}</h3>
              <div className="pneumonia-table">
                {t.splitItems.map((row, i) => <div className={`pneumonia-table-row ${i === 3 ? 'total' : ''}`} key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong></div>)}
              </div>
              <p className="pneumonia-source">Source: <a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia" target="_blank" rel="noreferrer">Chest X-Ray Images (Pneumonia) — Kaggle</a></p>
            </section>

            <section id="pneumonia-methodology" className="pneumonia-section">
              <div className="pneumonia-kicker"><Workflow size={16} /> 04</div>
              <h2>{t.methodology}</h2>
              <div className="pneumonia-timeline">
                {t.methodologyItems.map((item, i) => <div className="pneumonia-step" key={item[0]}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></div>)}
              </div>
            </section>

            <section id="pneumonia-architecture" className="pneumonia-section">
              <div className="pneumonia-kicker"><BrainCircuit size={16} /> 05</div>
              <h2>{t.architecture}</h2>
              <p>{t.architectureText}</p>
              <div className="pneumonia-architecture">
                {t.architectureItems.map((item, i) => <div className="pneumonia-arch-card" key={item[0]}><span>0{i + 1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></div>)}
              </div>
            </section>

            <section id="pneumonia-configuration" className="pneumonia-section">
              <div className="pneumonia-kicker"><Code2 size={16} /> 06</div>
              <h2>{t.configuration}</h2>
              <div className="pneumonia-table config-table">
                {t.config.map(row => <div className="pneumonia-table-row" key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong></div>)}
              </div>
            </section>

            <section id="pneumonia-results" className="pneumonia-section">
              <div className="pneumonia-kicker"><ChartNoAxesCombined size={16} /> 07</div>
              <h2>{t.results}</h2>
              <p>{t.resultsText}</p>
              <div className="pneumonia-metrics">
                {[[t.training, '98.13%'], [t.validation, '96.12%'], [t.testing, '96.36%'], [t.loss, '4.33%']].map(([label, value]) => <div className="pneumonia-metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
              <div className="pneumonia-correct"><ShieldCheck size={20} /><strong>848 / 880</strong><span>{t.correct}</span></div>
              <h3>{t.evaluation}</h3>
              <div className="pneumonia-table report-table">
                <div className="pneumonia-table-row report-head"><span>{t.className}</span><strong>{t.precision}</strong><strong>{t.recall}</strong><strong>{t.f1}</strong><strong>{t.support}</strong></div>
                {t.report.map(row => <div className="pneumonia-table-row report-row" key={row[0]}>{row.map((v, i) => i === 0 ? <span key={i}>{v}</span> : <strong key={i}>{v}</strong>)}</div>)}
              </div>
              <h3>{t.metrics}</h3>
              <div className="pneumonia-metric-tags">{t.metricItems.map(x => <span key={x}>{x}</span>)}</div>
            </section>

            <section id="pneumonia-tools" className="pneumonia-section">
              <div className="pneumonia-kicker"><Code2 size={16} /> 08</div>
              <h2>{t.tools}</h2>
              <p>{t.toolsText}</p>
              <div className="pneumonia-tool-list">{t.toolsItems.map(x => <span key={x}>{x}</span>)}</div>
            </section>

            <section id="pneumonia-documentation" className="pneumonia-section">
              <div className="pneumonia-kicker"><Microscope size={16} /> 09</div>
              <h2>{t.documentation}</h2>
              <div className="pneumonia-thesis">
                <span>{t.thesis}</span>
                <h3>{t.thesisTitle}</h3>
                <div className="pneumonia-thesis-meta">
                  <div><small>{t.author}</small><strong>Alfredo Raul Adamsyah</strong></div>
                  <div><small>{t.study}</small><strong>S1 Mathematics</strong></div>
                  <div><small>{t.concentration}</small><strong>Statistics</strong></div>
                  <div><small>{t.university}</small><strong>Universitas Lampung</strong></div>
                </div>
              </div>
              <div className="pneumonia-disclaimer"><ShieldCheck size={20}/><div><strong>{t.disclaimer}</strong><p>{t.disclaimerText}</p></div></div>
              <a className="pneumonia-repository" href="https://github.com/edo16/capsule-network-pneumonia-detection" target="_blank" rel="noreferrer">{t.repository}<ArrowUpRight size={17}/></a>
            </section>
          </div>
        </div>
        <footer className="pneumonia-footer">{t.footer}</footer>
      </div>
    </motion.main>
  )
}
