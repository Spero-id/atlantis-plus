import React from "react"; // useState tidak lagi diperlukan, jadi dihapus dari import
import "../styles/OlimpiadeSMP.css";

const TheBestEnglish = () => {
  return (
    <div className="OlimpiadeSMP-container">
      <section className="OlimpiadeSMP-hero">
        <div className="OlimpiadeSMP-hero-overlay">
          <h1 className="OlimpiadeSMP-hero-title">
            The Best ENGLISH <br />{" "}
            <span className="OlimpiadeSMP-teks">SMP</span>{" "}
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
            <h3>THE BEST ENGLISH</h3>
            <p className="sub">SMP ATLANTIS PLUS</p>
            <p>
              Penghargaan untuk mereka yang terpilih menjadi THE BEST ENGLISH
              di setiap tahunnya, diraih dari bagaimana Siswa atau Siswi
              memiliki karakter yang bagus selama bersekolah juga siswa
              mengembangkan dan mampu menunjukan karakternya dengan baik. Dengan
              itu kami memberikannya penghargaan berupa piala atas apa yang
              telah diraihnya
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
            <p className="sub">THE BEST ENGLISH</p>
            <p>
              Piala yang diberikan kepada anak yang mendapatkan gelar THE BEST
              ENGLISH dilakukan pada saat ATLANTIS TALENT DAY, yang diberikan
              oleh pembimbing.
            </p>

            <p>
              {" "}
              <br />
              ATLANTIS TALENT DAY merupakan perayaan gembira untuk setiap anak
              atlantis setiap tahunnya yang diikuti oleh murid, guru juga para
              staff sekolah.
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

export default TheBestEnglish;
