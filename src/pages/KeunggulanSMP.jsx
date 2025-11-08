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
        <div className="keunggulan-content-wrapper">
          <h1 className="keunggulan-materi-title">ENTREPENEUR</h1>
          <p className="keunggulan-materi-intro">
            Materi yang kami berikan bukanlah hal teknis, tetapi KOMITMEN,
            INTEGRITAS, BERPIKIR TERBUKA, VISI, arti KERJA KERAS, DAYA TAHAN
            serta KREATIFITAS.
          </p>

          <div className="keunggulan-cards-container">
            {/* ACTION */}
            <div className="keunggulan-card action-card">
              <div className="card-text-content">
                <span className="card-title-smp">ACTION</span>
                <p className="card-description">
                  Menerapkan, mengaplikasikan dan mengimplementasikan praktek
                  usaha. Merealisasikan, membuat proposal bisnis,
                  mempresentasikan diri.
                </p>
              </div>
              <div className="card-icon-wrapper">
                <div className="card-icon-background"></div>
                <img
                  src="/iconkeunggulan1.png"
                  alt="Action Icon"
                  className="card-icon"
                />
              </div>
            </div>

            {/* VISIONER */}
            <div className="keunggulan-card visioner-card">
              <div className="card-text-content">
                <span className="card-title">VISIONER</span>
                <p className="card-description">
                  Pemahaman tentang konsep. Aktualisasinya dengan melakukan dan
                  melibatkan diri dalam proses produksi Industri Menengah
                </p>
              </div>
              <div className="card-icon-wrapper">
                <div className="card-icon-background"></div>
                <img
                  src="/iconkeunggulan2.png"
                  alt="Visioner Icon"
                  className="card-icon"
                />
              </div>
            </div>

            {/* KOMITMEN */}
            <div className="keunggulan-card komitmen-card">
              <div className="card-text-content">
                <span className="card-title">KOMITMEN</span>
                <p className="card-description">
                  Peserta didik mempelajari, memiliki rasa komitmen, membangun
                  konsep dan membuka wawasan tentan entrepreneur. Aktualisasinya
                  dengan melakukan kunjungan Industri Kecil.
                </p>
              </div>
              <div className="card-icon-wrapper">
                <div className="card-icon-background"></div>
                <img
                  src="/iconkeunggulan3.png"
                  alt="Komitmen Icon"
                  className="card-icon"
                />
              </div>
            </div>
          </div>

          {/* OUTPUT SECTION */}
          <div className="keunggulan-bottom-section">
            <div className="keunggulan-image-and-output">
              <img
                src="/KeunggulanSmpKonten.png"
                alt="Students in class"
                className="keunggulan-main-illustration"
              />
              <div className="output-label"></div>
            </div>
            <div className="keunggulan-pembekalan">
              <p>
                Pembekalan dan pembinaan tentang jiwa wirausahawan dan mendorong
                siswa melakukan praktek usaha sehingga akan memicu lahirnya
                generasi baru yang memiliki semangat dan kemandirian siswa.
              </p>
            </div>
          </div>
        </div>

        {/* ===== ENGLISH DAY ===== */}
        <div className="english-day-container">
          <div className="english-day-wrapper">
            {/* Header */}
            <div className="english-day-header">
              <h1 className="english-day-title">ENGLISH DAY</h1>
              <p className="english-day-description">
                Mengembangkan kreativitas siswa sehingga siswa dilatih untuk PERCAYA DIRI dan terbentuk SPONTANITAS dalam berbahasa Inggris.
              </p>
            </div>

            {/* Cards */}
            <div className="english-day-cards-container">
              {/* Basic Card */}
              <div className="english-day-card">
                <img 
                  src={iconBasic}
                  alt="Basic Level" 
                  className="english-day-card-image"
                />
                <h2 className="english-day-card-title basic-title">BASIC</h2>
                <div className="english-day-card-content">
                  <p className="english-day-card-text">Building Self Confidence and</p>
                  <p className="english-day-card-text">Brave. Daily Activity in English.</p>
                  <p className="english-day-card-text">Vocabulary</p>
                </div>
              </div>

              {/* Middle Card */}
              <div className="english-day-card">
                <img 
                  src={iconMiddle}
                  alt="Middle Level" 
                  className="english-day-card-image"
                />
                <h2 className="english-day-card-title middle-title">MIDDLE</h2>
                <div className="english-day-card-content">
                  <p className="english-day-card-text">Practice.</p>
                  <p className="english-day-card-text">English Competition.</p>
                  <p className="english-day-card-text">English Digital Magazine.</p>
                  <p className="english-day-card-text">English News Anchor.</p>
                </div>
              </div>

              {/* High Card */}
              <div className="english-day-card">
                <img 
                  src={iconHigh}
                  alt="High Level" 
                  className="english-day-card-image"
                />
                <h2 className="english-day-card-title high-title">HIGH</h2>
                <div className="english-day-card-content">
                  <p className="english-day-card-text">Speaking. Speech.</p>
                  <p className="english-day-card-text">Conversation.</p>
                  <p className="english-day-card-text">Storytelling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* ===== ADDITIONAL IMAGE ===== */}
        <div className="additional-image-section">
          <img
            src="KeunggulanImageMore.png"
            alt="Additional School Activity"
            className="additional-main-image"
          />
        </div>

        {/* ===== TAHFIDZ QUR'AN ===== */}
        <div className="tahfidz-quran-section">
          <div className="tahfidz-quran-header-box">
            <h2 className="tahfidz-quran-title">TAHFIDZ QUR'AN</h2>
          </div>
          <p className="tahfidz-quran-intro">
            Mengembangkan Hafidz Qur'an dengan melakukan setoran hafalan Al
            Qur'an JUZ 30 dengan menggunakan metode hafalan yang mudah.
          </p>

          <div className="tahfidz-juz30-card">
            <div className="tahfidz-juz30-header">
              <h3 className="tahfidz-juz30-title">TAHFIDZ JUZ 30</h3>
            </div>
            <div className="tahfidz-juz30-content">
              <div className="tahfidz-juz30-image-wrapper">
                <img
                  src="/Qur'an icon.png"
                  alt="Quran Icon"
                  className="tahfidz-juz30-icon"
                />
              </div>
              <p className="tahfidz-juz30-description">
                SMP Atlantis Plus memiliki program unggulan Tahfidz Al-Qur'an
                yang fokus pada hafalan Juz 30 secara bertahap dan menyenangkan.
                Dengan metode talaqqi, murajaah harian, dan bimbingan guru
                bersanad, siswa dibimbing tidak hanya hafal tetapi juga memahami
                makna dan adab terhadap Al-Qur'an. Program ini menjadi fondasi
                untuk membentuk generasi berakhlak mulia, cinta Al-Qur'an, dan
                berprestasi.
              </p>
            </div>
          </div>

          {/* Gambar + overlay teks + icon bawah */}
          <div className="tahfidz-vertical-label-wrapper">
            <img
              src="/KeunggulanIMGSMK.jpg"
              alt="Students group for Tahfidz"
              className="tahfidz-main-image"
            />
            <p className="tahfidz-output-text">
              Menghasilkan anak anak yang mengkhatamkan Juz 30 untuk mencapai
              cita cita anak menjadi seorang hafidz qur'an
            </p>
          </div>
        </div>

        {/* ===== GALLERY SECTION ===== */}
        <div className="gallery-section">
          <div className="gallery-container">
            <img src="/SchoolActivityKeunggulanSMP1.jpg" alt="School Activity 1" className="gallery-image" />
            <img src="/SchoolActivityKeunggulanSMP2.jpg" alt="School Activity 2" className="gallery-image" />
            <img src="/SchoolActivityKeunggulanSMP3.jpg" alt="School Activity 3" className="gallery-image" />
            <img src="/SchoolActivityKeunggulanSMP4.jpg" alt="School Activity 4" className="gallery-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeunggulanSMP;