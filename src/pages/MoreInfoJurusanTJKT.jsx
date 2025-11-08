import React from "react";
import Slider from "react-slick";
import "../styles/MoreInfoJurusanDKV.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoreInfoJurusanTJKT() {
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
      title: "TEKNISI & NETWORK ENGINER",
      desc: "Pelajaran tentang prinsip-prinsip desain mengajarkan cara menyusun elemen visual agar menghasilkan karya yang estetis, komunikatif, dan efektif. ",
      img: "IconJurusanTJKT1.png",
    },
    {
      title: "INSTALASI",
      desc: "Pelajaran desainer grafis mengajarkan cara menggabungkan teks, gambar, dan elemen visual untuk menyampaikan pesan secara menarik dan efektif, baik untuk media cetak maupun digital.",
      img: "IconJurusanTJKT2.png",
    },
    {
      title: "BACKUP RECOVERY DATA",
      desc: "Siswa belajar  membuat Objek 3D membentuk, mengatur tekstur, pencahayaan, dan detail objek agar tampak realistis atau Keahlian ini digunakan dalam animasi, game, arsitektur, film.",
      img: "IconJurusanTJKT3.png",
    },
    {
      title: "DESIGN WEB",
      desc: "mempelajari cara merancang dan membangun website menggunakan HTML, CSS, dan JavaScript, serta mengelola tampilan dan konten agar website menarik, fungsional, dan mudah digunakan.",
      img: "IconJurusanTJKT4.png",
    },
    {
      title: "JARINGAN",
      desc: "Pelajaran sketsa dan ilustrasi mengajarkan cara menuangkan ide ke dalam gambar, dimulai dari sketsa sebagai rancangan awal yang sederhana hingga ilustrasi sebagai gambar jadi yang lebih detail dan komunikatif. ",
      img: "IconJurusanTJKT5.png",
    },
    {
      title: " WAN",
      desc: "Pelajaran game development mengajarkan cara merancang, membuat, dan  mengembangkan game interaktif dengan elemen visual, audio, dan membuat game dapat dimainkan oleh para pemain.",
      img: "IconJurusanTJKT6.png",
    },
    {
      title: "WLAN",
      desc: "Pelajaran fotografi mengajarkan cara mengambil gambar dengan teknik pencahayaan, komposisi, dan sudut pandang untuk menghasilkan foto yang menarik dan bermakna.",
      img: "IconJurusanTJKT7.png",
    },
    {
      title: "PEMOGRAMAN DATABASE",
      desc: "Pelajaran UI/UX mengajarkan cara merancang antarmuka dan pengalaman pengguna yang intuitif, menarik, dan mudah digunakan dalam aplikasi atau situs web.",
      img: "IconJurusanTJKT8.png",
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
              TEKNIK JARINGAN KOMPUTER & TELEKOMUNIKASI
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
            <h2>Apa Itu Jurusan TJKT?</h2>
            <p>
              TJKT (Teknik Jaringan Komputer dan Telekomunikasi) adalah jurusan
              yang mempelajari perancangan, pemasangan, pengelolaan, dan
              pemeliharaan jaringan komputer serta sistem telekomunikasi. Siswa
              belajar tentang perangkat keras dan perangkat lunak jaringan,
              keamanan jaringan, troubleshooting, hingga penggunaan teknologi
              komunikasi agar jaringan berjalan lancar dan aman.
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
          Apa saja yang dipelajari di <br /> Jurusan TJKT?
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

export default MoreInfoJurusanTJKT;
