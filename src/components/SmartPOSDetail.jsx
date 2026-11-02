import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ArrowUpRight, ExternalLink,
  X, ChevronRight, Layers3, Database, BarChart3,
  ShieldCheck, Workflow, Code2
} from 'lucide-react'
import './SmartPOSDetail.css'

const images = [
  ['dashboard.png', 'Dashboard'],
  ['pos.png', 'Point of Sale'],
  ['inventory.png', 'Inventory'],
  ['transactions.png', 'Transactions'],
  ['customers.png', 'Customers'],
  ['expenses.png', 'Expenses'],
  ['analytics.png', 'Analytics'],
  ['prediction.png', 'Prediction'],
  ['recap.png', 'Recap'],
  ['settings.png', 'Settings'],
]

const content = {
  en: {
    back: 'Back to Work',
    eyebrow: 'PROJECT DOCUMENTATION · 01',
    title: 'SmartPOS',
    subtitle: 'Point of Sale Management System',
    lead: 'A web-based point-of-sale application designed to support sales recording, inventory control, transaction monitoring, and operational performance analysis.',
    overview: 'Project Overview',
    overviewText: 'SmartPOS is a point-of-sale management system developed as a portfolio project. It brings essential store operations into one application, from recording sales and managing products to monitoring business performance. The application is organized into ten main modules that support daily operational workflows.',
    objectives: 'Development Objectives',
    objectiveItems: [
      'Centralize sales transactions and operational records in one application.',
      'Make product and stock management easier to monitor.',
      'Provide clear summaries of revenue, transactions, expenses, and business performance.',
      'Support cash and QRIS payment recording.',
      'Provide transaction history and refund management.',
      'Explore historical sales data as a basis for short-term operational estimates.',
      'Present business information through dashboards and visualizations.',
    ],
    technology: 'Tools & Technologies',
    technologyText: 'The application uses a web-based frontend connected to an Express backend and a PostgreSQL database. Prisma manages database access, while Chart.js and Socket.IO support visualization and real-time updates.',
    architecture: [
      ['Frontend', 'HTML5, CSS3, JavaScript'],
      ['Backend', 'Node.js, Express.js'],
      ['Database & ORM', 'PostgreSQL, Prisma ORM'],
      ['Visualization', 'Chart.js'],
      ['Real-time', 'Socket.IO'],
      ['Local serving', 'Python HTTP Server'],
    ],
    modules: 'Application Modules',
    modulesIntro: 'SmartPOS is organized into ten modules, each supporting a different part of store operations.',
    moduleItems: [
      ['Dashboard', 'Provides an overview of business performance through key indicators: Revenue, Transactions, Average Transaction Value, and Gross Profit. It includes comparisons with the previous period, sales charts, recent transactions, and filters for Today, 7 Days, 30 Days, and Custom Date Range.'],
      ['Point of Sale (POS)', 'Supports the sales process through product selection, quantity adjustment, automatic total calculation, and payment method selection using Cash or QRIS. Completed transactions are recorded and inventory stock is updated.'],
      ['Inventory', 'Manages product records, categories, and stock quantities. Users can add, edit, and delete products. Deleted products can be accessed through Trash and restored when needed.'],
      ['Transactions', 'Displays transaction history, payment methods, details, and statuses. The module also supports refund requests, refund history, cash or QRIS/transfer returns, confirmation or cancellation, and Pending, Completed, and Cancelled refund statuses.'],
      ['Customers', 'Provides customer records and tools to add, edit, manage, and search customer information.'],
      ['Expenses', 'Records and manages operational expenses, displays expense history, and provides totals based on the selected period.'],
      ['Analytics', 'Presents revenue trends, transaction activity, product sales, best-selling products, key performance indicators, and business data visualizations.'],
      ['Prediction', 'Uses the Historical Median method to estimate revenue for the next seven operational days. It identifies days with sales and calculates the median of historical daily revenue, while showing the number of active historical days. A warning is displayed when fewer than 30 historical days are available. This is a baseline statistical approach; prediction accuracy is not claimed without further testing.'],
      ['Recap', 'Provides summaries of sales, transactions over selected periods, and other operational information for review.'],
      ['Settings', 'Contains store profile settings, access-related settings, operational data controls, and backup and restore utilities.'],
    ],
    process: 'Application Development Process',
    processItems: [
      ['Application Design', 'Defining the application structure, operational modules, user flows, and information required by each module.'],
      ['Frontend Development', 'Building the interface and interactions with HTML, CSS, and JavaScript, including dashboard visualizations.'],
      ['Backend Development', 'Implementing API endpoints and business logic with Node.js and Express.js.'],
      ['Database Management', 'Designing relational data structures and managing database access with PostgreSQL and Prisma ORM.'],
      ['Real-time Integration', 'Using Socket.IO to support real-time communication and application updates.'],
      ['Testing & Validation', 'Checking application workflows, data consistency, transaction handling, and module interactions. Further testing and security review are required before production use.'],
    ],
    gallery: 'Dashboard & Application Interface',
    galleryIntro: 'A visual overview of the ten main modules in SmartPOS. Select an image to view it in a larger format.',
    clickZoom: 'Select an image to enlarge',
    footer: 'BUILT AS A PORTFOLIO PROJECT',
    close: 'Close image',
    tech: 'Technology Stack',
  },
  id: {
    back: 'Kembali ke Work',
    eyebrow: 'DOKUMENTASI PROYEK · 01',
    title: 'SmartPOS',
    subtitle: 'Sistem Manajemen Point of Sale',
    lead: 'Aplikasi point of sale berbasis web yang dirancang untuk mendukung pencatatan penjualan, pengelolaan inventaris, pemantauan transaksi, dan analisis kinerja operasional.',
    overview: 'Tentang Proyek',
    overviewText: `SmartPOS merupakan aplikasi Point of Sale (POS) berbasis web yang dirancang untuk membantu mengelola transaksi penjualan dan operasional bisnis secara terintegrasi. Aplikasi ini memiliki sepuluh menu utama, yaitu Dashboard, Point of Sale, Inventory, Transactions, Customers, Expenses, Analytics, Prediksi, Recap, dan Settings.

Fitur-fitur tersebut mendukung berbagai aktivitas operasional bisnis, mulai dari pencatatan transaksi penjualan, pengelolaan produk dan persediaan stok, pemantauan riwayat transaksi dan pengembalian dana (refund), pengelolaan data pelanggan, pencatatan pengeluaran operasional, analisis performa penjualan, estimasi pendapatan berdasarkan data historis, hingga penyusunan rekapitulasi laporan bisnis.

SmartPOS dikembangkan menggunakan HTML, CSS, dan JavaScript untuk membangun antarmuka pengguna, serta Node.js dan Express.js untuk menangani logika backend dan layanan API. Pengelolaan basis data menggunakan Prisma ORM dan PostgreSQL, sedangkan Chart.js digunakan untuk mendukung visualisasi data dan Socket.IO menyediakan kemampuan komunikasi real-time sesuai implementasi aplikasi. Selain itu, aplikasi ini dilengkapi dengan utilitas pelaporan dan pencadangan data untuk mendukung pengelolaan serta pemeliharaan sistem.

Proyek ini dikembangkan sebagai personal portfolio project untuk menerapkan keterampilan dalam pengembangan aplikasi web, pengelolaan basis data, pemrosesan transaksi, visualisasi data, dan analisis statistik guna mendukung operasional bisnis yang lebih efisien serta pengambilan keputusan berbasis data.`,
    objectives: 'Tujuan Pengembangan',
    objectiveItems: [
      'Memusatkan pencatatan transaksi penjualan dan operasional dalam satu aplikasi.',
      'Mempermudah pemantauan produk dan pengelolaan stok.',
      'Menyediakan ringkasan pendapatan, transaksi, pengeluaran, dan kinerja bisnis.',
      'Mendukung pencatatan pembayaran tunai dan QRIS.',
      'Menyediakan riwayat transaksi dan pengelolaan refund.',
      'Mengeksplorasi data penjualan historis sebagai dasar estimasi operasional jangka pendek.',
      'Menyajikan informasi bisnis melalui dashboard dan visualisasi data.',
    ],
    technology: 'Tools & Technologies',
    technologyText: 'Aplikasi menggunakan frontend berbasis web yang terhubung dengan backend Express dan database PostgreSQL. Prisma digunakan untuk pengelolaan akses database, sedangkan Chart.js dan Socket.IO mendukung visualisasi serta pembaruan real-time.',
    architecture: [
      ['Frontend', 'HTML5, CSS3, JavaScript'],
      ['Backend', 'Node.js, Express.js'],
      ['Database & ORM', 'PostgreSQL, Prisma ORM'],
      ['Visualisasi', 'Chart.js'],
      ['Real-time', 'Socket.IO'],
      ['Server lokal', 'Python HTTP Server'],
    ],
    modules: 'Modul dan Fitur Aplikasi',
    modulesIntro: 'SmartPOS terdiri dari sepuluh modul yang masing-masing mendukung bagian berbeda dari operasional toko.',
    moduleItems: [
      ['Dashboard', 'Menampilkan gambaran kinerja bisnis melalui indikator utama: Revenue, Transactions, Average Transaction Value, dan Gross Profit. Tersedia perbandingan dengan periode sebelumnya, grafik penjualan, transaksi terbaru, serta filter Today, 7 Days, 30 Days, dan Custom Date Range.'],
      ['Point of Sale (POS)', 'Mendukung proses penjualan melalui pemilihan produk, pengaturan kuantitas, perhitungan total otomatis, dan pemilihan metode pembayaran Cash atau QRIS. Transaksi yang diselesaikan akan dicatat dan stok inventaris diperbarui.'],
      ['Inventory', 'Mengelola data produk, kategori, dan jumlah stok. Pengguna dapat menambahkan, mengedit, dan menghapus produk. Produk yang dihapus dapat diakses melalui Sampah dan dipulihkan kembali ketika diperlukan.'],
      ['Transactions', 'Menampilkan riwayat transaksi, metode pembayaran, detail, dan status transaksi. Modul ini juga mendukung permintaan refund, riwayat refund, pengembalian dana tunai atau QRIS/transfer, konfirmasi atau pembatalan, serta status Pending, Completed, dan Cancelled.'],
      ['Customers', 'Menyediakan pencatatan pelanggan serta fitur untuk menambahkan, mengedit, mengelola, dan mencari informasi pelanggan.'],
      ['Expenses', 'Mencatat dan mengelola pengeluaran operasional, menampilkan riwayat pengeluaran, serta menyediakan total berdasarkan periode yang dipilih.'],
      ['Analytics', 'Menyajikan tren pendapatan, aktivitas transaksi, penjualan produk, produk terlaris, indikator kinerja utama, dan visualisasi data bisnis.'],
      ['Prediction', 'Menggunakan metode Historical Median untuk mengestimasi pendapatan tujuh hari operasional berikutnya. Metode ini mengidentifikasi hari yang memiliki penjualan dan menghitung median pendapatan harian historis, serta menampilkan jumlah hari historis aktif. Peringatan ditampilkan apabila data historis kurang dari 30 hari. Metode ini merupakan pendekatan statistik dasar; akurasi prediksi tidak diklaim sebelum pengujian lebih lanjut.'],
      ['Recap', 'Menyediakan ringkasan penjualan, transaksi berdasarkan periode tertentu, dan informasi operasional lainnya untuk ditinjau.'],
      ['Settings', 'Memuat pengaturan profil toko, pengaturan terkait akses, pengelolaan data operasional, serta utilitas backup dan restore.'],
    ],
    process: 'Proses Pengembangan Aplikasi',
    processItems: [
      ['Perancangan Aplikasi', 'Menentukan struktur aplikasi, modul operasional, alur pengguna, dan informasi yang dibutuhkan setiap modul.'],
      ['Pengembangan Frontend', 'Membangun antarmuka dan interaksi menggunakan HTML, CSS, dan JavaScript, termasuk visualisasi pada dashboard.'],
      ['Pengembangan Backend', 'Mengimplementasikan endpoint API dan logika bisnis menggunakan Node.js dan Express.js.'],
      ['Pengelolaan Database', 'Merancang struktur data relasional dan mengelola akses database menggunakan PostgreSQL dan Prisma ORM.'],
      ['Integrasi Real-time', 'Menggunakan Socket.IO untuk mendukung komunikasi dan pembaruan aplikasi secara real-time.'],
      ['Pengujian & Validasi', 'Memeriksa alur aplikasi, konsistensi data, pengelolaan transaksi, dan interaksi antar-modul. Pengujian tambahan serta peninjauan keamanan tetap diperlukan sebelum penggunaan produksi.'],
    ],
    gallery: 'Dashboard & Antarmuka Aplikasi',
    galleryIntro: 'Gambaran visual sepuluh modul utama SmartPOS. Pilih gambar untuk melihatnya dalam ukuran lebih besar.',
    clickZoom: 'Pilih gambar untuk memperbesar',
    footer: 'DIBANGUN SEBAGAI PROYEK PORTOFOLIO',
    close: 'Tutup gambar',
    tech: 'Teknologi yang Digunakan',
  },
}

export default function SmartPOSDetail({ language, onBack }) {
  const t = content[language] || content.en
  const [zoomed, setZoomed] = useState(null)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setZoomed(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const sections = [
    ['overview', t.overview],
    ['objectives', t.objectives],
    ['technology', t.technology],
    ['modules', t.modules],
    ['process', t.process],
    ['gallery', t.gallery],
  ]

  return (
    <motion.div
      className="smartpos-detail"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="smartpos-detail-wrap">
        <button className="smartpos-back" onClick={onBack}>
          <ArrowLeft size={16} /> {t.back}
        </button>

        <header className="smartpos-hero">
          <span className="smartpos-eyebrow">{t.eyebrow}</span>
          <h1>{t.title}<span>.</span></h1>
          <h2>{t.subtitle}</h2>
          <p>{t.lead}</p>
          <div className="smartpos-hero-actions">
            <span>HTML · CSS · JavaScript · Node.js · PostgreSQL</span>
          </div>
          <div className="smartpos-hero-orb smartpos-satellite-scene" aria-hidden="true">
            <div className="satellite-glow" />
            <div className="satellite-orbit satellite-orbit-one" />
            <div className="satellite-orbit satellite-orbit-two" />

            <div className="satellite">
              <div className="satellite-panel panel-left">
                <span /><span /><span /><span />
              </div>
              <div className="satellite-body">
                <div className="satellite-window" />
                <div className="satellite-detail" />
              </div>
              <div className="satellite-panel panel-right">
                <span /><span /><span /><span />
              </div>
              <div className="satellite-antenna" />
              <div className="satellite-signal" />
            </div>

            <span className="satellite-data data-one" />
            <span className="satellite-data data-two" />
            <span className="satellite-data data-three" />
            <span className="satellite-star star-one" />
            <span className="satellite-star star-two" />
            <span className="satellite-star star-three" />
            <span className="satellite-caption">SMART SYSTEM · CONNECTED</span>
          </div>
        </header>

        <div className="smartpos-doc-layout">
          <aside className="smartpos-toc">
            <span>{language === 'en' ? 'ON THIS PAGE' : 'DAFTAR ISI'}</span>
            {sections.map(([id, label], index) => (
              <a
                href={`#smartpos-${id}`}
                key={id}
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById(`smartpos-${id}`)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}
              >
                <small>{String(index + 1).padStart(2, '0')}</small>
                {label}
                <ChevronRight size={13} />
              </a>
            ))}
          </aside>

          <div className="smartpos-doc-content">
            <section id="smartpos-overview" className="smartpos-doc-section">
              <div className="smartpos-section-kicker"><Layers3 size={16} /> 01</div>
              <h2>{t.overview}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{t.overviewText}</p>
            </section>

            <section id="smartpos-objectives" className="smartpos-doc-section">
              <div className="smartpos-section-kicker"><Workflow size={16} /> 02</div>
              <h2>{t.objectives}</h2>
              <ul className="smartpos-check-list">
                {t.objectiveItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section id="smartpos-technology" className="smartpos-doc-section">
              <div className="smartpos-section-kicker"><Code2 size={16} /> 03</div>
              <h2>{t.technology}</h2>
              <p>{t.technologyText}</p>
              <div className="smartpos-tech-grid">
                {t.architecture.map(([name, value]) => (
                  <article key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </article>
                ))}
              </div>
            </section>

            <section id="smartpos-modules" className="smartpos-doc-section">
              <div className="smartpos-section-kicker"><Database size={16} /> 04</div>
              <h2>{t.modules}</h2>
              <p>{t.modulesIntro}</p>
              <div className="smartpos-module-list">
                {t.moduleItems.map(([name, description], index) => (
                  <article key={name} className="smartpos-module">
                    <span className="smartpos-module-number">{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{name}</h3><p>{description}</p></div>
                  </article>
                ))}
              </div>
            </section>

            <section id="smartpos-process" className="smartpos-doc-section">
              <div className="smartpos-section-kicker"><BarChart3 size={16} /> 05</div>
              <h2>{t.process}</h2>
              <div className="smartpos-process-grid">
                {t.processItems.map(([name, description], index) => (
                  <article key={name}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="smartpos-gallery" className="smartpos-doc-section">
              <div className="smartpos-section-kicker"><BarChart3 size={16} /> 06</div>
              <h2>{t.gallery}</h2>
              <p>{t.galleryIntro}</p>
              <div className="smartpos-gallery">
                {images.map(([file, label], index) => (
                  <button key={file} onClick={() => setZoomed(index)}>
                    <div className="smartpos-gallery-image">
                      <img
                        src={`/images/projects/smartpos/${file}`}
                        alt={`${label} SmartPOS`}
                        loading="lazy"
                      />
                      <span><ArrowUpRight size={17} /></span>
                    </div>
                    <div className="smartpos-gallery-caption">
                      <small>{String(index + 1).padStart(2, '0')}</small>
                      <strong>{label}</strong>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <a className="smartpos-repo-bottom" href="https://github.com/edo16/SmartPoss" target="_blank" rel="noreferrer">
              <Code2 size={18} /> GitHub Repository <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <footer className="smartpos-detail-footer">
          <span>{t.footer}</span><span>© 2026 ALFREDO RAUL ADAMSYAH</span>
        </footer>
      </div>

      <AnimatePresence>
        {zoomed !== null && (
          <motion.div
            className="smartpos-zoom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(null)}
          >
            <button aria-label={t.close} onClick={() => setZoomed(null)}><X size={22} /></button>
            <motion.img
              src={`/images/projects/smartpos/${images[zoomed][0]}`}
              alt={images[zoomed][1]}
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            />
            <span>{String(zoomed + 1).padStart(2, '0')} / 10 · {images[zoomed][1]}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
