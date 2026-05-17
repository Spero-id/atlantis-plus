import React from "react";
import "../styles/KeunggulanSMP.css";

import iconBasic from "/ImageKeunggulanIconEnglish1.png";
import iconMiddle from "/ImageKeunggulanIconEnglish2.png";
import iconHigh from "/ImageKeunggulanIconEnglish3.png";

const KeunggulanSMP = () => {
  return (
    <div className="kg-smp-container">
      {/* HERO */}
      <section className="kg-smp-hero">
        <div className="kg-smp-overlay">
          <h1 className="kg-smp-hero-title">
            Keunggulan <br />
            <span className="kg-smp-teks1">SMP</span>{" "}
            <span className="kg-smp-teks2">ATLANTIS PLUS</span>
          </h1>
        </div>
      </section>

      <div className="keunggulanSMP-info-section">

        {/* ===== ENTREPRENEUR ===== */}
        <div className="kg-section">
          <div className="kg-section-header">
            <span className="kg-section-label">Program Unggulan</span>
            <h2 className="kg-section-title">ENTREPRENEUR</h2>
            <p className="kg-section-subtitle">
              Materi yang kami berikan bukanlah hal teknis, tetapi <strong>KOMITMEN, INTEGRITAS, BERPIKIR TERBUKA, VISI,</strong> arti <strong>KERJA KERAS, DAYA TAHAN</strong> serta <strong>KREATIFITAS.</strong>
            </p>
          </div>

          <div className="kg-cards-grid">
            <div className="kg-card">
              <div className="kg-card-icon-wrap">
                <img src="/iconkeunggulan1.png" alt="Action" className="kg-card-icon" />
              </div>
              <h3 className="kg-card-title">ACTION</h3>
              <p className="kg-card-desc">
                Menerapkan, mengaplikasikan dan mengimplementasikan praktek usaha. Merealisasikan, membuat proposal bisnis, mempresentasikan diri.
              </p>
            </div>
            <div className="kg-card">
              <div className="kg-card-icon-wrap">
                <img src="/iconkeunggulan2.png" alt="Visioner" className="kg-card-icon" />
              </div>
              <h3 className="kg-card-title">VISIONER</h3>
              <p className="kg-card-desc">
                Pemahaman tentang konsep. Aktualisasinya dengan melakukan dan melibatkan diri dalam proses produksi Industri Menengah.
              </p>
            </div>
            <div className="kg-card">
              <div className="kg-card-icon-wrap">
                <img src="/iconkeunggulan3.png" alt="Komitmen" className="kg-card-icon" />
              </div>
              <h3 className="kg-card-title">KOMITMEN</h3>
              <p className="kg-card-desc">
                Peserta didik mempelajari dan memiliki rasa komitmen, membangun konsep dan membuka wawasan tentang entrepreneur melalui kunjungan Industri Kecil.
              </p>
            </div>
          </div>

          <div className="kg-pembekalan-banner">
            <img src="/KeunggulanSmpKonten.png" alt="Students in class" className="kg-banner-img" />
            <div className="kg-banner-overlay">
              <p>Pembekalan dan pembinaan tentang jiwa wirausahawan dan mendorong siswa melakukan praktek usaha sehingga akan memicu lahirnya generasi baru yang memiliki semangat dan kemandirian siswa.</p>
            </div>
          </div>
        </div>

        {/* ===== ENGLISH DAY ===== */}
        <div className="kg-section kg-section-alt">
          <div className="kg-section-header">
            <span className="kg-section-label">Pengembangan Bahasa</span>
            <h2 className="kg-section-title">ENGLISH DAY</h2>
            <p className="kg-section-subtitle">
              Mengembangkan kreativitas siswa sehingga siswa dilatih untuk <strong>PERCAYA DIRI</strong> dan terbentuk <strong>SPONTANITAS</strong> dalam berbahasa Inggris.
            </p>
          </div>

          <div className="english-cards-grid">
            <div className="english-card">
              <div className="english-card-img-wrap">
                <img src={iconBasic} alt="Basic Level" className="english-card-img" />
              </div>
              <div className="english-card-body">
                <h3 className="english-card-title">BASIC</h3>
                <ul className="english-card-list">
                  <li>Building Self Confidence and Brave</li>
                  <li>Daily Activity in English</li>
                  <li>Vocabulary</li>
                </ul>
              </div>
            </div>
            <div className="english-card english-card-featured">
              <div className="english-card-img-wrap">
                <img src={iconMiddle} alt="Middle Level" className="english-card-img" />
              </div>
              <div className="english-card-body">
                <h3 className="english-card-title">MIDDLE</h3>
                <ul className="english-card-list">
                  <li>Practice</li>
                  <li>English Competition</li>
                  <li>English Digital Magazine</li>
                  <li>English News Anchor</li>
                </ul>
              </div>
            </div>
            <div className="english-card">
              <div className="english-card-img-wrap">
                <img src={iconHigh} alt="High Level" className="english-card-img" />
              </div>
              <div className="english-card-body">
                <h3 className="english-card-title">HIGH</h3>
                <ul className="english-card-list">
                  <li>Speaking &amp; Speech</li>
                  <li>Conversation</li>
                  <li>Storytelling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ADDITIONAL IMAGE ===== */}
        <div className="kg-banner-full">
          <img src="KeunggulanImageMore.png" alt="School Activity" className="kg-banner-full-img" />
        </div>

        {/* ===== TAHFIDZ QUR'AN ===== */}
        <div className="kg-section">
          <div className="kg-section-header">
            <span className="kg-section-label">Karakter Islami</span>
            <h2 className="kg-section-title">TAHFIDZ QUR'AN</h2>
            <p className="kg-section-subtitle">
              Mengembangkan Hafidz Qur'an dengan melakukan setoran hafalan Al Qur'an JUZ 30 dengan menggunakan metode hafalan yang mudah.
            </p>
          </div>

          <div className="tahfidz-card">
            <div className="tahfidz-card-icon">
              <img src="/Qur'an icon.png" alt="Quran Icon" className="tahfidz-icon-img" />
            </div>
            <div className="tahfidz-card-body">
              <h3 className="tahfidz-card-title">TAHFIDZ JUZ 30</h3>
              <p className="tahfidz-card-desc">
                SMP Atlantis Plus memiliki program unggulan Tahfidz Al-Qur'an yang fokus pada hafalan Juz 30 secara bertahap dan menyenangkan. Dengan metode talaqqi, murajaah harian, dan bimbingan guru bersanad, siswa dibimbing tidak hanya hafal tetapi juga memahami makna dan adab terhadap Al-Qur'an. Program ini menjadi fondasi untuk membentuk generasi berakhlak mulia, cinta Al-Qur'an, dan berprestasi.
              </p>
            </div>
          </div>

          <div className="tahfidz-image-wrap">
            <img src="/KeunggulanIMGSMK.jpg" alt="Students Tahfidz" className="tahfidz-main-img" />
            <div className="tahfidz-img-caption">
              Menghasilkan anak-anak yang mengkhatamkan Juz 30 untuk mencapai cita-cita menjadi seorang hafidz qur'an
            </div>
          </div>
        </div>

        {/* ===== GALLERY ===== */}
        <div className="kg-section">
          <div className="kg-section-header">
            <span className="kg-section-label">Dokumentasi</span>
            <h2 className="kg-section-title">Galeri Kegiatan</h2>
          </div>
          <div className="kg-gallery-grid">
            <img src="/SchoolActivityKeunggulanSMP1.jpg" alt="Kegiatan 1" className="kg-gallery-img" loading="lazy" />
            <img src="/SchoolActivityKeunggulanSMP2.jpg" alt="Kegiatan 2" className="kg-gallery-img" loading="lazy" />
            <img src="/SchoolActivityKeunggulanSMP3.jpg" alt="Kegiatan 3" className="kg-gallery-img" loading="lazy" />
            <img src="/SchoolActivityKeunggulanSMP4.jpg" alt="Kegiatan 4" className="kg-gallery-img" loading="lazy" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeunggulanSMP;
