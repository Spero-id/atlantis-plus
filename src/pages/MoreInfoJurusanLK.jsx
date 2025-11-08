import React from "react";
import Slider from "react-slick";
import "../styles/MoreInfoJurusanDKV.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoreInfoJurusanLK() {
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
      title: "ANATOMI",
      desc: "mempelajari struktur dan bagian-bagian tubuh manusia, mulai dari tulang, otot, organ, hingga sistem tubuh, dengan tujuan memahami fungsi serta hubungannya dalam mendukung kesehatan dan perawatan pasien.",
      img: "IconJurusanLK1.png",
    },
    {
      title: "FISIOLOGI",
      desc: "mempelajari fungsi dan cara kerja organ serta sistem tubuh manusia, seperti pernapasan, peredaran darah, pencernaan, dan saraf, untuk memahami bagaimana tubuh dapat beraktivitas dan menjaga kesehatan.",
      img: "IconJurusanLK2.png",
    },
    {
      title: "PATOLOGI TUBUH",
      desc: "Siswa belajar  membuat Objek 3D untuk membentuk, mengatur tekstur, pencahayaan, dan detail objek agar tampak realistis atau Keahlian ini digunakan dalam animasi, game, arsitektur, film.",
      img: "IconJurusanLK3.png",
    },
    {
      title: "PEMBERIAN OBAT",
      desc: "mempelajari cara memberikan obat kepada pasien dengan benar, mulai dari jenis, dosis, hingga cara pemberian, agar pengobatan aman, efektif, dan sesuai aturan medis.",
      img: "IconJurusanLK4.png",
    },
    {
      title: "PEMERIKSAAN OBAT",
      desc: "Mempelajari cara mengecek jenis, dosis, kadaluarsa, serta kondisi obat sebelum diberikan kepada pasien, untuk memastikan keamanan dan efektivitas dalam pengobatan.",
      img: "IconJurusanLK5.png",
    },
    {
      title: "JENIS PEMERIKSAAN LAB",
      desc: "mempelajari berbagai bentuk pemeriksaan di laboratorium kesehatan, pemeriksaan darah, urin, feses, dan sampel lainnya, untuk membantu diagnosis penyakit serta memantau kondisi kesehatan pasien.",
      img: "IconJurusanLK6.png",
    },
    {
      title: "KOMUNIKASI PERAWATAN",
      desc: "mempelajari cara berkomunikasi efektif antara tenaga kesehatan dengan pasien, keluarga, maupun tim medis, guna memberikan pelayanan, edukasi, serta dukungan yang baik dalam proses perawatan.",
      img: "IconJurusanLK7.png",
    },
    {
      title: "KEMAMPUAN MELAYANI PASIEN",
      desc: "mempelajari keterampilan memberikan pelayanan kesehatan secara profesional, ramah, dan empatik, dengan memperhatikan kebutuhan fisik, emosional, dan psikologis pasien.",
      img: "IconJurusanLK8.png",
    },
    {
      title: "KDK & KDM",
      desc: "Mempelajari keterampilan dasar perawatan pasien, di mana KDK fokus pada tindakan sehari-hari dan KDM fokus pada pemahaman kondisi medis pasien.",
      img: "IconJurusanLK9.png",
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
              LAYANAN KESEHATAN
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
            <h2>Apa Itu Jurusan LK?</h2>
            <p>
              LK (Layanan Kesehatan) adalah jurusan yang mempelajari berbagai
              keterampilan dan pengetahuan di bidang kesehatan, termasuk
              anatomi, fisiologi, pemberian obat, pemeriksaan laboratorium,
              perawatan pasien, dan komunikasi kesehatan. Siswa dibekali
              kemampuan praktis untuk mendukung pelayanan medis dan perawatan
              pasien secara profesional dan aman.
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
          Apa saja yang dipelajari di <br /> Jurusan LK?
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
          <div className="activity-header">
          </div>

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

export default MoreInfoJurusanLK;
