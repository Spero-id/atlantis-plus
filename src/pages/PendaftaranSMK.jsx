import React from "react";
import "../styles/Pendaftaran.css";

const PendaftaranSMK = () => {
  return (
    <div className="pendaftaran-container">
      <h2>Pendaftaran SMK Online</h2>
      <div className="ppdb-tutup-box">
        <div className="ppdb-tutup-icon">🔒</div>
        <h3>PPDB SMK Telah Ditutup</h3>
        <p>
          Pendaftaran Peserta Didik Baru (PPDB) SMK Atlantis Plus untuk tahun
          ajaran ini telah ditutup karena kuota seluruh jurusan telah terpenuhi.
        </p>
        <p>
          Untuk informasi lebih lanjut, silakan hubungi pihak sekolah secara
          langsung.
        </p>
      </div>
    </div>
  );
};

export default PendaftaranSMK;
