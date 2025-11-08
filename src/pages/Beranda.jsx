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
          <p className="subtitle">Creative and Entrepreneur School</p>
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
        <h2>Who we are</h2>
        <p>
          Kami adalah Atlantis Entrepreneur School yang dikelola oleh Yayasan Kebangkitan Peradaban Nusantara.
          Kami merupakan bagian dari keluarga besar atlantis yang berfokus pada pendidikan sekolah menengah pertama
          juga sekolah menengah kejuruan.
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
              &#9664;
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
              &#9654;
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='beranda-image-school-section'>
          <img src="/school-image.jpg" alt="school-image" />
        </div>
      </section>

      <section className="timeline-section">
        <div className="timeline-header">
          <h1 className="timeline-title">History <br /> <span>Atlantis Plus</span></h1>
        </div>
        <div className="timeline-main">
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">2017</div>
              <p className="timeline-description">
                SMP Atlantis Plus tercatat mulai melaksanakan USBN dan UN pada tahun ajaran 2016-2017, dengan nilai USBN mencerminkan performa awal sekolah dalam evaluasi nasional.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-year">2018</div>
              <p className="timeline-description">
                Berlanjut dengan rangkaian ujian nasional dan USBN pada tahun ajaran 2017-2018, menunjukan konsistensi operasional pendidikan yang signifikan di tingkat SMP.
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">2019</div>
              <p className="timeline-description">
                SMP kembali menjalani USBN & UN secara sistematis pada tahun pembelajaran baru 2018-2019 untuk tetap terus menjaga nilai pada kontinuitas akreditasi dan evaluasi nilai akademis.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-year">2020</div>
              <p className="timeline-description">
                SMK Atlantis Plus telah diberikan mendapatkan SK Izin Operasional baru per 3 Agustus 2020, sehingga mempertegas lembaga SMK, ditengah pandemi Covid-19 yang melanda negara Indonesia. Pembelajaran diadakan secara daring mulai dari 2 Maret 2020.
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">2021</div>
              <p className="timeline-description">
                Di SMP, pada semester ganjil dan genap 2021-2022, SMP Atlantis Plus melanjutkan kegiatan KBM dengan protokol kesehatan ketat, VIII, IX mencatat penambahan sarana dan ruangan yang layak. Di SMK data pokok menunjukkan keberlanjutan administrasi dan perbaikan sebagian infrastruktur.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-year">2022</div>
              <p className="timeline-description">
                SMP Atlantis Plus menggelar berbagai kegiatan ekstrakurikuler dan menoreh prestasi seperti Class 7 Teens Mega ATP, islami, podcast, festival budaya, olimpiade sains, dan podcast. Profil sekolah juga diperluas dengan laboratorium termasuk lab multimedia, IPA, ruang UKS, perpustakaan, aula untuk tahun 2022-2023.
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">2023</div>
              <p className="timeline-description">
                SMP merilis "Buku Panduan Siswa 2023" yang membahas regulasi, konseling, dan tata tertib sekolah untuk memperkuat branding sebagai "Atlantis Entrepreneur School" dengan konsep pendidikan kreatif, character building, dan orientasi kewirausahaan.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-year">2024</div>
              <p className="timeline-description">
                SMK Atlantis Plus mulai semakin dikenal lewat artikel "unggul dalam teknologi dan karakter" menyoroti program studi, fasilitas, prestasi, dan kemitraan industri. Dalam membuat siswa menjadi siap dan unggul untuk dunia kerja masa depan.
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">2025</div>
              <p className="timeline-description">
                Januari 2025, SMP mengadakan rapat awal, masuk sekolah (6 Januari), isra miraj, dan imlek. Februari-Maret: Ujian praktik, proyek kewirausahaan/karakter. Kemudian, penumbuhan budi pekerti, pesantren kilat, serta libur idul Fitri.
              </p>
            </div>
          </div>
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
            src="/newsAtlantisPlus.png"
            alt="PPDB Banner"
            className="news-banner"
          />
          <div className="news-cards">
            {newsData.map((item, index) => (
              <div
                key={index}
                className={`news-card ${item.highlight ? "highlighted" : ""}`}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="news-date">
                  Event Upcoming {item.date ? `- ${item.date}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;