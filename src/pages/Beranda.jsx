import React, { useState } from 'react';
import '../styles/Beranda.css';

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

const programData = [
  {
    image: "/Outdoor.jpg",
    title: "Pembelajaran Diluar Sekolah",
    description: "Kunjungan luar sekolah SMP Atlantis Plus ke Atamerica dalam rangka menjalankan program English.",
  },
  {
    image: "/Industrional.jpg",
    title: "Kunjungan Industri",
    description: "Kunjungan ke Industri besar dan menengah SMP Atlantis Plus & SMK Atlantis Plus dalam rangka menjalankan program Entrepreneurship.",
  },
  {
    image: "/galeri1.jpg",
    title: "School Trip",
    description: "Deskripsi untuk gambar ketiga."
  },
  {
    image: "/galeri2.jpg",
    title: "School Experience",
    description: "Deskripsi untuk gambar keempat."
  },
  {
    image: "/galeri3.jpg",
    title: "School Visit",
    description: "Deskripsi untuk gambar kelima."
  }
];

const Beranda = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (programData.length / 2));
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (programData.length / 2)) % (programData.length / 2));
  };

  const startIndex = currentSlide * 2;
  const currentPrograms = programData.slice(startIndex, startIndex + 2);

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

      <section className="beranda-gallery">
        <div className="gallery-row">
          <div className="gallery-item">
            <img src="/galeri1.jpg" alt="Kegiatan 1" className="gallery-img" />
            <div className="gallery-caption">School Trip</div>
          </div>
          <div className="gallery-item">
            <img src="/galeri2.jpg" alt="Kegiatan 2" className="gallery-img" />
            <div className="gallery-caption">School Experience</div>
          </div>
          <div className="gallery-item">
            <img src="/galeri3.jpg" alt="Kegiatan 3" className="gallery-img" />
            <div className="gallery-caption">School Visit</div>
          </div>
        </div>
      </section>

      <section className="program-section">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="program-container">
          <h2>
            <span className="red-text">Program</span> <br />
            Atlantis Plus
          </h2>
          <div className="program-slider">
            <button className="slider-arrow left" onClick={handlePrevClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="program-cards">
              {currentPrograms.map((program, index) => (
                <div key={index} className="program-card">
                  <img src={program.image} alt={program.title} />
                  <div className="card-overlay">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-arrow right" onClick={handleNextClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
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
    </div>
  );
};

export default Beranda;