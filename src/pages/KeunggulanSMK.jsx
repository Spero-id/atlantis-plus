import React from "react";
import "../styles/KeunggulanSMK.css";

const KeunggulanSMK = () => {
  return (
    <div className="keunggulanSMK-container">
      <section className="keunggulanSMK-hero">
        <div className="keunggulanSMK-hero-overlay">
          <h1 className="keunggulanSMK-hero-title">
            Keunggulan <br />{" "}
            <span className="keunggulanSMK-container-teks">SMK</span>{" "}
            <span className="keunggulanSMK-container-teks2">ATLANTIS PLUS</span>
          </h1>
        </div>
      </section>

      <div className="keunggulanSMK-info-section">
        {/* Konten Keunggulan yang sudah ada */}
        <div className="keunggulanSMK-content-wrapper">
          <h1 className="keunggulanSMK-materi-title">KEJURUAN</h1>
          <p className="keunggulanSMK-materi-intro">
            Program kejuruan di SMK Atlantis Plus tidak hanya berfokus pada
            keterampilan teknis, tetapi juga menanamkan nilai penting seperti
            komitmen, integritas, pola pikir terbuka, visi, kerja keras, daya
            tahan, serta kreativitas. Dengan kombinasi ini, siswa dipersiapkan
            menjadi lulusan yang kompeten, berkarakter, dan mampu bersaing di
            dunia kerja maupun wirausaha.
          </p>

          <div className="keunggulanSMK-cards-container">
            <div className="keunggulanSMK-card action-card">
              {/* Ikon + background sekarang di kiri */}
              <div className="cardSMK-icon-wrapper">
                <div className="cardSMK-icon-background"></div>
                <img
                  src="/IconKeunggulanSMK1.png"
                  alt="Action Icon"
                  className="cardSMK-icon"
                />
              </div>

              {/* Teks pindah ke kanan */}
              <div className="cardSMK-text-content">
                <span className="cardSMK-title-smp">
                  DESAIN KOMUNIKASI VISUAL
                </span>
                <h1 className="CardSMK-tittle2">DKV</h1>
                <p className="cardSMK-description">
                  Menerapkan, mengaplikasikan dan mengimplementasikan praktek
                  usaha. Merealisasikan, membuat proposal bisnis,
                  mempresentasikan diri.
                </p>
              </div>
            </div>

            <div className="keunggulanSMK-card visioner-card">
              <div className="cardSMK-icon-wrapper">
                <div className="cardSMK-icon-background"></div>
                <img
                  src="/IconKeunggulanSMK2.png"
                  alt="Visioner Icon"
                  className="cardSMK-icon"
                />
              </div>
              <div className="cardSMK-text-content">
                <span className="cardSMK-title-smp">
                  TEKNIK JARINGAN KOMPUTER & TELEKOMUNIKASI
                </span>
                <h1 className="CardSMK-tittle2">TJKT</h1>
                <p className="cardSMK-description">
                  Pemahaman tentang konsep. Aktualisasinya dengan melakukan dan
                  melibatkan diri dalam proses produksi Industri Menengah
                </p>
              </div>
            </div>

            <div className="keunggulanSMK-card komitmenSMK-card">
              <div className="cardSMK-icon-wrapper">
                <div className="cardSMK-icon-background"></div>
                <img
                  src="/IconKeunggulanSMK3.png"
                  alt="Komitmen Icon"
                  className="cardSMK-icon"
                />
              </div>
              <div className="cardSMK-text-content">
                <span className="cardSMK-title-smp">
                  BROADCASTING & PERFILMAN
                </span>
                <h1 className="CardSMK-tittle2">BCF</h1>
                <p className="cardSMK-description">
                  Peserta didik mempelajari, memiliki rasa komitmen, membangun
                  konsep dan membuka wawasan tentang entrepreneur.
                  Aktualisasinya dengan melakukan kunjungan Industri kecil.
                </p>
              </div>
            </div>

            {/* CARD BARU UNTUK LKC */}
            <div className="keunggulanSMK-card lkc-card">
              <div className="cardSMK-icon-wrapper">
                <div className="cardSMK-icon-background"></div>
                <img
                  src="/IconKeunggulanSMK4.png" // Ganti dengan path ikon yang sesuai
                  alt="LKC Icon"
                  className="cardSMK-icon"
                />
              </div>
              <div className="cardSMK-text-content">
                <span className="cardSMK-title-smp">
                  LAYANAN KEUANGAN & PERBANKAN
                </span>
                <h1 className="CardSMK-tittle2">LKC</h1>
                <p className="cardSMK-description">
                  Membekali peserta didik dengan keterampilan dalam layanan
                  perbankan, keuangan, dan pengelolaan administrasi transaksi
                  untuk siap di dunia industri.
                </p>
              </div>
            </div>

            {/* CARD BARU UNTUK MPLB */}
            <div className="keunggulanSMK-card mplb-card">
              <div className="cardSMK-icon-wrapper">
                <div className="cardSMK-icon-background"></div>
                <img
                  src="/IconKeunggulanSMK5.png" // Ganti dengan path ikon yang sesuai
                  alt="MPLB Icon"
                  className="cardSMK-icon"
                />
              </div>
              <div className="cardSMK-text-content">
                <span className="cardSMK-title-smp">
                  MANAJEMEN PERKANTORAN & LAYANAN BISNIS
                </span>
                <h1 className="CardSMK-tittle2">MPLB</h1>
                <p className="cardSMK-description">
                  Mengembangkan kompetensi di bidang manajemen administrasi,
                  layanan bisnis, dan komunikasi perkantoran yang efektif dan
                  efisien.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Akhir dari konten keunggulan */}

        <section className="ujiKompetensi-section">
          <h2 className="ujiKompetensi-title">UJI KOMPETENSI</h2>

          <div className="ujiKompetensi-images">
            <img
              src="/UjiKompetensiSMK1.jpg"
              alt="Uji Kompetensi 1"
              className="ujiKompetensi-image"
            />
            <img
              src="/UjiKompetensiSMK2.jpg"
              alt="Uji Kompetensi 2"
              className="ujiKompetensi-image"
            />
          </div>

          <p className="ujiKompetensi-description">
            Pembekalan dan pembinaan tentang jiwa wirausahawan dan mendorong
            siswa melakukan praktek usaha sehingga akan memicu lahirnya generasi
            baru yang memiliki semangat dan kemandirian siswa.
          </p>
        </section>

        <section className="uji-kompetensi-section">
          {/* Praktek Kerja Header */}
          <div className="praktek-kerja-header">
            <h2 className="praktek-title">PRAKTEK KERJA</h2>
          </div>

          {/* Praktek Kerja Description */}
          <div className="praktek-description-container">
            <p className="praktek-description">
              Praktek Kerja di SMK Atlantis Plus adalah kegiatan pembelajaran di
              luar sekolah yang menempatkan siswa langsung di dunia usaha dan
              dunia industri sesuai jurusannya. Melalui praktek kerja, siswa
              dapat mengasah keterampilan, memahami budaya kerja, serta
              mendapatkan pengalaman nyata yang menjadi bekal penting sebelum
              lulus.
            </p>
          </div>

          {/* Icons Grid */}
          <div className="icons-grid">
            <div className="icon-item">
              <div className="icon-circle">
                <img
                  src="/IconKeunggulanSMKPraktik1.png"
                  alt="Pengalaman Nyata"
                  className="icon-image"
                />
              </div>
              <h4 className="icon-title">Pengalaman Nyata</h4>
              <p className="icon-description">
                Siswa terjun langsung ke dunia usaha dan dunia industri sesuai
                bidang keahliannya masing-masing.
              </p>
            </div>

            <div className="icon-item">
              <div className="icon-circle">
                <img
                  src="/IconKeunggulanSMKPraktik2.png"
                  alt="Peningkatan Keterampilan"
                  className="icon-image"
                />
              </div>
              <h4 className="icon-title">Peningkatan Keterampilan</h4>
              <p className="icon-description">
                Mengasah kemampuan teknis melalui praktik langsung di lapangan,
                serta belajar dari para ahli di bidangnya.
              </p>
            </div>

            <div className="icon-item">
              <div className="icon-circle">
                <img
                  src="/IconKeunggulanSMKPraktik3.png"
                  alt="Budaya Kerja"
                  className="icon-image"
                />
              </div>
              <h4 className="icon-title">Budaya Kerja</h4>
              <p className="icon-description">
                Membiasakan diri dengan jam pemuh disiplin, tanggung jawab,
                teamwork, dan profesionalisme di dunia kerja.
              </p>
            </div>

            <div className="icon-item">
              <div className="icon-circle">
                <img
                  src="/IconKeunggulanSMKPraktik4.png"
                  alt="Kerjasama & Relasi"
                  className="icon-image"
                />
              </div>
              <h4 className="icon-title">Kerjasama & Relasi</h4>
              <p className="icon-description">
                Membangun koneksi dan hubungan yang baik dengan rekan kerja
                maupun atasan sebagai bekal masa depan karir.
              </p>
            </div>

            <div className="icon-item">
              <div className="icon-circle">
                <img
                  src="/IconKeunggulanSMKPraktik5.png"
                  alt="Pengembangan Karakter"
                  className="icon-image"
                />
              </div>
              <h4 className="icon-title">Pengembangan Karakter</h4>
              <p className="icon-description">
                Melatih kemandirian, kerja sama tim, kepemimpinan, dan
                kedisiplinan untuk mengembangkan kemampuan diri.
              </p>
            </div>

            <div className="icon-item">
              <div className="icon-circle">
                <img
                  src="/IconKeunggulanSMKPraktik6.png"
                  alt="Bekal Karir"
                  className="icon-image"
                />
              </div>
              <h4 className="icon-title">Bekal Karir</h4>
              <p className="icon-description">
                Mendapat siswa bekal hidup untuk memulai karir profesional dan
                siap menjadi tenaga kerja skilled serta.
              </p>
            </div>
          </div>

          {/* Bottom Image Gallery */}
          <div className="bottom-gallery">
            <div className="bottom-image-item">
              <img
                src="/ImageKeunggulanSMKPraktik1.jpg"
                alt="Praktek Kerja 1"
                className="bottom-gallery-image"
              />
            </div>
            <div className="bottom-image-item">
              <img
                src="/ImageKeunggulanSMKPraktik2.jpg"
                alt="Praktek Kerja 2"
                className="bottom-gallery-image"
              />
            </div>
            <div className="bottom-image-item">
              <img
                src="/ImageKeunggulanSMKPraktik3.jpg"
                alt="Praktek Kerja 3"
                className="bottom-gallery-image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeunggulanSMK;
