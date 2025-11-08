import React from "react";
import "../styles/GaleriSMK.css"; // Updated path to match new CSS file

const cardSMKcircleData = [
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
];

const fasilitasSekolahSMKData = [
  { image: "/FasilitasSMK1.jpg" },
  { image: "/FasilitasSMK2.jpg" },
  { image: "/FasilitasSMK3.jpg" },
  { image: "/FasilitasSMK4.jpg" },
  { image: "/FasilitasSMK5.jpg" },
  { image: "/FasilitasSMK6.jpg" },
  { image: "/FasilitasSMK7.jpg" },
];

const mpsLDKSSMKData = [
  { image: "/LingkunganSekolahSMK1.jpg" },
  { image: "/LingkunganSekolahSMK2.jpg" },
  { image: "/LingkunganSekolahSMK3.jpg" },
  { image: "/LingkunganSekolahSMK4.jpg" },
  { image: "/LingkunganSekolahSMK5.jpg" },
  { image: "/LingkunganSekolahSMK6.jpg" },
  { image: "/LingkunganSekolahSMK7.jpg" },
];

const LatihanDasarKepemimpinanSiswaSMKData = [
  { image: "/KepemimpinanSiswaSMK1.jpg" },
  { image: "/KepemimpinanSiswaSMK2.jpg" },
  { image: "/KepemimpinanSiswaSMK3.jpg" },
  { image: "/KepemimpinanSiswaSMK4.jpg" },
  { image: "/KepemimpinanSiswaSMK5.jpg" },
  { image: "/KepemimpinanSiswaSMK6.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
];

const SanlatRamadhanSMKData = [
  { image: "/SanlatRamadhanSMK1.jpg" },
  { image: "/SanlatRamadhanSMK2.jpg" },
  { image: "/SanlatRamadhanSMK3.jpg" },
  { image: "/SanlatRamadhanSMK4.jpg" },
  { image: "/SanlatRamadhanSMK5.jpg" },
  { image: "/SanlatRamadhanSMK6.jpg" },
  { image: "/SanlatRamadhanSMK7.jpg" },
  { image: "/SanlatRamadhanSMK8.jpg" },
  { image: "/SanlatRamadhanSMK9.jpg" },
  { image: "/SanlatRamadhanSMK10.jpg" },
  { image: "/SanlatRamadhanSMK11.jpg" },
];

const AtlantisTalentDaySMKData = [
  { image: "/AtlantisTalentDaySMK1.jpg" },
  { image: "/AtlantisTalentDaySMK2.jpg" },
  { image: "/AtlantisTalentDaySMK3.jpg" },
  { image: "/AtlantisTalentDaySMK4.png" },
  { image: "/AtlantisTalentDaySMK5.jpg" },
  { image: "/AtlantisTalentDaySMK6.jpg" },
  { image: "/AtlantisTalentDaySMK7.png" },
  { image: "/AtlantisTalentDaySMK8.png" },
  { image: "/AtlantisTalentDaySMK9.png" },
  { image: "/AtlantisTalentDaySMK10.jpg" },
  { image: "/AtlantisTalentDaySMK11.png" },
];

const KunjunganIndustriSMKData = [
  { image: "/KunjunganIndustriSMK1.jpg" },
  { image: "/KunjunganIndustriSMK2.jpg" },
  { image: "/KunjunganIndustriSMK3.jpg" },
  { image: "/KunjunganIndustriSMK4.jpg" },
  { image: "/KunjunganIndustriSMK5.jpg" },
  { image: "/KunjunganIndustriSMK6.jpg" },
  { image: "/KunjunganIndustriSMK7.jpg" },
  { image: "/KunjunganIndustriSMK8.jpg" },
  { image: "/KunjunganIndustriSMK9.jpg" },
  { image: "/KunjunganIndustriSMK10.jpg" },
  { image: "/KunjunganIndustriSMK11.jpg" },
];

const EkstrakurikulerSMKData = [
  { image: "/EkstrakurikulerSMK1.jpg" },
  { image: "/EkstrakurikulerSMK2.jpg" },
  { image: "/EkstrakurikulerSMK3.jpg" },
  { image: "/EkstrakurikulerSMK4.jpg" },
  { image: "/EkstrakurikulerSMK5.jpg" },
  { image: "/EkstrakurikulerSMK6.jpg" },
  { image: "/EkstrakurikulerSMK7.jpg" },
  { image: "/EkstrakurikulerSMK8.jpg" },
  { image: "/EkstrakurikulerSMK9.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
];

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">{title}</h2>
    <div className="section-title-underline"></div>
  </div>
);

const GaleriSMK = () => {
  return (
    <div className="galeriSMK-container">
      <section className="galeriSMK-hero">
        <div className="galeriSMK-hero-overlay">
          <h1 className="galeriSMK-hero-title">
            GALERI <br /> <span className="galeri-smk-teks">SMK</span>{" "}
            <span className="galeriSMK-atlantis-plus-teks">ATLANTIS PLUS</span>
          </h1>
          <p className="galeriSMK-hero-subtitle">
            Kegiatan juga dokumentasi kegiatan yang ada di SMK ATLANTIS PLUS
            menunjukkan setiap momen dan waktu yang berharga juga tidak akan
            pernah terlupakan sampai kapanpun, kegiatan kegiatan SMK ATLANTIS
            PLUS sangat padat, mengadakan event-event yang ada baik nasional
            maupun yang diadakan langsung oleh sekolah
          </p>
        </div>
      </section>

      <section className="gallery-SMK-section">
        <div className="text-content">
          <h2 className="title">OUR GALLERY</h2>
          <p className="description">
            Kegiatan serta dokumentasi kegiatan yang ada di SMK ATLANTIS PLUS menjadi bukti nyata dari setiap momen
            berharga yang dilalui bersama. Setiap foto, video, dan catatan kegiatan bukan sekadar dokumentasi, melainkan
            juga kenangan yang akan selalu dikenang sepanjang waktu. Setiap momen yang tertangkap menyimpan cerita,
            semangat, kerja sama, dan perjuangan yang tidak akan pernah terlupakan sampai kapan pun. Kegiatan di SMK
            ATLANTIS PLUS sangatlah padat dan beragam, mulai dari kegiatan akademik, ekstrakurikuler, hingga berbagai event
            besar yang diadakan secara rutin. Sekolah tidak hanya mengadakan kegiatan internal, tetapi juga aktif dalam
            menyelenggarakan maupun mengikuti berbagai event tingkat nasional, sehingga siswa dapat mengembangkan
            potensi, kreativitas, serta pengalaman yang lebih luas.
          </p>
        </div>

        <div className="image-SMK-gallery">
          <div className="image-SMK-row">
            {cardSMKcircleData.slice(0, 2).map((item, index) => (
              <div key={index} className="image-SMK-container">
                <img src={item.image} alt="Kegiatan SMK" />
              </div>
            ))}
          </div>
          <div className="image-SMK-row">
            {cardSMKcircleData.slice(2, 4).map((item, index) => (
              <div key={index + 2} className="image-SMK-container">
                <img src={item.image} alt="Kegiatan SMK" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fasilitas-sekolah-SMK-section">
        <SectionTitle title="Fasilitas Sekolah" />
        <div className="fasilitas-sekolah-SMK-grid">
          <div className="fasilitas-sekolah-SMK-row">
            {fasilitasSekolahSMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="fasilitas-sekolah-SMK-card">
                <img
                  src={item.image}
                  alt="Fasilitas Sekolah"
                  className="fasilitas-sekolah-SMK-image"
                />
              </div>
            ))}
          </div>
          <div className="fasilitas-sekolah-SMK-row2">
            {fasilitasSekolahSMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="fasilitas-sekolah-SMK-card2">
                <img
                  src={item.image}
                  alt="Fasilitas Sekolah"
                  className="fasilitas-sekolah-SMK-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mps-ldks-SMK-section">
        <SectionTitle title="Masa Perkenalan Lingkungan Sekolah" />
        <div className="mps-ldks-SMK-grid">
          <div className="mps-ldks-SMK-row">
            {mpsLDKSSMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="mps-ldks-SMK-card">
                <img src={item.image} alt="MPS LDKS" className="mps-ldks-SMK-image" />
              </div>
            ))}
          </div>
          <div className="mps-ldks-SMK-row2">
            {mpsLDKSSMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="mps-ldks-SMK-card2">
                <img src={item.image} alt="MPS LDKS" className="mps-ldks-SMK-image2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="LatihanDasarKepemimpinanSiswa-SMK-section">
        <SectionTitle title="Latihan Dasar Kepemimpinan Siswa" />
        <div className="LatihanDasarKepemimpinanSiswa-SMK-grid">
          <div className="LatihanDasarKepemimpinanSiswa-SMK-row">
            {LatihanDasarKepemimpinanSiswaSMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="LatihanDasarKepemimpinanSiswa-SMK-card">
                <img
                  src={item.image}
                  alt="Latihan Kepemimpinan"
                  className="LatihanDasarKepemimpinanSiswa-SMK-image"
                />
              </div>
            ))}
          </div>
          <div className="LatihanDasarKepemimpinanSiswa-SMK-row2">
            {LatihanDasarKepemimpinanSiswaSMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="LatihanDasarKepemimpinanSiswa-SMK-card2">
                <img
                  src={item.image}
                  alt="Latihan Kepemimpinan"
                  className="LatihanDasarKepemimpinanSiswa-SMK-image2"
                />
              </div>
            ))}
          </div>
          <div className="LatihanDasarKepemimpinanSiswa-SMK-row2">
            {LatihanDasarKepemimpinanSiswaSMKData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="LatihanDasarKepemimpinanSiswa-SMK-card2">
                <img
                  src={item.image}
                  alt="Latihan Kepemimpinan"
                  className="LatihanDasarKepemimpinanSiswa-SMK-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="SanlatRamadhan-SMK-section">
        <SectionTitle title="Sanlat Ramadhan" />
        <div className="SanlatRamadhan-SMK-grid">
          <div className="SanlatRamadhan-SMK-row">
            {SanlatRamadhanSMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="SanlatRamadhan-SMK-card">
                <img src={item.image} alt="Sanlat Ramadhan" className="SanlatRamadhan-SMK-image" />
              </div>
            ))}
          </div>
          <div className="SanlatRamadhan-SMK-row2">
            {SanlatRamadhanSMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="SanlatRamadhan-SMK-card2">
                <img src={item.image} alt="Sanlat Ramadhan" className="SanlatRamadhan-SMK-image2" />
              </div>
            ))}
          </div>
          <div className="SanlatRamadhan-SMK-row2">
            {SanlatRamadhanSMKData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="SanlatRamadhan-SMK-card2">
                <img src={item.image} alt="Sanlat Ramadhan" className="SanlatRamadhan-SMK-image2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="AtlantisTalentDay-SMK-section">
        <SectionTitle title="Atlantis Talent Day" />
        <div className="AtlantisTalentDay-SMK-grid">
          <div className="AtlantisTalentDay-SMK-row">
            {AtlantisTalentDaySMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="AtlantisTalentDay-SMK-card">
                <img src={item.image} alt="Atlantis Talent Day" className="AtlantisTalentDay-SMK-image" />
              </div>
            ))}
          </div>
          <div className="AtlantisTalentDay-SMK-row2">
            {AtlantisTalentDaySMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="AtlantisTalentDay-SMK-card2">
                <img src={item.image} alt="Atlantis Talent Day" className="AtlantisTalentDay-SMK-image2" />
              </div>
            ))}
          </div>
          <div className="AtlantisTalentDay-SMK-row2">
            {AtlantisTalentDaySMKData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="AtlantisTalentDay-SMK-card2">
                <img src={item.image} alt="Atlantis Talent Day" className="AtlantisTalentDay-SMK-image2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="KunjunganIndustri-SMK-section">
        <SectionTitle title="Kunjungan Industri" />
        <div className="KunjunganIndustri-SMK-grid">
          <div className="KunjunganIndustri-SMK-row">
            {KunjunganIndustriSMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="KunjunganIndustri-SMK-card">
                <img src={item.image} alt="Kunjungan Industri" className="KunjunganIndustri-SMK-image" />
              </div>
            ))}
          </div>
          <div className="KunjunganIndustri-SMK-row2">
            {KunjunganIndustriSMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="KunjunganIndustri-SMK-card2">
                <img src={item.image} alt="Kunjungan Industri" className="KunjunganIndustri-SMK-image2" />
              </div>
            ))}
          </div>
          <div className="KunjunganIndustri-SMK-row2">
            {KunjunganIndustriSMKData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="KunjunganIndustri-SMK-card2">
                <img src={item.image} alt="Kunjungan Industri" className="KunjunganIndustri-SMK-image2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="Ekstrakurikuler-SMK-section">
        <SectionTitle title="Ekstrakurikuler" />
        <div className="Ekstrakurikuler-SMK-grid">
          <div className="Ekstrakurikuler-SMK-row">
            {EkstrakurikulerSMKData.slice(0, 3).map((item, index) => (
              <div key={index} className="Ekstrakurikuler-SMK-card">
                <img src={item.image} alt="Ekstrakurikuler" className="Ekstrakurikuler-SMK-image" />
              </div>
            ))}
          </div>
          <div className="Ekstrakurikuler-SMK-row2">
            {EkstrakurikulerSMKData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="Ekstrakurikuler-SMK-card2">
                <img src={item.image} alt="Ekstrakurikuler" className="Ekstrakurikuler-SMK-image2" />
              </div>
            ))}
          </div>
          <div className="Ekstrakurikuler-SMK-row2">
            {EkstrakurikulerSMKData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="Ekstrakurikuler-SMK-card2">
                <img src={item.image} alt="Ekstrakurikuler" className="Ekstrakurikuler-SMK-image2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GaleriSMK;