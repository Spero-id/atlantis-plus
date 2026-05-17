import React, { useState, useEffect, useCallback } from "react";
import "../styles/GaleriSMP.css";

const sections = [
  {
    id: "fasilitas",
    title: "Fasilitas Sekolah",
    images: [
      "/FasilitasSMP1.jpg", "/FasilitasSMP2.jpg", "/FasilitasSMP3.jpg",
      "/FasilitasSMP4.jpg", "/FasilitasSMP5.jpg", "/FasilitasSMP6.jpg",
      "/FasilitasSMP7.jpg",
    ],
  },
  {
    id: "mpls",
    title: "Masa Perkenalan Lingkungan Sekolah",
    images: [
      "/LingkunganSekolahSMP1.jpg", "/LingkunganSekolahSMP2.jpg", "/LingkunganSekolahSMP3.jpg",
      "/LingkunganSekolahSMP4.jpg", "/LingkunganSekolahSMP5.jpg", "/LingkunganSekolahSMP6.jpg",
      "/LingkunganSekolahSMP7.jpg",
    ],
  },
  {
    id: "ldks",
    title: "Latihan Dasar Kepemimpinan Siswa",
    images: [
      "/KepemimpinanSiswaSMP1.jpg", "/KepemimpinanSiswaSMP2.jpg", "/KepemimpinanSiswaSMP3.jpg",
      "/KepemimpinanSiswaSMP4.jpg", "/KepemimpinanSiswaSMP5.jpg", "/KepemimpinanSiswaSMP6.jpg",
    ],
  },
  {
    id: "sanlat",
    title: "Sanlat Ramadhan",
    images: [
      "/SanlatRamadhanSMP1.jpg", "/SanlatRamadhanSMP2.jpg", "/SanlatRamadhanSMP3.jpg",
      "/SanlatRamadhanSMP4.jpg", "/SanlatRamadhanSMP5.jpg", "/SanlatRamadhanSMP6.jpg",
      "/SanlatRamadhanSMP7.jpg", "/SanlatRamadhanSMP8.jpg", "/SanlatRamadhanSMP9.jpg",
      "/SanlatRamadhanSMP10.jpg", "/SanlatRamadhanSMP11.jpg",
    ],
  },
  {
    id: "atd",
    title: "Atlantis Talent Day",
    images: [
      "/AtlantisTalentDaySMP1.jpg", "/AtlantisTalentDaySMP2.jpg", "/AtlantisTalentDaySMP3.jpg",
      "/AtlantisTalentDaySMP4.png", "/AtlantisTalentDaySMP5.jpg", "/AtlantisTalentDaySMP6.jpg",
      "/AtlantisTalentDaySMP7.png", "/AtlantisTalentDaySMP8.png", "/AtlantisTalentDaySMP9.png",
      "/AtlantisTalentDaySMP10.jpg", "/AtlantisTalentDaySMP11.png",
    ],
  },
  {
    id: "kunjungan",
    title: "Kunjungan Industri",
    images: [
      "/KunjunganIndustriSMP1.jpg", "/KunjunganIndustriSMP2.jpg", "/KunjunganIndustriSMP3.jpg",
      "/KunjunganIndustriSMP4.jpg", "/KunjunganIndustriSMP5.jpg", "/KunjunganIndustriSMP6.jpg",
      "/KunjunganIndustriSMP7.jpg", "/KunjunganIndustriSMP8.jpg", "/KunjunganIndustriSMP9.jpg",
      "/KunjunganIndustriSMP10.jpg", "/KunjunganIndustriSMP11.jpg",
    ],
  },
  {
    id: "ekskul",
    title: "Ekstrakurikuler",
    images: [
      "/EkstrakurikulerSMP1.jpg", "/EkstrakurikulerSMP2.jpg", "/EkstrakurikulerSMP3.jpg",
      "/EkstrakurikulerSMP4.jpg", "/EkstrakurikulerSMP5.jpg", "/EkstrakurikulerSMP6.jpg",
      "/EkstrakurikulerSMP7.jpg", "/EkstrakurikulerSMP8.jpg", "/EkstrakurikulerSMP9.jpg",
    ],
  },
];

const GaleriSMP = () => {
  const [modal, setModal] = useState(null); // { src, sectionTitle, index, images }

  const openModal = useCallback((src, sectionTitle, index, images) => {
    setModal({ src, sectionTitle, index, images });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  const navigate = useCallback((dir) => {
    if (!modal) return;
    const next = modal.index + dir;
    if (next < 0 || next >= modal.images.length) return;
    setModal({ ...modal, src: modal.images[next], index: next });
  }, [modal]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal, navigate]);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <div className="gsmp-container">

      {/* HERO */}
      <section className="gsmp-hero">
        <div className="gsmp-hero-overlay">
          <h1 className="gsmp-hero-title">
            GALERI<br />
            <span className="gsmp-hero-smp">SMP</span>{" "}
            <span className="gsmp-hero-ap">ATLANTIS PLUS</span>
          </h1>
          <p className="gsmp-hero-sub">
            Setiap momen berharga yang dilalui bersama — kegiatan, prestasi, dan kenangan tak terlupakan SMP Atlantis Plus.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="gsmp-intro">
        <div className="gsmp-intro-inner">
          <h2 className="gsmp-intro-title">OUR GALLERY</h2>
          <p className="gsmp-intro-desc">
            Dokumentasi kegiatan SMP Atlantis Plus menjadi bukti nyata dari setiap momen berharga yang dilalui bersama.
            Setiap foto bukan sekadar dokumentasi, melainkan kenangan yang akan selalu dikenang.
            Kegiatan di SMP Atlantis Plus sangat padat dan beragam — mulai dari kegiatan akademik, ekstrakurikuler,
            hingga berbagai event nasional yang mengembangkan potensi dan kreativitas siswa.
          </p>
        </div>
        <div className="gsmp-intro-grid">
          <div className="gsmp-intro-img-wrap gsmp-intro-img-tall">
            <img src="/AtlantisTalentDaySMP10.jpg" alt="Kegiatan SMP" loading="eager" />
          </div>
          <div className="gsmp-intro-img-wrap">
            <img src="/GaleriImageBottomSMP.jpg" alt="Pertunjukan seni" loading="eager" />
          </div>
          <div className="gsmp-intro-img-wrap">
            <img src="/galeri1.jpg" alt="Kegiatan bersama" loading="lazy" />
          </div>
        </div>
      </section>

      {/* DYNAMIC SECTIONS */}
      {sections.map((sec, si) => (
        <section key={sec.id} className={`gsmp-section ${si % 2 === 1 ? "gsmp-section-alt" : ""}`}>
          <div className="gsmp-section-inner">
            <div className="gsmp-section-head">
              <h2 className="gsmp-section-title">{sec.title}</h2>
              <div className="gsmp-section-line" />
            </div>
            <div className="gsmp-grid">
              {sec.images.map((src, idx) => (
                <div
                  key={idx}
                  className="gsmp-card"
                  onClick={() => openModal(src, sec.title, idx, sec.images)}
                >
                  <img src={src} alt={`${sec.title} ${idx + 1}`} loading="lazy" className="gsmp-card-img" />
                  <div className="gsmp-card-overlay">
                    <span className="gsmp-zoom-icon">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* MODAL */}
      {modal && (
        <div className="gsmp-modal-backdrop" onClick={closeModal}>
          <div className="gsmp-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="gsmp-modal-close" onClick={closeModal}>✕</button>
            <button
              className="gsmp-modal-nav gsmp-modal-prev"
              onClick={() => navigate(-1)}
              disabled={modal.index === 0}
            >‹</button>
            <img src={modal.src} alt="galeri" className="gsmp-modal-img" />
            <button
              className="gsmp-modal-nav gsmp-modal-next"
              onClick={() => navigate(1)}
              disabled={modal.index === modal.images.length - 1}
            >›</button>
            <div className="gsmp-modal-footer">
              <p className="gsmp-modal-section">{modal.sectionTitle}</p>
              <p className="gsmp-modal-counter">{modal.index + 1} / {modal.images.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriSMP;
