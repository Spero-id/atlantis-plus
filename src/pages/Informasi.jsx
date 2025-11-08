import React from "react";
import Slider from "react-slick"; // Import React Slick
import "../styles/Informasi.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Informasi = () => {
  // Data gambar untuk slider
  const sliderImages = [
    "/InformasiPageImage1.jpg",
    "/InformasiPageImage2.jpg",
    "/InformasiPageImage3.jpg",
    "/InformasiPageImage4.jpg",
  ];

  // Pengaturan untuk slider utama
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Data gambar untuk sponsor slider
  const sponsorImages = [
    "/SponsorAtlantis1.png",
    "/SponsorAtlantis2.png",
    "/SponsorAtlantis3.png",
    "/SponsorAtlantis4.png",
    "/SponsorAtlantis5.png",
    "/SponsorAtlantis6.png",
  ];

  const sponsorSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const fasilitasData = [
    { title: "Studio", image: "/studio.jpg" },
    { title: "Lab Komputer", image: "/LabKomputer.jpg" },
    { title: "Ruang Kesehatan", image: "/RuangKesehatan.jpg" },
    { title: "Kelas", image: "/kelas.jpg" },
    { title: "Lapangan", image: "/Lapangan.jpg" },
  ];

  return (
    <div className="atlantisPlus_informasi-container">
      {/* ===== HERO SECTION ===== */}
      <section className="atlantisPlus_informasi-hero">
        <div className="atlantisPlus_informasi-hero-overlay">
          <h1 className="atlantisPlus_informasi-hero-title">
            Informasi <br />
            <span className="atlantisPlus_informasi-teks">ATLANTIS PLUS</span>
          </h1>
          <p className="atlantisPlus_informasi-hero-subtitle">
            Creative and Entrepreneur School
          </p>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="atlantisPlus_about-informasi-Atlantis-plus">
        <div className="atlantisPlus_about-us-container">
          <div className="atlantisPlus_logo-wrapper">
            <img
              src="/smplogonav.png"
              alt="Logo SMP Atlantis"
              className="atlantisPlus_logo"
            />
          </div>
          <div className="atlantisPlus_text-content">
            <h1 className="atlantisPlus_text-content-h1">Tentang Kami</h1>
            <p className="atlantisPlus_text-content-p">
              Atlantis Entrepreneur School
            </p>
          </div>
          <div className="atlantisPlus_logo-wrapper">
            <img
              src="/smklogonav.png"
              alt="Logo SMK Atlantis"
              className="atlantisPlus_logo"
            />
          </div>
        </div>
      </section>

      {/* ===== CONTENT 1 ===== */}
      <section className="atlantisPlus_atlantis-informasi-content1">
        {/* Top Section */}
        <div className="atlantisPlus_top-section-container">
          <div className="atlantisPlus_left-content">
            <h2 className="atlantisPlus_section-title">Creative, Cheerful</h2>
            <h2 className="atlantisPlus_section-title atlantisPlus_colored-title">
              Change The World
            </h2>
            <div className="atlantisPlus_red-underline"></div>
            <p className="atlantisPlus_description-text">
              Atlantis Entrepreneur School adalah lembaga pendidikan yang
              berdiri di bawah naungan Yayasan Kebangkitan Peradaban Nusantara,
              sebuah yayasan yang memiliki visi besar untuk membangun generasi
              penerus bangsa yang cerdas, mandiri, dan berdaya saing global
              dengan tetap berakar pada nilai-nilai luhur kebudayaan Nusantara.
              Melalui pendekatan pendidikan yang inovatif dan berorientasi pada
              pengembangan karakter serta kewirausahaan.
            </p>
          </div>

          <div className="atlantisPlus_right-image-placeholder">
            <Slider {...sliderSettings}>
              {sliderImages.map((imgSrc, index) => (
                <div key={index}>
                  <img
                    src={imgSrc}
                    alt={`Main Visual ${index + 1}`}
                    className="atlantisPlus_slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="atlantisPlus_bottom-section-container">
          <div className="atlantisPlus_left-image-grid">
            {[
              "/InformasiPage1.jpg",
              "/InformasiPage2.jpg",
              "/InformasiPage3.jpg",
              "/InformasiPage4.jpg",
              "/InformasiPage5.jpg",
            ].map((src, i) => (
              <div key={i} className="atlantisPlus_grid-item">
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="atlantisPlus_grid-img"
                />
              </div>
            ))}
          </div>

          <div className="atlantisPlus_right-text-blocks">
            {[
              "Didirikan atas inisiasi Yayasan Kebangkitan Peradaban Nusantara yang menyadari lemahnya kurikulum tradisional di Indonesia, Atlantis Plus bertujuan menciptakan model sekolah yang menghargai kreativitas, inovasi, dan karakter kuat. Sejak operasional SMK pada 3 Agustus 2020, proses belajar kami mengedepankan kematangan dan fleksibilitas akademik.",
              "Atlantis Entrepreneur School terdiri dari dua jenjang pendidikan unggulan; SMP Atlantis Plus dan SMK Atlantis Plus, berada di bawah naungan Yayasan Kebangkitan Peradaban Nusantara. Kami hadir sebagai jawaban atas kebutuhan pendidikan yang kreatif, karakter, dan berwawasan kewirausahaan sekaligus mempersiapkan siswa memiliki integritas, kemandirian, dan profesionalisme sejak dini.",
              "Dengan visi ke depan yang jelas dan misi implementatif, Atlantis Entrepreneur School berkomitmen mencetak generasi muda pra-wirausaha yang siap bersaing, inovatif, serta unggul dalam karakter dan profesionalisme. Selamat datang dan mari bersama membangun peradaban melalui pendidikan yang transformatif.",
            ].map((text, i) => (
              <p key={i} className="atlantisPlus_text-block">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISI MISI ===== */}
      <section className="atlantisPlus_atlantis-content2-visi">
        <div className="atlantisPlus_visi-inner">
          <div className="atlantisPlus_visi-misi-container">
            <div className="atlantisPlus_visi-misi-image-placeholder">
              <img src="/visi informasi.jpg" alt="Visi Misi Visual" />
            </div>

            <div className="atlantisPlus_visi-misi-content">
              <div className="atlantisPlus_visi-column">
                <h3 className="atlantisPlus_column-title">Visi Kami</h3>
                <p className="atlantisPlus_visi-text">
                  Menjadi lembaga pendidikan unggul yang mencetak generasi
                  cerdas, kreatif, dan berakhlak mulia.
                </p>
              </div>
              <div className="atlantisPlus_misi-column">
                <h3 className="atlantisPlus_column-title">Misi Kami</h3>
                <p className="atlantisPlus_misi-text">
                  Menyelenggarakan pendidikan yang berkualitas dengan pendekatan
                  inovatif dan digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FASILITAS ===== */}
      <section className="atlantisPlus_fasilitas-section">
        <h2>Fasilitas Kami</h2>
        <div className="atlantisPlus_fasilitas-grid">
          {fasilitasData.map((item, index) => (
            <div key={index} className="atlantisPlus_fasilitas-card">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="atlantisPlus_fasilitas-image"
                />
              ) : (
                <div className="atlantisPlus_fasilitas-placeholder">
                  Image not available
                </div>
              )}
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <p className="atlantisPlus_fasilitas-description">
          Atlantis Entrepreneur School didukung oleh fasilitas modern yang
          dirancang untuk menunjang pembelajaran aktif, kreatif, dan
          berkarakter. Fasilitas ini mendukung pengembangan potensi siswa secara
          optimal dalam suasana belajar yang nyaman dan berakar pada nilai-nilai
          budaya Nusantara.
        </p>
      </section>

      {/* ===== SPONSOR ===== */}
      <div className="atlantisPlus_sponsor-section">
        <Slider {...sponsorSliderSettings}>
          {sponsorImages.map((imgSrc, index) => (
            <div key={index} className="atlantisPlus_sponsor-slide">
              <img
                src={imgSrc}
                alt={`Sponsor ${index + 1}`}
                className="atlantisPlus_sponsor-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Informasi;
