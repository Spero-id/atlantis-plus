import React from "react"; // useState tidak lagi diperlukan, jadi dihapus dari import
import "../styles/KurikulumSMP.css";

const Kurikulum = () => {
  return (
    <div className="curriculumSMP-112-copy-container">
      <section className="curriculumSMP-112-copy-hero">
        <div className="curriculumSMP-112-copy-hero-overlay">
          <h1 className="curriculumSMP-112-copy-hero-title">
            Kurikulum <br /> <span className="curriculumSMP-112-copy-smp-teks">SMP</span>{" "}
            <span className="curriculumSMP-112-copy-atlantis-plus-teks">ATLANTIS PLUS</span>
          </h1>
          <p className="curriculumSMP-112-copy-hero-subtitle">
            Nothing impossible in this word
          </p>
        </div>
      </section>


      <div className="curriculum-smk-info-section">
        <div className="curriculum-smk-info-header">
          <div className="info-kurikulum-smk-box">Informasi Kurikulum</div>
          <div className="date-box">12 Juni 2025</div>
        </div>
        <div className="curriculum-image-container">
          <img
            src="/KurikulumHeroSectionSMK.jpg"
            alt="Students group"
            className="curriculum-main-image"
          />
        </div>
        <p className="curriculum-school-description">
          SMK Atlantis Plus merupakan lembaga sekolah yang konsen dalam
          pengembangan pendidikan kreatif, belajar dari berbagai kelemahan konsep
          dan praktek pendidikan di Indonesia yang semakin hari semakin tidak
          sistematis, bahkan cenderung melahirkan SDM yang kaku dan jauh dari
          nilai kreatif dan inovatif, bahkan cenderung menjadi pekerja yang
          stagnan dan monoton, untuk itu SMK Atlantis Plus membuat konsep
          pendidikan yang berbeda serta berorientasi terhadap pembangunan
          karakter, sehingga dengan demikian akan melahirkan SDM yang tangguh,
          mandiri dan kreatif.
          <br />
          <br /> Dalam rangka memberikan kontribusi nyata dalam dunia pendidikan
          di Indonesia yang memiiliki dedikasi sosial untuk memajukan dunia
          Wirausaha Indonesia khususnya kelompok usia muda, SMK Atlantis Plus
          memberikan warna baru dan kontribusi nyata sebagai wujud sumbangsih
          dalam mengisi pembangunan di Indonesia.
          <br />
          <br />
          Program pendidikan ini menggunakan kurikulum metode Experiental
          Learning di mana 80% proses belajar melalui praktek dan 20% Teori.
          Metode ini menjadi efektif karena secara langsung siswa-siswi terlibat
          dalam aktifitas bisnis serta paham How to Start Bussines, How to
          Systemized Bussines dan How to Grow Bussines, sehingga apabila lulus
          nanti siswa-siswi siap menjadi pengusaha muda yang tangguh dan
          mandiri.
        </p>
      </div>

      {/* Three Pillar Section dibungkus dalam <section> */}
      <section className="three-pillar-full-section">
        <div className="three-pillar-section">
          <div className="pillar-box islamic">
            <h2 className="pillar-title">ISLAMIC</h2>
            <p className="pillar-description">
              Islamic dalam kurikulum adalah pendidikan yang mengintegrasikan
              nilai-nilai islam untuk membentuk siswa yang beriman, berakhlak
              mulia, dan berilmu.
            </p>
            {/* Menggunakan <img> untuk ikon Islamic */}
            <img
              src="/Islamic.png"
              alt="Islamic Icon"
              className="pillar-icon-smp"
            />
          </div>
          <div className="pillar-box entrepreneurship">
            <h2 className="pillar-title">ENTREPRENEURSHIP</h2>
            <p className="pillar-description">
              Entrepreneurship dalam kurikulum adalah pendidikan yang menanamkan
              jiwa wirausaha, kreativitas, dan kemandirian agar siswa mampu
              menciptakan peluang usaha sejak dini.
            </p>
            {/* Menggunakan <img> untuk ikon Entrepreneurship */}
            <img
              src="/Entrepreneurship.png"
              alt="Entrepreneurship Icon"
              className="pillar-icon"
            />
          </div>
          <div className="pillar-box technology">
            <h2 className="pillar-title">TECHNOLOGY</h2>
            <p className="pillar-description">
              Technology menjadi pendidikan yang mengenalkan dan memanfaatkan
              teknologi untuk mendukung pembelajaran, kreativitas, dan kesiapan
              siswa menghadapi era digital.
            </p>
            {/* Menggunakan <img> untuk ikon Technology */}
            <img
              src="/Technology .png"
              alt="Technology Icon"
              className="pillar-icon"
            />
          </div>
        </div>
      </section>

      <section className="islamic-content-section-new">
      <img className="corner-image-left" src="/CornersImages.png" alt="Bottom Left Corner Decoration" />
      <img className="corner-image-right" src="/CornersImages.png" alt="Bottom Right Corner Decoration" />
      <div className="islamic-header-new"></div>
      <div className="islamic-main-layout">
        <div className="islamic-left-images">
          <div className="islamic-grid-images-container">
            <div className="islamic-grid-image-item">
              <img src="/islamic1.jpg" alt="Islamic Student 1" />
            </div>
            <div className="islamic-grid-image-item">
              <img src="/islamic2.jpg" alt="Islamic Student 2" />
            </div>
            <div className="islamic-grid-image-item">
              <img src="/islamic3.jpg" alt="Islamic Student 3" />
            </div>
          </div>
        </div>
        <div className="islamic-text-content">
          <h2 className="islamic-title-new">ISLAMIC</h2>
          <p className="islamic-intro-new">
            SMP Atlantis Entrepreneur School menanamkan nilai-nilai Islam
            dalam seluruh aspek pembelajaran dan kehidupan siswa. Melalui
            program Pendidikan Agama Islam yang terintegrasi, siswa tidak
            hanya mempelajari ilmu agama secara teori, tetapi juga
            menerapkannya dalam keseharian. Program Tahfidz dan Tahsin
            Al-Qur'an menjadi bagian penting dalam membentuk kedekatan siswa
            dengan Al-Qur'an, dengan target hafalan yang disesuaikan jenjang
            kelas dan kemampuan masing-masing, serta dilakukan secara rutin
            setiap hari.
          </p>
        </div>
      </div>
      <div className="our-activity-title-container">
        <h3 className="activity-title-new">Our Activity</h3>
        <div className="activity-title-line"></div>
      </div>
      <div className="islamic-bottom-squares">
        <div className="islamic-card">
          <div className="islamic-card-image-wrapper">
            <img src="/islamicbottom1.jpg" alt="Sholat Dhuha" />
          </div>
          <div className="islamic-card-content">
            <h4 className="islamic-card-title">SHOLAT DHUHA</h4>
            <p className="islamic-card-description">
              Pembiasaan Pagi sebelum memulai pelajaran, Siswa dan Siswi
              melaksanakan Sholat Dhuha berjamaah.
            </p>
          </div>
        </div>
        <div className="islamic-card">
          <div className="islamic-card-image-wrapper">
            <img src="/islamicbottom2.png" alt="Tadarus Pagi" />
          </div>
          <div className="islamic-card-content">
            <h4 className="islamic-card-title">TADARUS PAGI</h4>
            <p className="islamic-card-description">
              Pembiasaan pagi setelah melaksanakan Sholat Dhuha siswa
              melakukan kegiatan tadarus bersama yang dipandu oleh guru.
            </p>
          </div>
        </div>
        <div className="islamic-card">
          <div className="islamic-card-image-wrapper placeholder">
            <img src="/OurActivitySMP1.jpg" alt="Sholat Dzuhur" />
          </div>
          <div className="islamic-card-content">
            <h4 className="islamic-card-title">SHOLAT DZUHUR</h4>
            <p className="islamic-card-description">
              Sebelum pulang sekolah, pada waktu Dzuhur siswa melaksanakan
              Sholat Dzuhur berjamaah di Musholla.
            </p>
          </div>
        </div>
        <div className="islamic-card">
          <div className="islamic-card-image-wrapper placeholder">
            <img src="/OurActivitySMP2.jpg" alt="Tahfidz Qur'an" />
          </div>
          <div className="islamic-card-content">
            <h4 className="islamic-card-title">TAHFIDZ QUR'AN</h4>
            <p className="islamic-card-description">
              Siswa mengikuti program keunggulan sekolah yaitu Tahfidz Juz 30
              sebagai hafalan dan prestasi siswa.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* --- Kodingan untuk Bagian Entrepreneurship --- */}
      <div className="entrepreneurship-content-section">
        <div className="entrepreneurship-header">
          <h2 className="entrepreneurship-title">ENTREPRENEURSHIP</h2>
        </div>
        <p className="entrepreneurship-intro">
          Mengembangkan kemampuan dalam membuka kewirausahaan, mempraktekkan
          bagaimana agar siswa & siswi mampu membuat semua proposal untuk
          melakukan bisnis
        </p>

        {/* Lokasi baru untuk gambar di bawah intro */}
        <div className="entrepreneurship-intro-images">
          <img
            src="/entre1.jpg"
            alt="Entrepreneurship visual 1"
            className="intro-image"
          />
          <img
            src="/right1.jpg"
            alt="Entrepreneurship visual 2"
            className="intro-image"
          />
          <img
            src="/entre2.jpg"
            alt="Entrepreneurship visual 3"
            className="intro-image"
          />
          <img
            src="/right2.jpg"
            alt="Entrepreneurship visual 4"
            className="intro-image"
          />
        </div>
        {/* Akhir lokasi baru untuk gambar */}

        <div className="entrepreneurship-main-content">
          <div className="entrepreneurship-images-column"></div>
          <div className="entrepreneurship-text-column">
            <div className="entrepreneurship-list-grid">
              {/* Item 1 */}
              <div className="entrepreneurship-list-item">
                <div className="list-icon-wrapper">
                  <img
                    src="/ListItemEntrepeneur1.svg"
                    alt="Pengantar Kewirausahaan"
                    className="list-item-image"
                  />
                </div>
                <div className="list-item-text">
                  <h3 className="list-item-title">PENGANTAR KEWIRAUSAHAAN</h3>
                  <p className="list-item-description">
                    Diperkenalkan sejak kelas 7, siswa belajar tentang konsep
                    bisnis, branding, dan keuangan dasar.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="entrepreneurship-list-item">
                <div className="list-icon-wrapper">
                  <img
                    src="/ListItemEntrepeneur3.svg"
                    alt="Mentoring Praktisi UMKM"
                    className="list-item-image"
                  />
                </div>
                <div className="list-item-text">
                  <h3 className="list-item-title">
                    MENTORING BERSAMA PRAKTISI UMKM
                  </h3>
                  <p className="list-item-description">
                    Kegiatan coaching oleh pelaku usaha nyata yang mengajarkan
                    praktik dunia bisnis sesungguhnya.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="entrepreneurship-list-item">
                <div className="list-icon-wrapper">
                  <img
                    src="/ListItemEntrepeneur2.svg"
                    alt="Market Day"
                    className="list-item-image"
                  />
                </div>
                <div className="list-item-text">
                  <h3 className="list-item-title">MARKET DAY</h3>
                  <p className="list-item-description">
                    Siswa berjualan langsung kepada masyarakat sekolah, belajar
                    merancang produk, melakukan promosi, dan mencatat hasil
                    penjualan.
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="entrepreneurship-list-item">
                <div className="list-icon-wrapper">
                  <img
                    src="/ListItemEntrepeneur5.svg"
                    alt="Leadership & Public Speaking"
                    className="list-item-image"
                  />
                </div>
                <div className="list-item-text">
                  <h3 className="list-item-title">
                    KEGIATAN LEADERSHIP & PUBLIK SPEAKING
                  </h3>
                  <p className="list-item-description">
                    Untuk melatih rasa percaya diri dan kemampuan presentasi.
                  </p>
                </div>
              </div>
              {/* Item 5 */}
              <div className="entrepreneurship-list-item">
                <div className="list-icon-wrapper">
                  <img
                    src="/ListItemEntrepeneur7.svg"
                    alt="Proyek Bisnis Mini"
                    className="list-item-image"
                  />
                </div>
                <div className="list-item-text">
                  <h3 className="list-item-title">PROYEK BISNIS MINI</h3>
                  <p className="list-item-description">
                    Di kelas 8-9, siswa membentuk tim, memilih produk/jasa,
                    membuat rencana bisnis, dan menjalankan usaha kecil dengan
                    bimbingan guru.
                  </p>
                </div>
              </div>
              {/* Item 6 (yang baru) */}
              <div className="entrepreneurship-list-item">
                <div className="list-icon-wrapper">
                  <img
                    src="/ListItemEntrepeneur6.svg"
                    alt="Kunjungan Industri"
                    className="list-item-image"
                  />
                </div>
                <div className="list-item-text">
                  <h3 className="list-item-title">KUNJUNGAN INDUSTRI</h3>
                  <p className="list-item-description">
                    Di kelas 8-9, siswa membentuk tim, memilih produk/jasa,
                    membuat rencana bisnis, dan menjalankan usaha kecil dengan
                    bimbingan guru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- Kodingan untuk Bagian Entrepreneurship berakhir di sini --- */}

      <section className="teknologi-section">
        <div className="teknologi-container">
          {/* Judul & Deskripsi */}
          <div className="teknologi-header">
            <h2>TECHONOLOGY</h2>
            <p>
              Kurikulum teknologi di SMP Atlantis berorientasi pada penguasaan
              digital skill dan pengenalan teknologi secara aplikatif.
              Pembelajaran teknologi meliputi Materi Teknologi
            </p>
          </div>

          <div className="teknologi-content">
            {/* Kolom Kiri (Gambar) */}
            <div className="teknologi-images">
              <img src="/TeknologiImageSMP1.jpg" alt="Lab Komputer 1" />
              <img src="/TeknologiImageSMP2.jpg" alt="Lab Komputer 2" />
              <img src="/TeknologiImageSMP3.jpg" alt="Lab Komputer 3" />
              <img src="/TeknologiImageSMP4.jpg" alt="Lab Komputer 4" />
            </div>

            {/* Kolom Kanan (Teks + Icon di Kiri) */}
            <div className="teknologi-info">
              <div className="info-item">
                <img
                  className="icon"
                  src="/IconTeknologi1.png"
                  alt="Presentation Icon"
                />
                <div className="text">
                  <h3>DESAIN DIGITAL & PRESENTASI</h3>
                  <p>
                    Menggunakan Canva, Google Slides, dan tools visual lainnya.
                  </p>
                </div>
              </div>

              <div className="info-item">
                <img
                  className="icon"
                  src="/IconTeknologi2.png"
                  alt="Multimedia Icon"
                />
                <div className="text">
                  <h3>MULTIMEDIA & PEMBUATAN KONTEN</h3>
                  <p>Membuat video pendek, podcast, hingga infografis.</p>
                </div>
              </div>

              <div className="info-item">
                <img
                  className="icon"
                  src="/IconTeknologi3.png"
                  alt="Etika Icon"
                />
                <div className="text">
                  <h3>LITERASI & ETIKA DIGITAL</h3>
                  <p>
                    Pembelajaran tentang keamanan data, jejak digital, etika
                    media sosial, dan anti-hoaks.
                  </p>
                </div>
              </div>

              <div className="info-item">
                <img
                  className="icon"
                  src="/IconTeknologi4.png"
                  alt="E-Learning Icon"
                />
                <div className="text">
                  <h3>E - LEARNING & LMS</h3>
                  <p>
                    Pembelajaran dilengkapi dengan Learning Management System
                    (LMS) yang memuat video pembelajaran, kuis digital, dan
                    forum diskusi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="galeri-wrapper">
        <div className="galeri-container">
          <div className="galeri-text">
            <h2>
              LIHAT <span>GALERI</span> KAMI
            </h2>
            <div className="galeri-arrow">
              <span>➜</span>
            </div>
          </div>
          <div className="galeri-images">
            <img src="/GaleriImageBottomSMP.jpg" alt="Galeri 1" />
          </div>
        </div>
      </section>
      {/* --- Kodingan untuk Bagian Technology berakhir di sini --- */}
    </div>
  );
};

export default Kurikulum;
