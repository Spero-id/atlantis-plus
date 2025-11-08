import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Jurusan.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

function Jurusan() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // aktifkan arrow
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Data Jurusan → dengan warna background berbeda
  const jurusanData = [
    {
      title: "DESAIN KOMUNIKASI VISUAL",
      image: "/JurusanKarakter1.png",
      link: "/moreinfodkv",
      backgroundColor: "#F7C212",
    },
    {
      title: "BROADCASTING PERFILMAN",
      image: "/JurusanKarakter2.png",
      link: "/moreinfobc",
      backgroundColor: "#EF4B4C",
    },
    {
      title: "TEKNIK JARINGAN KOMPUTER TELEKOMUNIKASI",
      image: "/JurusanKarakter3.png",
      link: "/moreinfotjkt",
      backgroundColor: "#6B5897",
    },
    {
      title: "LAYANAN KESEHATAN",
      image: "/JurusanKarakter4.png",
      link: "/moreinfolk",
      backgroundColor: "#1CA2A8",
    },
    {
      title: "MANAJEMEN PERKANTORAN LAYANAN BISNIS",
      image: "/JurusanKarakter5.png",
      link: "/Jurusanmanagement",
      backgroundColor: "#B6408A",
    },
  ];

  return (
    <>
      <div className="jurusan-container">
        <section className="jurusan-hero">
          <div className="jurusan-hero-overlay">
            <h1 className="jurusan-hero-title">
              Jurusan <br /> <span className="smk-teks">SMK</span>{" "}
              <span className="atlantis-plus-teks">ATLANTIS PLUS</span>
            </h1>
            <p className="jurusan-hero-subtitle">
              Nothing impossible in this word
            </p>
          </div>
        </section>
      </div>

      <section className="jurusan-sekolah-section">
        <div className="jurusan-top-content">
          {/* Teks Deskripsi */}
          <div className="jurusan-middle-text">
            <h2 className="jurusan-sekolah-title">JURUSAN SEKOLAH</h2>
            <p>
              SMK Atlantis Plus adalah sekolah kejuruan di Depok yang memiliki
              jurusan seperti Teknik Komputer dan Jaringan, Desain Komunikasi
              Visual, Broadcasting, Otomatisasi Tata Kelola Perkantoran, dan
              Layanan Kesehatan. Sekolah ini fokus membentuk siswa yang
              terampil, kreatif, dan siap kerja melalui pembelajaran praktik dan
              pengembangan karakter.
            </p>
          </div>

          {/* Carousel */}
          <div className="jurusan-sekolah-top-image-wrapper">
            <Slider {...sliderSettings}>
              <div>
                <img
                  src="/e9b8c3fcd0c9bca4f64d9665ac49d520d73b8f2f.jpg"
                  alt="Students in computer lab"
                  className="jurusan-main-illustration"
                />
              </div>
              <div>
                <img
                  src="/ImageLinkJurusan2.jpg"
                  alt="Another school activity"
                  className="jurusan-main-illustration"
                />
              </div>
              <div>
                <img
                  src="/ImageLinkJurusan1.jpg"
                  alt="Another school activity"
                  className="jurusan-main-illustration"
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* Section Jurusan (grid mirip fasilitas) */}
        <section className="jurusan-section">
          <h2>Jurusan Kami</h2>
          <div className="jurusan-cards-container">
            {jurusanData.map((item, index) => (
              <div
                key={index}
                className="jurusan-card-jurusan"
                style={{ backgroundColor: item.backgroundColor }}
              >
                {/* Judul di atas */}
                <h3>{item.title}</h3>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="jurusan-card-image"
                  />
                ) : (
                  <div className="jurusan-card-placeholder">
                    Image not available
                  </div>
                )}
                <Link to={item.link} className="jurusan-more-info-button">
                  MORE INFO
                </Link>
              </div>
            ))}
          </div>

          <p className="jurusan-description">
            Pilihan jurusan di Atlantis Plus dirancang untuk mempersiapkan siswa
            menghadapi tantangan dunia nyata dengan bekal keterampilan praktis
            dan teori yang kuat, serta pengalaman belajar yang inovatif.
          </p>
        </section>
      </section>
    </>
  );
}

export default Jurusan;
