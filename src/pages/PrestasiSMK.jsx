import React from "react";
import "../styles/PrestasiSMK.css"; // Perbarui import CSS ke PrestasiSMK.css

const PrestasiSMK = () => {
  return (
    <div className="prestasi-smk-container-smk">
      <section className="prestasi-smk-hero-smk">
        {/* Ganti classname */}
        <div className="prestasi-smk-hero-overlay-smk">
          <h1 className="prestasi-smk-hero-title-smk">
            PRESTASI <br />
            <span className="prestasi-smk-jenis-teks-smk"> SMK</span>
            <span className="atlantis-plus-teks-smk"> ATLANTIS PLUS</span>
          </h1>
          <p className="prestasi-smk-hero-subtitle-smk">
            We Make Your Dreams Come True!
          </p>
        </div>
      </section>
      <div className="prestasi-info-section-smk">
        <div className="prestasi-content-placeholder-smk">
          <div className="prestasi-akademi-section-smk">
            <h2 className="prestasi-section-title-smk">PRESTASI AKADEMIK</h2>
            <p className="prestasi-section-deskripsi-smk">
              Prestasi merupakan pencapaian seseoranh yang berhasil meraih
              sebuah keberhasilan dalam menciptakan, membuat atau bahkan
              menghasilkan sesuatu yang bermanfaat untuk dirinya juga orang
              lain, maka murid yang mendapatkan prestasi layak untuk mendapatkan
              sesuatu yang berharga seperti sertifikat penghargaan, piala atau
              medali
            </p>
            <div className="akademi-cards-container-smk">
              <div className="akademi-card-smk">
                <div className="akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="prestasi img.webp"
                  alt="English Achievement"
                  className="akademi-card-image-smk"
                />
                {/* Ganti classname */}
                <span className="akademi-card-text-smk">Olimpiade IT</span>
                {/* Ganti classname */}
              </div>
              <div className="akademi-card-smk">
                <div className="akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Tahfidz Achievement"
                  className="akademi-card-image-smk"
                />

                <span className="akademi-card-text-smk">TOEIC English</span>
              </div>
              <div className="akademi-card-smk">
                <div className="akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Entrepreneur Achievement"
                  className="akademi-card-image-smk"
                />
                <span className="akademi-card-text-smk">Vokasi</span>
              </div>
            </div>
            <div className="akademi-bottom-content-smk">
              <div className="akademi-description-box-smk">
                <p>
                  Siswa Siswi SMK ATLANTIS PLUS memiliki 4 keunggulan dan dari
                  setiap 4, masing masing akan dipilih siapa yang menjadi the
                  best dalam dari masing masing keunggulan, dan mereka yang
                  diberi penghargaan seperti piala dan sertifikan, dan untuk
                  prestasi akademik, mereka mendapatkan piala sebagai
                  penghargaan setiap tahunnya, penghargaan ini diberikan saat
                  acara bernama ATLANTIS TALENT DAY (ATD) yang diadakan setiap
                  tahun
                </p>
              </div>
            </div>
          </div>
          {/* Konten Prestasi Non-Akademik */}
          <div className="prestasi-non-akademi-section-smk">
            <h2 className="prestasi-section-title-smk non-akademi-title-smk">
              PRESTASI NON - AKADEMIK
            </h2>
            <div className="non-akademi-cards-container-smk">
              {/* Card 1 */}
              <div className="non-akademi-card-smk">
                <div className="non-akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="non-akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Olimpiade Achievement"
                  className="non-akademi-card-image-smk"
                />
                <span className="non-akademi-card-text-smk">
                  Solo Vocal <br /> FLS2N Depok
                </span>
              </div>

              {/* Card 2 */}
              <div className="non-akademi-card-smk">
                <div className="non-akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="non-akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Story Telling Achievement"
                  className="non-akademi-card-image-smk"
                />
                <span className="non-akademi-card-text-smk">
                  Let's Speak <br /> Competition
                </span>
              </div>

              {/* Card 3 */}
              <div className="non-akademi-card-smk">
                <div className="non-akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="non-akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Pencak Silat Achievement"
                  className="non-akademi-card-image-smk"
                />
                <span className="non-akademi-card-text-smk">
                  Teknologi <br /> Tepat Guna
                </span>
              </div>

              {/* Card 4 */}
              <div className="non-akademi-card-smk">
                <div className="non-akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="non-akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Futsal Achievement"
                  className="non-akademi-card-image-smk"
                />
                <span className="non-akademi-card-text-smk">
                  Film Pendek <br /> Festival AVICENA
                </span>
              </div>

              {/* Card 5 */}
              <div className="non-akademi-card-smk">
                <div className="non-akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="non-akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Basket Achievement"
                  className="non-akademi-card-image-smk"
                />
                <span className="non-akademi-card-text-smk">
                  Film Pendek <br />
                  OSN
                </span>
              </div>

              {/* Card 6 */}
              <div className="non-akademi-card-smk">
                <div className="non-akademi-card-trophy-wrapper-smk">
                  <img
                    src="/trophy yellow.png"
                    alt="Trophy Icon"
                    className="non-akademi-card-trophy-smk"
                  />
                </div>
                <img
                  src="/prestasi img.webp"
                  alt="Catur Achievement"
                  className="non-akademi-card-image-smk"
                />
                <span className="non-akademi-card-text-smk">
                  Tari Modern <br /> Charaka
                </span>
              </div>
            </div>
          </div>
          {/* Bagian Deskripsi dan Gambar Besar Bawah */}
          <div className="prestasi-description-image-section-smk">
            {" "}
            {/* Ganti classname */}
            {/* Elemen Bintang (kiri & kanan) */}
            <div className="star-wrapper-smk left-star-smk">
              <img src="/star icon.png" alt="Star" />
            </div>{" "}
            {/* Ganti classname */}
            <div className="star-wrapper-smk right-star-smk">
              <img src="/star icon.png" alt="Star" />
            </div>{" "}
            {/* Ganti classname */}
            {/* Container untuk deskripsi dengan border merah melengkung */}
            <div className="description-text-container-smk">
              {" "}
              {/* Ganti classname */}
              <p className="prestasi-main-description-smk">
                {" "}
                {/* Ganti classname */}
                Di SMK Atlantis Plus, kami percaya bahwa pendidikan yang baik
                tidak hanya ditentukan oleh pencapaian akademik, tetapi juga
                oleh perkembangan karakter, kreativitas, dan potensi siswa
                secara menyeluruh. Oleh karena itu, kami memberikan perhatian
                besar pada pengembangan non-akademik melalui berbagai kegiatan
                ekstrakurikuler, lomba, dan program pembinaan minat dan bakat.
                Siswa-siswi SMK Atlantis Plus telah berhasil meraih berbagai
                prestasi membanggakan di tingkat kota, provinsi, bahkan
                nasional, dalam bidang olahraga seperti futsal dan pencak silat,
                seni seperti lomba tari daerah dan menggambar, serta bidang
                kepemimpinan dan karakter seperti lomba pramuka dan kegiatan
                keorganisasian. Tidak hanya itu, siswa kami juga aktif dalam
                lomba pidato, story telling, dan literasi digital yang
                menunjukkan kemampuan komunikasi dan berpikir kritis mereka.
              </p>
            </div>
            {/* Gambar Group dan Caption */}
            <img
              src="/MoreInfoJurusanHero.jpg"
              alt="Students Group Achievement"
              className="prestasi-group-image-smk"
            />{" "}
            {/* Ganti classname */}
            <p className="prestasi-group-image-caption-smk">
              NEVER SURRENDER TO ACHIEVE YOUR DREAM
            </p>{" "}
            {/* Ganti classname */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrestasiSMK;
