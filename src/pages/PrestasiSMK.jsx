import React from "react";
import "../styles/PrestasiSMK.css";

const akademiData = [
  { label: "Olimpiade IT", icon: "💻" },
  { label: "TOEIC English", icon: "🌐" },
  { label: "Vokasi", icon: "🏆" },
];

const nonAkademiData = [
  { label: "Solo Vocal FLS2N Depok", icon: "🎤" },
  { label: "Let's Speak Competition", icon: "🗣️" },
  { label: "Teknologi Tepat Guna", icon: "⚙️" },
  { label: "Film Pendek Festival AVICENA", icon: "🎬" },
  { label: "Film Pendek OSN", icon: "🎥" },
  { label: "Tari Modern Charaka", icon: "💃" },
];

const PrestasiSMK = () => {
  return (
    <div className="psmk-container">

      {/* HERO */}
      <section className="psmk-hero">
        <div className="psmk-hero-overlay">
          <p className="psmk-hero-label">SMK Atlantis Plus</p>
          <h1 className="psmk-hero-title">
            PRESTASI<br />
            <span className="psmk-hero-accent">ATLANTIS PLUS</span>
          </h1>
          <p className="psmk-hero-sub">We Make Your Dreams Come True!</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="psmk-intro">
        <div className="psmk-intro-inner">
          <span className="psmk-pill">Pencapaian Kami</span>
          <h2 className="psmk-intro-title">Bangga Berprestasi</h2>
          <p className="psmk-intro-desc">
            Di SMK Atlantis Plus, kami percaya pendidikan yang baik tidak hanya ditentukan oleh pencapaian akademik,
            tetapi juga oleh perkembangan karakter, kreativitas, dan potensi siswa secara menyeluruh.
            Siswa-siswi kami telah meraih berbagai prestasi membanggakan di tingkat kota, provinsi, hingga nasional.
          </p>
        </div>
      </section>

      {/* PRESTASI AKADEMIK */}
      <section className="psmk-section">
        <div className="psmk-section-inner">
          <div className="psmk-section-head">
            <span className="psmk-pill">Akademik</span>
            <h2 className="psmk-section-title">PRESTASI AKADEMIK</h2>
            <p className="psmk-section-desc">
              Setiap tahun siswa-siswi SMK Atlantis Plus membuktikan kemampuan terbaik mereka melalui
              kompetisi akademik bergengsi dan meraih penghargaan di Atlantis Talent Day (ATD).
            </p>
          </div>

          <div className="psmk-cards-grid psmk-cards-3">
            {akademiData.map((item, i) => (
              <div className="psmk-card" key={i}>
                <div className="psmk-card-icon">{item.icon}</div>
                <img src="/trophy yellow.png" alt="trophy" className="psmk-card-trophy" />
                <div className="psmk-card-img-wrap">
                  <img src="/prestasi img.webp" alt={item.label} className="psmk-card-img" loading="lazy" />
                </div>
                <div className="psmk-card-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTASI NON-AKADEMIK */}
      <section className="psmk-section psmk-section-alt">
        <div className="psmk-section-inner">
          <div className="psmk-section-head">
            <span className="psmk-pill">Non-Akademik</span>
            <h2 className="psmk-section-title">PRESTASI NON-AKADEMIK</h2>
            <p className="psmk-section-desc">
              Bakat dan kreativitas siswa SMK Atlantis Plus juga bersinar di berbagai ajang
              seni, teknologi, dan kompetisi non-akademik tingkat kota hingga nasional.
            </p>
          </div>

          <div className="psmk-cards-grid psmk-cards-3">
            {nonAkademiData.map((item, i) => (
              <div className="psmk-card" key={i}>
                <div className="psmk-card-icon">{item.icon}</div>
                <img src="/trophy yellow.png" alt="trophy" className="psmk-card-trophy" />
                <div className="psmk-card-img-wrap">
                  <img src="/prestasi img.webp" alt={item.label} className="psmk-card-img" loading="lazy" />
                </div>
                <div className="psmk-card-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + FOTO */}
      <section className="psmk-closing">
        <div className="psmk-closing-inner">
          <div className="psmk-quote-box">
            <span className="psmk-quote-mark">"</span>
            <p className="psmk-quote-text">
              Siswa-siswi SMK Atlantis Plus aktif dalam lomba pidato, story telling, dan literasi digital
              yang menunjukkan kemampuan komunikasi dan berpikir kritis mereka. Kami tidak hanya mencetak
              pelajar — kami mencetak pemimpin masa depan.
            </p>
            <p className="psmk-quote-caption">— SMK Atlantis Plus</p>
          </div>
          <div className="psmk-closing-img-wrap">
            <img src="/MoreInfoJurusanHero.jpg" alt="Prestasi SMK" className="psmk-closing-img" loading="lazy" />
            <div className="psmk-closing-banner">NEVER SURRENDER TO ACHIEVE YOUR DREAM</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrestasiSMK;
