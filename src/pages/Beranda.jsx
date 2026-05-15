import React, { useState, useEffect } from 'react';
import '../styles/Beranda.css';

const PHOTOS_PER_PAGE = 6;

const galleryData = {
  SMP: [
    { src: "/baru-5.jpeg",  title: "Kunjungan Industri",   caption: "Kunjungan ke Industri besar SMP Atlantis Plus ke PT. Amerta Indah Otsuka (Pocari Sweat) dalam rangka menjalankan program Entrepreneurship." },
    { src: "/baru-9.jpeg",  title: "Kunjungan Industri",   caption: "Kunjungan ke Industri besar SMP Atlantis Plus ke Nutrifood Serpong dalam rangka menjalankan program Entrepreneurship." },
    { src: "/baru-12.jpeg", title: "Atlantis Talent Day",  caption: "Acara yang diadakan pada bulan Desember di SMP Atlantis Plus, menampilkan pertunjukan siswa termasuk tari, musik, dan teater, yang berfungsi sebagai puncak pertemuan kelas mereka dengan alumni." },
    { src: "/baru-4.jpg",   title: "Outing Class",         caption: "SMP Atlantis Plus goes to Yogyakarta - Belajar tidak hanya di dalam kelas, tetapi juga dari setiap perjalanan dan pengalaman. \"Traveling is part of learning, and learning becomes meaningful through experience.\"" },
    { src: "/baru-11.jpeg", title: "Keagamaan",            caption: "Melalui kegiatan rutin sholat dhuha, tadarus Al-Qur'an, dan hafalan, siswa-siswi SMP Atlantis Plus dibiasakan untuk menanamkan nilai disiplin, ketenangan hati, serta kecintaan terhadap Al-Qur'an sejak dini." },
    { src: "/baru-2.JPG",   title: "Kokurikuler",          caption: "Belajar menjadi lebih bermakna ketika pengetahuan dipadukan dengan pengalaman nyata untuk mengembangkan kreativitas, kerja sama, kepemimpinan, serta kemampuan berpikir kritis melalui berbagai aktivitas yang menyenangkan dan inspiratif." },
  ],
  SMK: [
    { src: "/baru-8.jpeg",  title: "Kunjungan Industri",      caption: "Kunjungan ke Industri SMK Atlantis Plus ke Agate International di Bandung dalam rangka mendalami industri kreatif dan pengembangan game langsung dari salah satu pionir terbesar di Indonesia." },
    { src: "/baru-7.jpeg",  title: "Kunjungan Industri",      caption: "Kunjungan Industri SMK Atlantis Plus ke Jabodetabek, mulai dari industri besar, kampus dan lainnya." },
    { src: "/baru-10.jpeg", title: "Pagelaran Seni Budaya",   caption: "Melalui Pagelaran Seni Budaya, siswa-siswi SMK Atlantis Plus menampilkan beragam pertunjukan seni sebagai bentuk ekspresi, pelestarian budaya, serta pengembangan bakat dan kreativitas." },
    { src: "/baru-1.JPG",   title: "Atlantis Exhibition",     caption: "Karya, kreativitas, dan inovasi siswa-siswi SMK Atlantis Plus hadir dalam satu panggung inspiratif. Pameran karya keberanian yang berkolaborasi dengan industri bidang teknologi, bisnis, kesehatan, multimedia." },
    { src: "/baru-6.jpeg",  title: "ANTV",                    caption: "Salah satu tempat magang/prakerin siswa-siswi SMK Atlantis Plus, dan masih banyak lagi yang lainnya." },
    { src: "/baru-13.jpeg", title: "Kolaborasi",              caption: "Siswa-siswi SMK Atlantis Plus berkesempatan mengikuti kegiatan inspiratif bersama Atourin dalam program Games Nusantara. Melalui kegiatan ini, peserta didik diajak mengenal kekayaan budaya Indonesia dengan cara yang kreatif, interaktif, dan menyenangkan. Tidak hanya bermain, tetapi juga belajar tentang budaya, kerja sama, strategi, serta semangat kebhinekaan." },
  ],
};

const newsData = [
  {
    title: "17 Agustus Event",
    description: "Kegiatan Sholat Dhuha rutin diadakan setiap pagi hari tepatnya saat pertama kali siswa dan siswi masuk.",
    date: "17 Agustus 2025",
    highlight: true,
  },
  {
    title: "LDKS Angkatan 12",
    description: "Kegiatan Sholat Dhuha rutin diadakan setiap pagi hari tepatnya saat pertama kali siswa dan siswi masuk.",
    date: "",
    highlight: false,
  },
  {
    title: "Maulid Nabi",
    description: "Kegiatan Sholat Dhuha rutin diadakan setiap pagi hari tepatnya saat pertama kali siswa dan siswi masuk.",
    date: "5 September 2025",
    highlight: false,
  },
];

const Beranda = () => {
  const [activeTab, setActiveTab] = useState('SMP');
  const [currentPage, setCurrentPage] = useState(0);
  const [modalPhoto, setModalPhoto] = useState(null);

  const photos = galleryData[activeTab];
  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);
  const currentPhotos = photos.slice(currentPage * PHOTOS_PER_PAGE, (currentPage + 1) * PHOTOS_PER_PAGE);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const openModal = (photo) => setModalPhoto(photo);
  const closeModal = () => setModalPhoto(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="beranda-container">
      <section className="hero">
        <div className="hero-overlay">
          <h1><span className="highlight">ATLANTIS</span> <span className="yellow">PLUS</span></h1>
          <p className="subtitle">Creative and Technopreneur School</p>
          <div className="school-buttons">
            <button className="school-btn">
              <img src="/smplogonav.png" alt="SMP" />
              SMP Atlantis Plus
            </button>
            <button className="school-btn">
              <img src="/smklogonav.png" alt="SMK" />
              SMK Atlantis Plus
            </button>
          </div>
        </div>
      </section>

      <section className="who-we-are">
        <h2>Tentang Kami</h2>
        <p>
          Atlantis Technopreneur School merupakan lembaga pendidikan yang berada di bawah naungan Yayasan Kebangkitan Peradaban Nusantara, hadir sebagai bagian dari keluarga besar Atlantis dalam membangun generasi pembelajar yang berkarakter, inovatif, dan berdaya saing global.
        </p>
        <p>
          Melalui jenjang Sekolah Menengah Pertama dan Sekolah Menengah Kejuruan, kami berkomitmen menghadirkan pendidikan yang memadukan akademik, karakter, kepemimpinan, teknologi, serta jiwa entrepreneur dalam lingkungan belajar yang positif, kreatif, dan inspiratif.
        </p>
        <p>
          Atlantis Technopreneur School percaya bahwa setiap peserta didik memiliki potensi untuk tumbuh menjadi pribadi unggul yang siap menghadapi tantangan masa depan serta mampu memberikan kontribusi terbaik bagi masyarakat, bangsa, dan peradaban.
        </p>
      </section>

      <section className="beranda-gallery-new">
        <div className="beranda-gallery-header">
          <h2 className="beranda-gallery-title">
            <span className="red-text">Gallery</span> Atlantis Plus
          </h2>
          <div className="beranda-gallery-tabs">
            {['SMP', 'SMK'].map(tab => (
              <button
                key={tab}
                className={`beranda-gallery-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="beranda-gallery-grid">
          {currentPhotos.map((photo, i) => (
            <div key={i} className="beranda-gallery-card" onClick={() => openModal(photo)}>
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <div className="beranda-gallery-card-overlay">
                <span>🔍 Lihat Foto</span>
              </div>
            </div>
          ))}
        </div>

        <div className="beranda-gallery-nav">
          <button
            className="beranda-gallery-arrow"
            onClick={() => setCurrentPage(p => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
          >
            &#8592;
          </button>
          <div className="beranda-gallery-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`beranda-gallery-dot ${currentPage === i ? 'active' : ''}`}
                onClick={() => setCurrentPage(i)}
              />
            ))}
          </div>
          <button
            className="beranda-gallery-arrow"
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
          >
            &#8594;
          </button>
        </div>
      </section>

      <section>
        <div className='beranda-image-school-section'>
          <img src="/school-image.jpg" alt="school-image" />
        </div>
      </section>


      <section className="kegiatan-section">
        <h2 className="kegiatan-title">Our Activity</h2>
        <div className="kegiatan-cards">

          {/* SHOLAT DHUHA */}
          <div className="kegiatan-card">
            <div className="kegiatan-card-icon" style={{ background: "linear-gradient(135deg, #f0c040 0%, #e8832a 100%)" }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Matahari */}
                <circle cx="50" cy="32" r="13" fill="#fff176"/>
                {/* Sinar matahari */}
                {[0,45,90,135,180,225,270,315].map((deg, i) => (
                  <line key={i}
                    x1={50 + 17 * Math.cos(deg * Math.PI/180)}
                    y1={32 + 17 * Math.sin(deg * Math.PI/180)}
                    x2={50 + 23 * Math.cos(deg * Math.PI/180)}
                    y2={32 + 23 * Math.sin(deg * Math.PI/180)}
                    stroke="#fff176" strokeWidth="2.5" strokeLinecap="round"/>
                ))}
                {/* Masjid - kubah */}
                <ellipse cx="50" cy="57" rx="18" ry="12" fill="#ffffff"/>
                {/* Badan masjid */}
                <rect x="32" y="57" width="36" height="22" rx="2" fill="#ffffff"/>
                {/* Pintu */}
                <rect x="44" y="65" width="12" height="14" rx="6" fill="#e8832a"/>
                {/* Menara kiri */}
                <rect x="26" y="52" width="7" height="27" rx="2" fill="#ffe082"/>
                <ellipse cx="29.5" cy="52" rx="4" ry="5" fill="#ffe082"/>
                {/* Menara kanan */}
                <rect x="67" y="52" width="7" height="27" rx="2" fill="#ffe082"/>
                <ellipse cx="70.5" cy="52" rx="4" ry="5" fill="#ffe082"/>
                {/* Bintang bulan */}
                <text x="44" y="56" fontSize="10" fill="#e8832a">☽</text>
              </svg>
            </div>
            <div className="kegiatan-card-judul">SHOLAT DHUHA</div>
            <div className="kegiatan-card-desc">Kegiatan sholat dhuha rutin dilaksanakan setiap pagi sebelum proses pembelajaran dalam rangka membentuk pembiasaan religius.</div>
          </div>

          {/* TADARUS */}
          <div className="kegiatan-card">
            <div className="kegiatan-card-icon" style={{ background: "linear-gradient(135deg, #43c6ac 0%, #1976d2 100%)" }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Buku Al-Quran terbuka */}
                <path d="M50 22 Q35 25 22 30 L22 75 Q35 70 50 68 Q65 70 78 75 L78 30 Q65 25 50 22Z" fill="#ffffff"/>
                <path d="M50 22 L50 68" stroke="#1976d2" strokeWidth="2"/>
                {/* Halaman kiri */}
                <path d="M48 28 Q36 30 26 34 L26 70 Q36 66 48 64Z" fill="#e3f2fd"/>
                {/* Halaman kanan */}
                <path d="M52 28 Q64 30 74 34 L74 70 Q64 66 52 64Z" fill="#e3f2fd"/>
                {/* Tulisan kiri */}
                <line x1="30" y1="40" x2="46" y2="38" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                <line x1="30" y1="46" x2="46" y2="44" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                <line x1="30" y1="52" x2="46" y2="50" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                <line x1="30" y1="58" x2="40" y2="57" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/>
                {/* Tulisan kanan */}
                <line x1="54" y1="40" x2="70" y2="38" stroke="#43c6ac" strokeWidth="2" strokeLinecap="round"/>
                <line x1="54" y1="46" x2="70" y2="44" stroke="#43c6ac" strokeWidth="2" strokeLinecap="round"/>
                <line x1="54" y1="52" x2="70" y2="50" stroke="#43c6ac" strokeWidth="2" strokeLinecap="round"/>
                <line x1="54" y1="58" x2="64" y2="57" stroke="#43c6ac" strokeWidth="2" strokeLinecap="round"/>
                {/* Bintang bulan */}
                <circle cx="50" cy="15" r="5" fill="#ffe082"/>
                <circle cx="54" cy="13" r="3.5" fill="#43c6ac"/>
                <polygon points="58,10 59,14 63,14 60,16 61,20 58,18 55,20 56,16 53,14 57,14" fill="#ffe082" transform="scale(0.55) translate(47, 5)"/>
              </svg>
            </div>
            <div className="kegiatan-card-judul">TADARUS</div>
            <div className="kegiatan-card-desc">Membaca Al-Qur'an setelah pelaksanaan sholat dhuha menjadi salah satu ikhtiar membangun kebiasaan baik dan menanamkan nilai-nilai spiritual dalam kehidupan sehari-hari.</div>
          </div>

          {/* PRAKTEK BELAJAR */}
          <div className="kegiatan-card">
            <div className="kegiatan-card-icon" style={{ background: "linear-gradient(135deg, #f953c6 0%, #ec3237 50%, #f97316 100%)" }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Laptop body */}
                <rect x="18" y="30" width="64" height="40" rx="4" fill="#ffffff"/>
                <rect x="22" y="34" width="56" height="32" rx="2" fill="#1a237e"/>
                {/* Layar: kode */}
                <line x1="27" y1="42" x2="42" y2="42" stroke="#69f0ae" strokeWidth="2" strokeLinecap="round"/>
                <line x1="27" y1="48" x2="50" y2="48" stroke="#40c4ff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="27" y1="54" x2="38" y2="54" stroke="#ff80ab" strokeWidth="2" strokeLinecap="round"/>
                <line x1="27" y1="60" x2="45" y2="60" stroke="#69f0ae" strokeWidth="2" strokeLinecap="round"/>
                {/* Grafik/chart di layar */}
                <rect x="55" y="56" width="6" height="8" rx="1" fill="#f97316"/>
                <rect x="63" y="50" width="6" height="14" rx="1" fill="#ec3237"/>
                <rect x="71" y="44" width="5" height="20" rx="1" fill="#f953c6"/>
                {/* Kursor */}
                <polygon points="48,42 52,50 50,49 49,54 47,49 45,50" fill="#ffffff"/>
                {/* Base laptop */}
                <rect x="12" y="70" width="76" height="5" rx="2.5" fill="#e0e0e0"/>
                <rect x="35" y="70" width="30" height="3" rx="1.5" fill="#bdbdbd"/>
                {/* Bintang ilmu */}
                <circle cx="79" cy="28" r="8" fill="#ffe082"/>
                <text x="75" y="32" fontSize="10" fill="#f97316" fontWeight="bold">✦</text>
              </svg>
            </div>
            <div className="kegiatan-card-judul">KONSEP BELAJAR</div>
            <div className="kegiatan-card-desc">Atlantis Technopreneur School menerapkan sistem pembelajaran 30% Teori; 70% Praktik Penerapan dalam mencapai tujuan pembelajaran.</div>
          </div>

          {/* KUNJUNGAN */}
          <div className="kegiatan-card">
            <div className="kegiatan-card-icon" style={{ background: "linear-gradient(135deg, #a18cd1 0%, #6c63ff 50%, #3b82f6 100%)" }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Jalan */}
                <rect x="10" y="72" width="80" height="10" rx="3" fill="#90a4ae"/>
                <line x1="25" y1="77" x2="35" y2="77" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,3"/>
                <line x1="45" y1="77" x2="55" y2="77" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,3"/>
                <line x1="65" y1="77" x2="75" y2="77" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,3"/>
                {/* Bus badan */}
                <rect x="15" y="40" width="70" height="33" rx="6" fill="#ffffff"/>
                {/* Atap bus */}
                <rect x="18" y="33" width="64" height="12" rx="5" fill="#ffe082"/>
                {/* Jendela kiri */}
                <rect x="22" y="45" width="14" height="12" rx="3" fill="#81d4fa"/>
                <rect x="40" y="45" width="14" height="12" rx="3" fill="#81d4fa"/>
                <rect x="58" y="45" width="14" height="12" rx="3" fill="#81d4fa"/>
                {/* Pintu */}
                <rect x="67" y="57" width="13" height="16" rx="2" fill="#b0bec5"/>
                {/* Ban */}
                <circle cx="27" cy="75" r="6" fill="#37474f"/>
                <circle cx="27" cy="75" r="3" fill="#90a4ae"/>
                <circle cx="73" cy="75" r="6" fill="#37474f"/>
                <circle cx="73" cy="75" r="3" fill="#90a4ae"/>
                {/* Lampu depan */}
                <rect x="76" y="48" width="8" height="5" rx="2" fill="#ffe082"/>
                {/* Tulisan bus */}
                <rect x="22" y="35" width="35" height="7" rx="2" fill="#6c63ff"/>
                <text x="24" y="41" fontSize="5.5" fill="#ffffff" fontWeight="bold">ATLANTIS PLUS</text>
                {/* Awan */}
                <ellipse cx="25" cy="25" rx="12" ry="7" fill="rgba(255,255,255,0.5)"/>
                <ellipse cx="35" cy="22" rx="10" ry="7" fill="rgba(255,255,255,0.5)"/>
                <ellipse cx="44" cy="25" rx="9" ry="6" fill="rgba(255,255,255,0.5)"/>
              </svg>
            </div>
            <div className="kegiatan-card-judul">KUNJUNGAN</div>
            <div className="kegiatan-card-desc">Atlantis Technopreneur School juga memiliki program kunjungan industri/pusat edukasi lainnya dalam rangka memberikan pengalaman langsung untuk memperluas wawasan, membentuk karakter, serta meningkatkan keterampilan siswa secara interaktif.</div>
          </div>

        </div>
      </section>


      {modalPhoto && (
        <div className="gallery-modal-backdrop" onClick={closeModal}>
          <div className="gallery-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>&#10005;</button>
            <img src={modalPhoto.src} alt={modalPhoto.title} className="gallery-modal-img" />
            <div className="gallery-modal-caption">
              <h3 className="gallery-modal-title">{modalPhoto.title}</h3>
              <p className="gallery-modal-desc">{modalPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beranda;