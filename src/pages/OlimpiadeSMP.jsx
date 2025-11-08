import React from "react"; // useState tidak lagi diperlukan, jadi dihapus dari import
import "../styles/OlimpiadeSMP.css";

const OlimpiadeSMP = () => {
  return (
    <div className="OlimpiadeSMP-container">
      <section className="OlimpiadeSMP-hero">
        <div className="OlimpiadeSMP-hero-overlay">
          <h1 className="OlimpiadeSMP-hero-title">
            Olimpiade <br /> <span className="OlimpiadeSMP-teks">SMP</span>{" "}
            <span className="OlimpiadeSMP-teks1">ATLANTIS PLUS</span>
          </h1>
          <p className="OlimpiadeSMP-hero-subtitle">
            Nothing impossible in this word
          </p>
        </div>
      </section>

      {/* Penghargaan Atas */}
      <section className="penghargaan-container-atas">
        <div className="penghargaan-row red-bg">
          <div className="penghargaan-text">
            <h3>JUARA 2 OLIMPIADE OSN</h3>
            <p className="sub">SMP ATLANTIS PLUS</p>
            <p>
              SMP Atlantis Plus memenangkan juara 2 olimpiade OSN Tingkat
              Provinsi karena melakukan seleksi siswa berbakat sejak dini,
              memberikan pelatihan intensif dan terstruktur, serta dukungan
              penuh dari sekolah seperti fasilitas belajar, pembimbing ahli, dan
              strategi belajar yang tepat. Sekolah juga aktif mengikutsertakan
              siswa dalam lomba-lomba pemanasan untuk melatih mental dan
              pengalaman, serta membangun budaya semangat berprestasi di
              lingkungan sekolah. Kombinasi semua faktor ini membuat siswa siap
              bersaing dan berhasil meraih juara.
            </p>
          </div>
          <div className="penghargaan-img">
            <img src="/Penghargaan1.jpg" alt="Best English" />
          </div>
        </div>
      </section>

      {/* Penghargaan Bawah */}
      <section className="penghargaan-container-bawah">
        <div className="penghargaan-row">
          <div className="penghargaan-text">
            <h3>PENGHARGAAN</h3>
            <p className="sub">JUARA 2 OLIMPIADE OSN</p>
            <p>
              Piala yang diberikan kepada anak yang mendapatkan JUARA 2
              OLIMPIADE SAINS NASIONAL dilakukan pada saat Pemberian dan
              pengumuman juara, yang diberikan oleh Panitia.
            </p>

            <p>
              {" "}
              <br />
              Olimpiade diadakan setiap tahunnya diberbagai tempat, SMP ATLANTIS
              PLUS mengirim beberapa siswa siswinya untuk mengikuti ajang
              Olimpiade.
            </p>
          </div>
          <div className="penghargaan-img">
            <img src="/Penghargaan2.jpg" alt="Penghargaan" />
          </div>
        </div>
      </section>

      {/* Champion Section */}
      <section className="champion-section">
        <h2>WE ARE THE CHAMPION</h2>
        <div className="champion-grid">
          <div className="champion-card">
            <img src="/TheBest1.png" alt="Best Tahfidz" />
            <p>THE BEST TAHFIDZ</p>
          </div>
          <div className="champion-card">
            <img src="/TheBest1.png" alt="Best Entrepreneur" />
            <p>THE BEST ENTREPRENEUR</p>
          </div>
          <div className="champion-card">
            <img src="/TheBest1.png" alt="Best Character" />
            <p>THE BEST CHARACTER</p>
          </div>
          <div className="champion-card">
            <img src="/TheBest1.png" alt="Juara Olimpiade" />
            <p>JUARA OLIMPIADE</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OlimpiadeSMP;
