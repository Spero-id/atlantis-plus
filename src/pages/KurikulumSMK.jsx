import React from "react";
import "../styles/KurikulumSMK.css";

const Kurikulum = () => {
  const programKeahlianData = [
    {
      image: "/ProgramKeahlianNewImageSMK1.jpg",
    },
    {
      image: "/ProgramKeahlianNewImageSMK2.jpg",
    },
    {
      image: "/ProgramKeahlianNewImageSMK3.jpg",
    },
    {
      image: "/ProgramKeahlianNewImageSMK4.jpg",
    },
    {
      image: "/ProgramKeahlianNewImageSMK5.jpg",
    },
  ];

  return (
   <div className="kurikulum-container">
      <section className="kurikulum-hero">
        <div className="kurikulum-hero-overlay">
          <h1 className="kurikulum-hero-title">
            Kurikulum <br /> <span className="smp-teks">SMK</span>{" "}
            <span className="atlantis-plus-teks">ATLANTIS PLUS</span>
          </h1>
          <p className="kurikulum-hero-subtitle">
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

      <section className="three-pillar-full-section">
        <div className="the-pillar-smk">
          <div className="pillar-box program-keahlian">
            <h2 className="pillar-title">PROGRAM KEAHLIAN</h2>
            <p className="pillar-description">
              Program Keahlian di SMK Atlantis Plus dirancang untuk
              mengembangkan keterampilan praktis sesuai jurusan, sekaligus
              membentuk karakter mandiri dan kreatif sehingga lulusan siap
              menghadapi dunia kerja.
            </p>
            <img
              src="/IconPillarSMK1.png"
              alt="Program Keahlian Icon"
              className="pillar-icon"
            />
          </div>
          <div className="pillar-box praktek-lapangan">
            <h2 className="pillar-title">PRAKTEK LAPANGAN</h2>
            <p className="pillar-description">
              Praktek Lapangan SMK Atlantis Plus memberikan pengalaman nyata di
              dunia industri agar siswa lebih terampil, profesional, dan siap
              kerja.
            </p>
            <img
              src="/IconPillarSMK2.png"
              alt="Praktek Lapangan Icon"
              className="pillar-icon"
            />
          </div>
          <div className="pillar-box kewirausahaan">
            <h2 className="pillar-title">KEWIRAUSAHAAN</h2>
            <p className="pillar-description">
              Program Kewirausahaan di SMK Atlantis Plus melatih siswa untuk
              berinovasi, mengelola usaha, dan membangun mental mandiri sehingga
              siap menjadi pengusaha muda.
            </p>
            <img
              src="/IconPillarSMK3.png"
              alt="Kewirausahaan Icon"
              className="pillar-icon"
            />
          </div>
        </div>
      </section>

     <section className="program-keahlian-section">
  <div className="program-keahlian-header">
    <h1>PROGRAM KEAHLIAN</h1>
  </div>
  <div className="fasilitas-grid">
    {programKeahlianData.map((item, index) => (
      <div key={index} className="fasilitas-card">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="fasilitas-image"
          />
        ) : (
          <div className="fasilitas-placeholder">Image not available</div>
        )}
        <h3>{item.title}</h3>
      </div>
    ))}
  </div>
  <div className="jurusan-header">
    <h2>JURUSAN</h2>
  </div>
  <div className="circular-cards-container">
    <div className="circular-card">
      <img
        src="/IconProgramKeahlian1.png"
        alt="Desain Komunikasi Visual"
        className="circular-card-image"
      />
      <div className="circular-card-description">
        Desain Komunikasi Visual
      </div>
    </div>
    <div className="circular-card">
      <img
        src="/IconProgramKeahlian2.png"
        alt="Broadcasting & Perfilman"
        className="circular-card-image"
      />
      <div className="circular-card-description">
        Broadcasting & Perfilman
      </div>
    </div>
    <div className="circular-card">
      <img
        src="/IconProgramKeahlian3.png"
        alt="Teknik Jaringan Komputer & Telekomunikasi"
        className="circular-card-image"
      />
      <div className="circular-card-description">
        Teknik Jaringan Komputer & Telekomunikasi
      </div>
    </div>
    <div className="circular-card">
      <img
        src="/IconProgramKeahlian4.png"
        alt="Layanan Kesehatan"
        className="circular-card-image"
      />
      <div className="circular-card-description">
        Layanan Kesehatan
      </div>
    </div>
    <div className="circular-card">
      <img
        src="/IconProgramKeahlian5.png"
        alt="Manajemen Perkantoran & Layanan Bisnis"
        className="circular-card-image"
      />
      <div className="circular-card-description">
        Manajemen Perkantoran & Layanan Bisnis
      </div>
    </div>
  </div>
  <div className="program-description-container">
    <p className="program-description-text">
      SMK Atlantis Plus memiliki lima program keahlian yang membekali
      siswa dengan keterampilan siap kerja dan karakter profesional.
      Jurusan Desain Komunikasi Visual (DKV) fokus pada desain grafis dan
      animasi, Teknik Jaringan Komputer dan Telekomunikasi (TJKT)
      mengajarkan instalasi serta manajemen jaringan, dan Broadcasting dan
      Perfilman (BCF) mendalami produksi media audio-visual. Manajemen
      Perkantoran dan Layanan Bisnis (MPLB) melatih keterampilan
      administrasi dan layanan publik, sementara Layanan Kesehatan (LK)
      membekali siswa dengan dasar-dasar pelayanan medis. Kelima jurusan
      ini dirancang untuk mencetak lulusan yang kompeten, kreatif, dan
      siap bersaing.
    </p>
  </div>
</section>

      <section className="praktik-section">
        <div className="praktik-content">
          <div className="praktik-text">
            <h1 className="praktik-title">PRAKTIK LAPANGAN</h1>
            <p className="praktik-desc">
              Praktek Lapangan dalam kurikulum SMK Atlantis adalah kegiatan
              pembelajaran di dunia kerja nyata (industri, kantor, atau
              institusi terkait) yang bertujuan untuk mengasah keterampilan
              siswa sesuai jurusan, memperkuat karakter kerja, dan mempersiapkan
              mereka menghadapi dunia profesional setelah lulus.
            </p>
            <div className="praktik-card">
              <img
                src="/IconPraktekKurikulumSMK1.png"
                alt="Ilmu teori"
                className="praktik-icon"
              />
              <div>
                <h3>Menerapkan ilmu teori ke praktik langsung di lapangan kerja.</h3>
                <p>
                  Melalui praktek lapangan, siswa dapat menguji dan
                  mengaplikasikan pengetahuan yang telah dipelajari di kelas ke
                  dalam situasi kerja nyata. Hal ini membantu mereka memahami
                  bagaimana teori digunakan dalam proses kerja sehari-hari di
                  bidang keahliannya masing-masing.
                </p>
              </div>
            </div>
            <div className="praktik-card">
              <img
                src="/IconPraktekKurikulumSMK2.png"
                alt="Etos kerja"
                className="praktik-icon"
              />
              <div>
                <h3>Menumbuhkan etos kerja dan disiplin sesuai budaya industri.</h3>
                <p>
                  Siswa dilatih untuk bekerja secara profesional dengan
                  mengikuti aturan, etika, dan budaya kerja industri. Disiplin
                  waktu, tanggung jawab, serta sikap kerja yang baik menjadi
                  kebiasaan yang terbentuk selama menjalani praktek.
                </p>
              </div>
            </div>
            <div className="praktik-card">
              <img
                src="/IconPraktekKurikulumSMK3.png"
                alt="Relasi"
                className="praktik-icon"
              />
              <div>
                <h3>Membangun relasi dan pengalaman sebagai bekal memasuki dunia kerja atau wirausaha.</h3>
                <p>
                  Siswa memperoleh pengalaman langsung di dunia kerja serta
                  memiliki kesempatan untuk membangun relasi dengan para
                  profesional. Jaringan ini dapat berguna di masa depan, baik
                  untuk karier, magang lanjutan, maupun peluang kerja setelah
                  lulus.
                </p>
              </div>
            </div>
          </div>
          <div className="praktik-images-container">
            <img src="/PraktekImageKurikulumSMK1.jpg" alt="Praktik siswa" className="praktik-image-1" />
            <img src="/PraktekImageKurikulumSMK2.jpg" alt="Praktik siswa 2" className="praktik-image-2" />
          </div>
        </div>
      </section>

      <section className="kewirausahaan-section">
        <div className="kewirausahaan-header">
          <h1 className="title">KEWIRAUSAHAAN</h1>
          <h2 className="subtitle">TECHNOPRENEUR</h2>
          <p className="description">
            Kurikulum ini dirancang untuk membentuk siswa yang tidak hanya mahir
            secara teknis, tetapi juga mampu menciptakan peluang usaha berbasis
            teknologi. Melalui proyek nyata, kolaborasi industri, dan pelatihan
            bisnis digital, siswa didorong untuk menjadi inovator yang siap
            menghadapi tantangan dunia kerja dan menciptakan lapangan kerja
            sendiri di era modern.
          </p>
        </div>

        <div className="kewirausahaan-content">
          <div className="kewirausahaan-cards-container">
            <div className="kewirausahaan-card">
              <div className="kewirausahaan-icon">
                <img src="/IconKewirahusahaan1.png" alt="Bisnis Inovatif" />
              </div>
              <div className="kewirausahaan-divider"></div>
              <div className="kewirausahaan-card-text">
                <h3>Bisnis Inovatif</h3>
                <p>
                  Membentuk pola pikir wirausaha yang mampu menciptakan produk
                  atau jasa yang bernilai jual.
                </p>
              </div>
            </div>
            <div className="kewirausahaan-card">
              <div className="kewirausahaan-icon">
                <img src="/IconKewirahusahaan2.png" alt="Proyek Mandiri" />
              </div>
              <div className="kewirausahaan-divider"></div>
              <div className="kewirausahaan-card-text">
                <h3>Proyek Mandiri</h3>
                <p>
                  Siswa mengerjakan proyek nyata secara mandiri untuk melatih
                  tanggung jawab dan kemandirian dalam berkarya.
                </p>
              </div>
            </div>
            <div className="kewirausahaan-card">
              <div className="kewirausahaan-icon">
                <img src="/IconKewirahusahaan3.png" alt="Produk Kreatif" />
              </div>
              <div className="kewirausahaan-divider"></div>
              <div className="kewirausahaan-card-text">
                <h3>Produk Kreatif</h3>
                <p>
                  Membuat perencanaan bisnis, hingga memasarkan dan mengelola
                  usaha tersebut.
                </p>
              </div>
            </div>
          </div>
          <div className="kewirausahaan-image-container">
            <img
              src="/KewirahusahaanKurikulumSMK.jpg"
              alt="Lomba Teknologi Tepat Guna"
            />
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
          <img src="/GaleriSMKBOTTOM.jpg" alt="Galeri 1" />
         
        </div>
      </div>
    </section>
    </div>
  );
};

export default Kurikulum;