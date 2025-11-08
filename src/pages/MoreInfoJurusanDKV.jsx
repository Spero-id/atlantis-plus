import React from "react";
import Slider from "react-slick";
import "../styles/MoreInfoJurusanDKV.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoreInfoJurusanDKV() {
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
      title: "DASAR DASAR DESAIN",
      desc: "Pelajaran dasar prinsip-prinsip desain menggunakan metode visual agar menghasilkan karya yang estetis, komunikatif, dan efektif.",
      img: "IconJurusanDKV1.png",
    },
    {
      title: "3D MODELING DESIGNER",
      desc: "Mempelajari pembuatan objek 3D dengan tools desain seperti Blender atau Sketchup untuk kebutuhan animasi, produk digital, dan game.",
      img: "IconJurusanDKV2.png",
    },
    {
      title: "SKETSA & ILUSTRASI",
      desc: "Menggambar ide dalam bentuk manual atau digital agar bisa disampaikan secara tepat dan komunikatif.",
      img: "IconJurusanDKV3.png",
    },
    {
      title: "FOTOGRAFI",
      desc: "Teknik dasar hingga lanjutan pengambilan gambar untuk menciptakan foto yang menarik dan bermakna.",
      img: "IconJurusanDKV4.png",
    },
    {
      title: "DESAINER GRAFIS",
      desc: "Membuat media visual seperti poster, banner, dan ilustrasi untuk media digital maupun cetak.",
      img: "IconJurusanDKV5.png",
    },
    {
      title: "VIDEOGRAFI",
      desc: "Teknik membuat video informatif dan kreatif yang menyampaikan pesan dengan alur cerita menarik.",
      img: "IconJurusanDKV6.png",
    },
    {
      title: "GAME DEVELOPMENT",
      desc: "Mempelajari pembuatan game dari sisi visual, user experience, dan asset desain.",
      img: "IconJurusanDKV7.png",
    },
    {
      title: "UI/UX DESIGNER",
      desc: "Membuat desain tampilan aplikasi dan website yang mudah digunakan dan menyenangkan.",
      img: "IconJurusanDKV8.png",
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
              DESAIN KOMUNIKASI VISUAL
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
            <h2>Apa Itu Jurusan DKV?</h2>
            <p>
              Desain Komunikasi Visual (DKV) adalah jurusan yang mempelajari
              cara menyampaikan pesan atau informasi melalui media visual yang
              menarik dan mudah dipahami. DKV menggabungkan unsur seni, desain,
              teknologi, dan komunikasi, agar pesan yang disampaikan bisa
              diterima dengan baik oleh audiens.
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
          Apa saja yang dipelajari di <br /> Jurusan DKV?
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

        {/* Rasio Club */}
        <section className="rasio-club-section">
          <div className="container-club">
            <div className="logo-container">
              <img
                src="/Club-DKV-Images.png"
                alt="Rasio Club Logo"
                className="rasio-logo responsive-img"
              />
            </div>
            <div className="content-container">
              <h2>
                RASIO <span>CLUB</span>
              </h2>
              <p>
                Club yang diciptakan dari anak-anak DKV Atlantis Plus, Rasio
                Club mempelajari lebih dalam seputar dunia DKV, Rasio Club bukan
                hanya sekedar Ekstrakurikuler namun juga sebagai Club yang
                melakukan banyak kegiatan didalamnya seperti Praktek, Game
                Development, Desain, Fotografi juga kegiatan outdoor seperti
                Bootcamp, Outing Class juga mengadakan Seminar Workshop.
              </p>
            </div>
          </div>
        </section>

        {/* Activity */}
        <section className="ActivityDKV-section">
          <div className="activity-header">
            <h2>ACTIVITY</h2>
            <p>Desain Komunikasi Visual</p>
            <div className="activity-line"></div>
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

export default MoreInfoJurusanDKV;
