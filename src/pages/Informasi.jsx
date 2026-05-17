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
    "/SPERO2.png",
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
            PROFIL <br />
            <span className="atlantisPlus_informasi-teks">ATLANTIS PLUS</span>
          </h1>
          <p className="atlantisPlus_informasi-hero-subtitle">
            Creative and Technopreneur School
          </p>
        </div>
      </section>

      {/* ===== SEJARAH KAMI ===== */}
      <section className="sejarah-section">
        <div className="sejarah-header">
          <img src="/LOGO BARU.png" alt="Logo Atlantis Plus" className="sejarah-logo" />
          <h2 className="sejarah-title">Sejarah Kami</h2>
          <p className="sejarah-subtitle">Perjalanan Atlantis Plus membangun pendidikan berkarakter</p>
        </div>
        <div className="sejarah-cards">
          <div className="sejarah-card">
            <div className="sejarah-card-icon">🏫</div>
            <h3 className="sejarah-card-year">2017</h3>
            <h4 className="sejarah-card-title">Berdirinya Yayasan</h4>
            <p className="sejarah-card-desc">Yayasan Kebangkitan Peradaban Nusantara didirikan dengan visi membangun generasi kreatif, mandiri, dan berdaya saing global.</p>
          </div>
          <div className="sejarah-card">
            <div className="sejarah-card-icon">🎓</div>
            <h3 className="sejarah-card-year">2020</h3>
            <h4 className="sejarah-card-title">Operasional SMK</h4>
            <p className="sejarah-card-desc">SMK Atlantis Plus resmi beroperasi pada 3 Agustus 2020 dengan pendekatan pembelajaran inovatif berbasis kewirausahaan dan teknologi.</p>
          </div>
          <div className="sejarah-card">
            <div className="sejarah-card-icon">📚</div>
            <h3 className="sejarah-card-year">2022</h3>
            <h4 className="sejarah-card-title">Lahirnya SMP Atlantis Plus</h4>
            <p className="sejarah-card-desc">SMP Atlantis Plus hadir sebagai jenjang pendidikan menengah pertama yang mengedepankan karakter, kreativitas, dan semangat technopreneur sejak dini.</p>
          </div>
          <div className="sejarah-card">
            <div className="sejarah-card-icon">🚀</div>
            <h3 className="sejarah-card-year">Kini</h3>
            <h4 className="sejarah-card-title">Atlantis Technopreneur School</h4>
            <p className="sejarah-card-desc">Atlantis Plus terus berkembang mencetak generasi pra-wirausaha yang siap bersaing, inovatif, dan unggul dalam karakter serta profesionalisme.</p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT 1 ===== */}
      <div className="atlantisPlus_content1-wrapper">
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
              Yayasan Kebangkitan Peradaban Nusantara merupakan lembaga yang konsen dalam pengembangan pendidikan kreatif, belajar dari berbagai kelemahan konsep dan praktek pendidikan di Indonesia yang semakin hari semakin tidak sistematis, bahkan cenderung melahirkan SDM yang kaku dan jauh dari nilai kreatif dan inovatif, bahkan cenderung menjadi pekerja yang stagnan dan monoton, untuk itu Yayasan Kebangkitan Peradaban Nusantara ingin membuat konsep pendidikan yang berbeda serta berorientasi terhadap pembangunan karakter, sehingga dengan demikian akan melahirkan SDM yang tangguh, mandiri dan profesional.
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
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    width="1200"
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
                  loading="lazy"
                  decoding="async"
                  width="400"
                />
              </div>
            ))}
          </div>

          <div className="atlantisPlus_right-text-blocks">
            {[
              "Dalam rangka memberikan kontribusi nyata dalam dunia pendidikan di Indonesia yang memiliki dedikasi sosial untuk memajukan dunia Wirausaha Indonesia khususnya kelompok usia muda, Yayasan Kebangkitan Peradaban Nusantara mendirikan dua sekolah unggulan sekaligus, yaitu SMP Atlantis Plus dan SMK Atlantis Plus dengan nama Atlantis Technopreneur School.",
              "Dua sekolah ini diharapkan mampu memberikan warna baru dan kontribusi nyata sebagai wujud sumbangsih dalam mengisi pembangunan di Indonesia. Atlantis Technopreneur School adalah sebuah program pendidikan formal yang diselenggarakan untuk melahirkan wirausahawan muda di bawah bimbingan langsung fasilitator dan para mentor praktisi bisnis yang berpengalaman.",
              "Program pendidikan ini menggunakan metode Experiential Learning dimana 70% proses belajar melalui praktek dan 30% adalah teori. Metode ini menjadi efektif karena secara langsung siswa-siswi terlibat dalam aktifitas bisnis serta paham How to Start Bisnis, How to Systemized Bisnis dan How to Grow Bisnis, sehingga apabila lulus nanti siswa-siswi sangat siap menjadi pengusaha muda yang tangguh dan mandiri.",
              "Yayasan melalui perusahaan yang dikelola oleh penggeraknya telah memberikan kontribusi nyata untuk menopang pendidikan. Dengan dana Corporate Social Responsibility (CSR) dari PT. Atlantis Kreatifindo membantu anak-anak yang kurang mampu untuk melanjutkan pendidikan. Unit Advertaising dan Production House juga menjadi sarana untuk anak-anak mempraktekkan ilmu yang mereka pelajari.",
            ].map((text, i) => (
              <p key={i} className="atlantisPlus_text-block">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
      </div>

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
      <section className="fasilitas-section">
        <div className="fasilitas-header">
          <p className="fasilitas-label">Sarana &amp; Prasarana</p>
          <h2 className="fasilitas-title">Fasilitas Kami</h2>
          <p className="fasilitas-desc">
            Atlantis Plus didukung fasilitas modern yang dirancang untuk menunjang pembelajaran aktif, kreatif, dan berkarakter demi pengembangan potensi siswa secara optimal.
          </p>
        </div>
        <div className="fasilitas-grid">
          {fasilitasData.map((item, index) => (
            <div key={index} className="fasilitas-card">
              <div className="fasilitas-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="fasilitas-img"
                  loading="eager"
                />
                <div className="fasilitas-overlay">
                  <span className="fasilitas-overlay-text">{item.title}</span>
                </div>
              </div>
              <div className="fasilitas-card-body">
                <h3 className="fasilitas-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
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
                loading="lazy"
                decoding="async"
                width="200"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Informasi;
