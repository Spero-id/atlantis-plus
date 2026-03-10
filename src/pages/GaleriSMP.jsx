import React from "react";
import "../styles/GaleriSMP.css"; // Pastikan path ini benar

const cardSMPcircleData = [
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
];

const fasilitasSekolahData = [
  { image: "/FasilitasSMP1.jpg" },
  { image: "/FasilitasSMP2.jpg" },
  { image: "/FasilitasSMP3.jpg" },
  { image: "/FasilitasSMP4.jpg" },
  { image: "/FasilitasSMP5.jpg" },
  { image: "/FasilitasSMP6.jpg" },
  { image: "/FasilitasSMP7.jpg" },
];

const mpsLDKSData = [
  { image: "/LingkunganSekolahSMP1.jpg" },
  { image: "/LingkunganSekolahSMP2.jpg" },
  { image: "/LingkunganSekolahSMP3.jpg" },
  { image: "/LingkunganSekolahSMP4.jpg" },
  { image: "/LingkunganSekolahSMP5.jpg" },
  { image: "/LingkunganSekolahSMP6.jpg" },
  { image: "/LingkunganSekolahSMP7.jpg" },
];

const LatihanDasarKepemimpinanSiswaData = [
  { image: "/KepemimpinanSiswaSMP1.jpg" },
  { image: "/KepemimpinanSiswaSMP2.jpg" },
  { image: "/KepemimpinanSiswaSMP3.jpg" },
  { image: "/KepemimpinanSiswaSMP4.jpg" },
  { image: "/KepemimpinanSiswaSMP5.jpg" },
  { image: "/KepemimpinanSiswaSMP6.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
];

const SanlatRamadhanData = [
  { image: "/SanlatRamadhanSMP1.jpg" },
  { image: "/SanlatRamadhanSMP2.jpg" },
  { image: "/SanlatRamadhanSMP3.jpg" },
  { image: "/SanlatRamadhanSMP4.jpg" },
  { image: "/SanlatRamadhanSMP5.jpg" },
  { image: "/SanlatRamadhanSMP6.jpg" },
  { image: "/SanlatRamadhanSMP7.jpg" },
  { image: "/SanlatRamadhanSMP8.jpg" },
  { image: "/SanlatRamadhanSMP9.jpg" },
  { image: "/SanlatRamadhanSMP10.jpg" },
  { image: "/SanlatRamadhanSMP11.jpg" },
];

const AtlantisTalentDayData = [
  { image: "/AtlantisTalentDaySMP1.jpg" },
  { image: "/AtlantisTalentDaySMP2.jpg" },
  { image: "/AtlantisTalentDaySMP3.jpg" },
  { image: "/AtlantisTalentDaySMP4.png" },
  { image: "/AtlantisTalentDaySMP5.jpg" },
  { image: "/AtlantisTalentDaySMP6.jpg" },
  { image: "/AtlantisTalentDaySMP7.png" },
  { image: "/AtlantisTalentDaySMP8.png" },
  { image: "/AtlantisTalentDaySMP9.png" },
  { image: "/AtlantisTalentDaySMP10.jpg" },
  { image: "/AtlantisTalentDaySMP11.png" },
];

const KunjunganIndustriData = [
  { image: "/KunjunganIndustriSMP1.jpg" },
  { image: "/KunjunganIndustriSMP2.jpg" },
  { image: "/KunjunganIndustriSMP3.jpg" },
  { image: "/KunjunganIndustriSMP4.jpg" },
  { image: "/KunjunganIndustriSMP5.jpg" },
  { image: "/KunjunganIndustriSMP6.jpg" },
  { image: "/KunjunganIndustriSMP7.jpg" },
  { image: "/KunjunganIndustriSMP8.jpg" },
  { image: "/KunjunganIndustriSMP9.jpg" },
  { image: "/KunjunganIndustriSMP10.jpg" },
  { image: "/KunjunganIndustriSMP11.jpg" },
];

const EkstrakurikulerData = [
  { image: "/EkstrakurikulerSMP1.jpg" },
  { image: "/EkstrakurikulerSMP2.jpg" },
  { image: "/EkstrakurikulerSMP3.jpg" },
  { image: "/EkstrakurikulerSMP4.jpg" },
  { image: "/EkstrakurikulerSMP5.jpg" },
  { image: "/EkstrakurikulerSMP6.jpg" },
  { image: "/EkstrakurikulerSMP7.jpg" },
  { image: "/EkstrakurikulerSMP8.jpg" },
  { image: "/EkstrakurikulerSMP9.jpg" },
  { image: "/noimages.jpg" },
  { image: "/noimages.jpg" },
];

const SectionTitle = ({ title }) => (
  <div className="section-title-wrapper">
    <h2 className="section-title">{title}</h2>
    <div className="red-flag"></div>
  </div>
);

const GaleriSMP = () => {
  return (
    <div className="galeriSMP-container">
      <section className="galeriSMP-hero">
        <div className="galeriSMP-hero-overlay">
          <h1 className="galeriSMP-hero-title">
            GALERI <br /> <span className="galeri-smp-teks">SMP</span>{" "}
            <span className="galeriSMP-atlantis-plus-teks">ATLANTIS PLUS</span>
          </h1>
          <p className="galeriSMP-hero-subtitle">
            Kegiatan juga dokumentasi kegiatan yang ada SMP ATLANTIS PLUS
            menunjukan setiap momen dan waktu yang berharga juga tidak akan
            pernah terlupakan sampai kapanpun, kegiatan kegiatan SMP ATLANTIS
            PLUS sangat padat, mengadakan Event event yang ada baik nasional
            maupun yang diadakan langsung oleh sekolah
          </p>
        </div>
      </section>

      <section className="gallery-section">
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

      <div className="image-gallery">
        <div className="image-row">
          <div className="image-container">
            <img src="/AtlantisTalentDaySMP10.jpg" alt="Kegiatan bersama siswa" />
          </div>
          <div className="image-container">
            <img src="/GaleriImageBottomSMP.jpg" alt="Pertunjukan seni" />
          </div>
        </div>
        <div className="image-row">
          <div className="image-container">
            <img src="/galeri1.jpg" alt="Makan bersama di sekolah" />
          </div>
          <div className="image-container">
            <img src="/InformasiPageImage4.jpg" alt="Acara sekolah dengan guru dan siswa" />
          </div>
        </div>
      </div>
    </section>

      <section className="fasilitas-sekolah-section">
        <SectionTitle title="Fasilitas Sekolah" />
        <div className="fasilitas-sekolah-grid">
          <div className="fasilitas-sekolah-row">
            {fasilitasSekolahData.slice(0, 3).map((item, index) => (
              <div key={index} className="fasilitas-sekolah-card">
                <img
                  src={item.image}
                  alt=""
                  className="fasilitas-sekolah-image"
                />
              </div>
            ))}
          </div>
          <div className="fasilitas-sekolah-row2">
            {fasilitasSekolahData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="fasilitas-sekolah-card2">
                <img
                  src={item.image}
                  alt=""
                  className="fasilitas-sekolah-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mps-ldks-section">
        <SectionTitle title="Masa Perkenalan Lingkungan Sekolah" />
        <div className="mps-ldks-grid">
          <div className="mps-ldks-row">
            {mpsLDKSData.slice(0, 3).map((item, index) => (
              <div key={index} className="mps-ldks-card">
                <img src={item.image} alt="" className="mps-ldks-image" />
              </div>
            ))}
          </div>
          <div className="mps-ldks-row2">
            {mpsLDKSData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="mps-ldks-card2">
                <img src={item.image} alt="" className="mps-ldks-image2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="LatihanDasarKepemimpinanSiswa-section">
        <SectionTitle title="Latihan Dasar Kepemimpinan Siswa" />
        <div className="LatihanDasarKepemimpinanSiswa-grid">
          <div className="LatihanDasarKepemimpinanSiswa-row">
            {LatihanDasarKepemimpinanSiswaData.slice(0, 3).map(
              (item, index) => (
                <div key={index} className="LatihanDasarKepemimpinanSiswa-card">
                  <img
                    src={item.image}
                    alt=""
                    className="LatihanDasarKepemimpinanSiswa-image"
                  />
                </div>
              )
            )}
          </div>
          <div className="LatihanDasarKepemimpinanSiswa-row2">
            {LatihanDasarKepemimpinanSiswaData.slice(3, 7).map(
              (item, index) => (
                <div
                  key={index + 3}
                  className="LatihanDasarKepemimpinanSiswa-card2"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="LatihanDasarKepemimpinanSiswa-image2"
                  />
                </div>
              )
            )}
          </div>
          <div className="LatihanDasarKepemimpinanSiswa-row2">
            {LatihanDasarKepemimpinanSiswaData.slice(7, 11).map(
              (item, index) => (
                <div
                  key={index + 7}
                  className="LatihanDasarKepemimpinanSiswa-card2"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="LatihanDasarKepemimpinanSiswa-image2"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="SanlatRamadhan-section">
        <SectionTitle title="Sanlat Ramadhan" />
        <div className="SanlatRamadhan-grid">
          <div className="SanlatRamadhan-row">
            {SanlatRamadhanData.slice(0, 3).map((item, index) => (
              <div key={index} className="SanlatRamadhan-card">
                <img src={item.image} alt="" className="SanlatRamadhan-image" />
              </div>
            ))}
          </div>
          <div className="SanlatRamadhan-row2">
            {SanlatRamadhanData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="SanlatRamadhan-card2">
                <img
                  src={item.image}
                  alt=""
                  className="SanlatRamadhan-image2"
                />
              </div>
            ))}
          </div>
          <div className="SanlatRamadhan-row2">
            {SanlatRamadhanData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="SanlatRamadhan-card2">
                <img
                  src={item.image}
                  alt=""
                  className="SanlatRamadhan-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="AtlantisTalentDay-section">
        <SectionTitle title="Atlantis Talent Day" />
        <div className="AtlantisTalentDay-grid">
          <div className="AtlantisTalentDay-row">
            {AtlantisTalentDayData.slice(0, 3).map((item, index) => (
              <div key={index} className="AtlantisTalentDay-card">
                <img
                  src={item.image}
                  alt=""
                  className="AtlantisTalentDay-image"
                />
              </div>
            ))}
          </div>
          <div className="AtlantisTalentDay-row2">
            {AtlantisTalentDayData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="AtlantisTalentDay-card2">
                <img
                  src={item.image}
                  alt=""
                  className="AtlantisTalentDay-image2"
                />
              </div>
            ))}
          </div>
          <div className="AtlantisTalentDay-row2">
            {AtlantisTalentDayData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="AtlantisTalentDay-card2">
                <img
                  src={item.image}
                  alt=""
                  className="AtlantisTalentDay-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="KunjunganIndustri-section">
        <SectionTitle title="Kunjungan Industri" />
        <div className="KunjunganIndustri-grid">
          <div className="KunjunganIndustri-row">
            {KunjunganIndustriData.slice(0, 3).map((item, index) => (
              <div key={index} className="KunjunganIndustri-card">
                <img
                  src={item.image}
                  alt=""
                  className="KunjunganIndustri-image"
                />
              </div>
            ))}
          </div>
          <div className="KunjunganIndustri-row2">
            {KunjunganIndustriData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="KunjunganIndustri-card2">
                <img
                  src={item.image}
                  alt=""
                  className="KunjunganIndustri-image2"
                />
              </div>
            ))}
          </div>
          <div className="KunjunganIndustri-row2">
            {KunjunganIndustriData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="KunjunganIndustri-card2">
                <img
                  src={item.image}
                  alt=""
                  className="KunjunganIndustri-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="Ekstrakurikuler-section">
        <SectionTitle title="Ekstrakurikuler" />
        <div className="Ekstrakurikuler-grid">
          <div className="Ekstrakurikuler-row">
            {EkstrakurikulerData.slice(0, 3).map((item, index) => (
              <div key={index} className="Ekstrakurikuler-card">
                <img
                  src={item.image}
                  alt=""
                  className="Ekstrakurikuler-image"
                />
              </div>
            ))}
          </div>
          <div className="Ekstrakurikuler-row2">
            {EkstrakurikulerData.slice(3, 7).map((item, index) => (
              <div key={index + 3} className="Ekstrakurikuler-card2">
                <img
                  src={item.image}
                  alt=""
                  className="Ekstrakurikuler-image2"
                />
              </div>
            ))}
          </div>
          <div className="Ekstrakurikuler-row2">
            {EkstrakurikulerData.slice(7, 11).map((item, index) => (
              <div key={index + 7} className="Ekstrakurikuler-card2">
                <img
                  src={item.image}
                  alt=""
                  className="Ekstrakurikuler-image2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GaleriSMP;
