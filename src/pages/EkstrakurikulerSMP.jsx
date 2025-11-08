import React from "react";
import "../styles/EkstrakurikulerSMK.css";

const ekstrakurikulerData = [
  {
    name: "ENGLISIM CLUB",
    image: "/path/to/image/olimpiade.jpg", // Ganti dengan path gambar yang sesuai
    icon: "/path/to/icon/english.svg", // Ganti dengan path ikon yang sesuai
  },
  {
    name: "PRAMUKA",
    image: "/path/to/image/pramuka.jpg",
    icon: "/path/to/icon/pramuka.svg",
  },
  {
    name: "TAEKWONDO",
    image: "/path/to/image/taekwondo.jpg",
    icon: "/path/to/icon/taekwondo.svg",
  },
  {
    name: "PASKIBRA",
    image: "/path/to/image/paskibra.jpg",
    icon: "/path/to/icon/paskibra.svg",
  },
  {
    name: "TAHFIDZ QUR'AN",
    image: "/path/to/image/tahfidz.jpg",
    icon: "/path/to/icon/tahfidz.svg",
  },
  {
    name: "PODCAST",
    image: "/path/to/image/podcast.jpg",
    icon: "/path/to/icon/podcast.svg",
  },
  {
    name: "FUTSAL",
    image: "/path/to/image/futsal.jpg",
    icon: "/path/to/icon/futsal.svg",
  },
  {
    name: "FOTOGRAFI",
    image: "/path/to/image/fotografi.jpg",
    icon: "/path/to/icon/fotografi.svg",
  },
  {
    name: "HADROH",
    image: "/path/to/image/fotografi.jpg",
    icon: "/path/to/icon/fotografi.svg",
  },
];

const EkstrakurikulerSMP = () => {
  return (
    <div className="EkstrakulikulerSMK-container">
      <section className="EkstrakulikulerSMK-hero">
        <div className="EkstrakulikulerSMK-hero-overlay">
          <h1 className="EkstrakulikulerSMK-hero-title">
            Ekstrakurikuler <br />{" "}
            <span className="EkstrakulikulerSMK-teks">SMP ATLANTIS PLUS</span>{" "}
            <span className="EkstrakulikulerSMK-teks2"></span>
          </h1>
          <p className="EkstrakulikulerSMK-hero-subtitle">
            Creative and Entrepreneur School
          </p>
        </div>
      </section>

      <section className="ekskulSMK-section">
        <h2 className="ekskulSMK-title">EKSTRAKURIKULER</h2>
        <p className="ekskulSMK-desc">
          SMP Atlantis Plus adalah sekolah kejuruan di Depok yang memiliki jurusan
          seperti Teknik Komputer dan Jaringan, Desain Komunikasi Visual,
          Broadcasting, Otomatisasi Tata Kelola Perkantoran, dan Layanan
          Kesehatan. Sekolah ini fokus membentuk siswa yang terampil, kreatif,
          dan siap kerja melalui pembelajaran praktik dan pengembangan karakter.
        </p>
        <div className="ekskulSMK-grid">
          {ekstrakurikulerData.map((ekskul, index) => (
            <div key={index} className="ekskulSMK-item">
              <div className="ekskulSMK-image-container">
                <img
                  src={ekskul.image}
                  alt={ekskul.name}
                  className="ekskulSMK-image"
                />
                <div className="ekskulSMK-label">
                  <div className="ekskulSMK-icon-circle">
                    <img
                      src={ekskul.icon}
                      alt={`${ekskul.name} icon`}
                      className="ekskulSMK-icon"
                    />
                  </div>
                  {/* Wrapper baru ditambahkan di sini */}
                  <div className="ekskulSMK-flag-wrapper">
                    <div className="ekskulSMK-name-flag">
                      <span className="ekskulSMK-name">{ekskul.name}</span>
                    </div>
                  </div>
                  {/* end wrapper */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EkstrakurikulerSMP;
