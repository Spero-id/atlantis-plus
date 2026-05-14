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
        <div className="bg-left-kegiatan"></div>
        <div className="bg-right-kegiatan"></div>
        <h2 className="kegiatan-title">Our Activity</h2>
        <div className="kegiatan-cards">
          <div className="kegiatan-card">
            <div className="kegiatan-card-img" style={{ backgroundImage: "url('/SholatImage.png')" }}></div>
            <div className="kegiatan-card-judul">SHOLAT DHUHA</div>
            <div className="kegiatan-card-desc">Kegiatan Sholat Dhuha rutin diadakan setiap pagi 
              hari tepatnya saat pertama kali siswa dan siswi masuk sekolah dalam rangka membentuk religius</div>
          </div>
          <div className="kegiatan-card">
            <div className="kegiatan-card-img" style={{ backgroundImage: "url('/TadarusImage.png')" }}></div>
            <div className="kegiatan-card-judul">TADARUS</div>
            <div className="kegiatan-card-desc">Membaca Al-Qur'an Juz 30 hingga Juz 29 setelah 
              melaksanakan Sholat Dhuha juga dijam samping hari untuk yang masuk siang</div>
          </div>
          <div className="kegiatan-card">
            <div className="kegiatan-card-img" style={{ backgroundImage: "url('/PraktekBelajarIcon.png')" }}></div>
            <div className="kegiatan-card-judul">PRAKTEK BELAJAR</div>
            <div className="kegiatan-card-desc">Atlantis Entrepreneur School menerapkan sistem 30% 
              Belajar 70% Praktek dimana siswa dan siswi lebih lebih ditekankan melakukan pembelajaran sambil praktiek</div>
          </div>
          <div className="kegiatan-card">
            <div className="kegiatan-card-img" style={{ backgroundImage: "url('/KunjunganBusIcon.png')" }}></div>
            <div className="kegiatan-card-judul">KUNJUNGAN</div>
            <div className="kegiatan-card-desc">Atlantis Entrepreneur School juga memiliki Program Kunjungan 
              ke berbagai industri dalam rangka memperlihatkan siswa dalam melaksanakan kegiatan diluar sekolah</div>
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="bg-left-news"></div>
        <div className="bg-right-news"></div>
        <h2 className="news-title">
          <span className="red-text">News</span><br />
          <span className="blue-text">Atlantis Plus</span>
        </h2>
        <div className="news-content">
          <img
            src="/SMP DEPAN WEB.png"
            alt="PPDB Banner SMP"
            className="news-banner"
          />
          <img
            src="/SMK DEPAN WEB.png"
            alt="PPDB Banner SMK"
            className="news-banner"
          />
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