import React from "react";
import Slider from "react-slick";
import "../styles/MoreInfoJurusanDKV.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoreInfoJurusanBC() {
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
      title: "VIDEOGRAFI",
      desc: "mempelajari teknik pengambilan gambar, pengolahan, hingga penyuntingan video untuk menghasilkan karya visual yang informatif, kreatif, dan menarik sesuai kebutuhan multimedia.",
      img: "IconJurusanBC1.png",
    },
    {
      title: "SINEMATOGRAFI",
      desc: "mempelajari teknik pengambilan gambar dalam film atau video, termasuk pengaturan kamera, pencahayaan, sudut pandang, dan komposisi visual untuk menciptakan karya yang estetis dan mendukung cerita.",
      img: "IconJurusanBC2.png",
    },
    {
      title: "PENYIARAN",
      desc: "mempelajari proses produksi dan cara  penyampaian informasi melalui media seperti radio, televisi, dan platform digital, mencakup teknik berbicara, pengemasan konten, serta penggunaan peralatan siaran agar pesan dapat tersampaikan dengan jelas dan menarik..",
      img: "IconJurusanBC3.png",
    },
    {
      title: "JURNALISTIK",
      desc: "mempelajari cara mencari, mengolah, menulis, dan menyajikan berita atau informasi secara akurat, jelas, dan menarik melalui berbagai media, baik cetak, elektronik, maupun digital.",
      img: "IconJurusanBC4.png",
    },
    {
      title: "REPORTER",
      desc: "mempelajari keterampilan mencari, menggali, dan menyampaikan informasi atau berita langsung dari lapangan, serta melatih kemampuan wawancara, observasi, dan pelaporan agar berita tersaji akurat dan menarik.",
      img: "IconJurusanBC5.png",
    },
    {
      title: "PRESENTER",
      desc: "mempelajari keterampilan membawakan acara atau menyampaikan informasi di depan kamera maupun audiens, dengan melatih intonasi suara, bahasa tubuh, kepercayaan diri, serta kemampuan komunikasi yang jelas dan menarik.",
      img: "IconJurusanBC6.png",
    },
    {
      title: "IKLAN & SHORT MOVIE",
      desc: "mempelajari cara merancang, memproduksi, dan mengedit konten video berupa iklan maupun film pendek, dengan fokus pada ide kreatif, teknik pengambilan gambar, penyusunan naskah, serta penyampaian pesan yang menarik dan mudah dipahami audiens.",
      img: "IconJurusanBC7.png",
    },
    {
      title: "NASKAH EDITING",
      desc: "mempelajari cara menyusun, menyesuaikan, dan memperbaiki naskah agar lebih terstruktur, jelas, dan menarik sebelum diproduksi menjadi karya seperti berita, iklan,film, atau program siaran. ",
      img: "IconJurusanBC8.png",
    },
    {
      title: "TATA CAHAYA",
      desc: "mempelajari teknik pengaturan pencahayaan dalam produksi video, film, atau pertunjukan, untuk menciptakan suasana, menonjolkan objek, serta memperkuat pesan visual agar lebih menarik dan komunikatif.",
      img: "IconJurusanBC9.png",
    },
    {
      title: "DESIGN PRODUKSI",
      desc: "Pelajaran game development mengajarkan cara merancang, membuat, dan  mengembangkan game interaktif dengan elemen visual, audio, dan membuat game dapat dimainkan oleh para pemain. ",
      img: "IconJurusanBC10.png",
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
              BROADCASTING & PERFILMAN
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
            <h2>Apa Itu Jurusan BCF?</h2>
            <p>
              BCF (Broadcasting dan Film) adalah jurusan yang mempelajari teknik
              produksi media audiovisual, termasuk pembuatan video, film,
              sinematografi, penyiaran, editing, serta pembuatan konten kreatif
              lainnya. Siswa belajar menguasai peralatan, konsep kreatif,
              storytelling, dan teknik penyampaian pesan agar karya media dapat
              informatif, menarik, dan profesional.
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
          Apa saja yang dipelajari di <br /> Jurusan BCF?
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

export default MoreInfoJurusanBC;
