import React from "react";
import Slider from "react-slick";
import "../styles/MoreInfoJurusanDKV.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoreInfoJurusanJurusanmanagement() {
  const slides = ["/noimages.jpg", "/noimages.jpg", "/noimages.jpg"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const pelajaran = [
    {
      title: "JUNIOR ADMINSTRATIVE ASSITANT",
      desc: "mempelajari keterampilan administrasi dasar, seperti pengarsipan, pencatatan, pengelolaan dokumen, dan komunikasi profesional, untuk mendukung kelancaran operasional perkantoran atau lembaga.",
      img: "IconJurusanMPLB1.png",
    },
    {
      title: "OFFICE ADMINISTRATIVE STAFF",
      desc: "mempelajari keterampilan administrasi perkantoran, termasuk pengelolaan dokumen, surat-menyurat, pencatatan data, serta koordinasi komunikasi agar operasional kantor berjalan lancar dan efisien.",
      img: "IconJurusanMPLB2.png",
    },
    {
      title: "ADMIN ONLINE",
      desc: "mempelajari keterampilan mengelola platform digital dan media sosial, termasuk pelayanan pelanggan, pengelolaan konten, serta pencatatan transaksi online agar operasional bisnis berjalan efektif dan efisien.",
      img: "IconJurusanMPLB3.png",
    },
    {
      title: "DIGITAL MARKETER",
      desc: "mempelajari strategi promosi dan pemasaran produk atau jasa secara digital, termasuk penggunaan media sosial, iklan online, SEO, dan analisis data untuk menjangkau audiens secara efektif.",
      img: "IconJurusanMPLB4.png",
    },
    {
      title: "JASA DIGITAL MARKETING",
      desc: "mempelajari penyediaan layanan pemasaran digital bagi bisnis atau organisasi, termasuk promosi melalui media sosial, pembuatan konten, manajemen iklan online, dan analisis efektivitas kampanye untuk meningkatkan visibilitas dan penjualan.",
      img: "IconJurusanMPLB5.png",
    },
    {
      title: "EVENT ORGANIZER",
      desc: "mempelajari perencanaan, pengelolaan, dan pelaksanaan berbagai jenis acara, mulai dari konsep, koordinasi, logistik, hingga evaluasi, agar acara berjalan lancar, tertata, dan sesuai tujuan.",
      img: "IconJurusanMPLB6.png",
    },
  ];

  return (
    <div className="more-info-jurusan-dkv">
      {/* Hero */}
      <section className="more-info-jurusan-dkv-hero">
        <div className="more-info-jurusan-dkv-overlay">
          <h1 className="more-info-jurusan-dkv-hero-title">
            SMK ATLANTIS PLUS <br />
            <span className="more-info-jurusan-dkv-teks">
              MANAJEMEN PERKANTORAN LAYANAN BISNIS
            </span>
          </h1>
        </div>
      </section>

      {/* Wrapper Content */}
      <section className="dkv-wrapper">
        {/* Kotak Gambar */}
        <div className="top-image-wrapper">
          <img src="/dkv1.jpg" alt="Foto 1" className="responsive-img" />
          <img src="/dkv2.jpg" alt="Foto 2" className="responsive-img" />
        </div>

        {/* Info + Slider */}
        <div className="info-section">
          <div className="info-text">
            <h2>Apa Itu Jurusan MPLB?</h2>
            <p>
              MPLB (Manajemen Perkantoran dan Layanan Bisnis) adalah jurusan
              yang mempelajari keterampilan administrasi perkantoran dan layanan
              bisnis, termasuk pengelolaan dokumen, surat-menyurat, pencatatan,
              komunikasi profesional, serta pengelolaan operasional agar
              kegiatan kantor atau bisnis berjalan lancar dan efisien.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {slides.map((src, idx) => (
                <div key={idx} className="slide-box">
                  <img
                    src={src}
                    alt={`slide-${idx}`}
                    className="slide-img responsive-img"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Judul di luar background */}
        <h2 className="pelajaran-dkv-title">
          Apa saja yang dipelajari di <br /> Jurusan MPLB?
        </h2>

        {/* Pelajaran */}
        <section className="pelajaran-dkv-section">
          <div className="pelajaran-dkv-grid">
            {pelajaran.map((item, idx) => (
              <div key={idx} className="pelajaran-dkv-card">
                <div className="pelajaran-dkv-icon">
                  <img src={`/${item.img}`} alt={item.title} />
                </div>
                <h4 className="pelajaran-dkv-heading">{item.title}</h4>
                <p className="pelajaran-dkv-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activity */}
        <section className="ActivityDKV-section">
          <div className="activity-header"></div>

          <div className="activity-images">
            <img
              src="/ActivityImageDKV1.jpg"
              alt="Activity 1"
              className="responsive-img"
            />
            <img
              src="/ActivityImageDKV2.jpg"
              alt="Activity 2"
              className="responsive-img"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default MoreInfoJurusanJurusanmanagement;
