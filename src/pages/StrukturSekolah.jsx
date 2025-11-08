import React from "react";
import "../styles/StrukturSekolah.css"

const StrukturSekolah = () => {

  const StrukturSekolahData = [
  {
    title: "Ketua Umum Yayasan Kebangkitan Peradaban Nusantara",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Ketua Yayasan Kebangkitan Peradaban Nusantara",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Ketua Umum Yayasan Kebangkitan Peradaban Nusantara",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Kepala Sekolah SMP Atlantis Plus",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Kepala Sekolah SMK Atlantis Plus",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Ketua Umum Yayasan Kebangkitan Peradaban Nusantara",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Ketua Umum Yayasan Kebangkitan Peradaban Nusantara",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
  {
    title: "Ketua Umum Yayasan Kebangkitan Peradaban Nusantara",
    name: "Dr. Mus Mulyadi, M.A., M.Pd",
  },
];

  return (
    <div className="StrukturSekolah-container">
      <section className="StrukturSekolah-hero">
        <div className="StrukturSekolah-hero-overlay">
          <h1 className="StrukturSekolah-hero-title">
            Struktur Sekolah <br /> <span className="StrukturSekolah-teks">ATLANTIS PLUS</span>{" "}
            <span className="StrukturSekolah-teks2"></span>
          </h1>
          <p className="StrukturSekolah-hero-subtitle">Creative and Entrepreneur School</p>
        </div>
      </section>

      <section className="about-StrukturSekolah-Atlantis-plus">
        <div className="about-us-StrukturSekolah-container">
          <div className="logo-StrukturSekolah-wrapper">
            <img src="/smplogonav.png" alt="Logo SMP Atlantis" className="logo" />
          </div>
          <div className="text-StrukturSekolah-content">
            <h1 className="text-StrukturSekolah-content-h1">Struktur Sekolah</h1>
            <p className="text-StrukturSekolah-content-p">Atlantis Entrepreneur School</p>
          </div>
          <div className="logo-StrukturSekolah-wrapper">
            <img src="/smklogonav.png" alt="Logo SMK Atlantis" className="logo" />
          </div>
        </div>
      </section>

      <section className="struktur-sekolah-section">
      <h2>Yayasan Kebangkitan Peradaban Nusantara</h2>

      {/* Baris 1: 2 kolom */}
      <div className="struktur-row row-2">
        {StrukturSekolahData.slice(0, 2).map((item, index) => (
          <div className="struktur-card" key={index}>
            <div className="struktur-image"></div>
            <div className="struktur-text">
              <p>{item.title}</p>
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Baris 2: 4 kolom */}
      <div className="struktur-row row-4">
        {StrukturSekolahData.slice(2, 6).map((item, index) => (
          <div className="struktur-card" key={index}>
            <div className="struktur-image"></div>
            <div className="struktur-text">
              <p>{item.title}</p>
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Baris 3: 2 kolom */}
      <div className="struktur-row row-2">
        {StrukturSekolahData.slice(6, 8).map((item, index) => (
          <div className="struktur-card" key={index}>
            <div className="struktur-image"></div>
            <div className="struktur-text">
              <p>{item.title}</p>
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default StrukturSekolah;