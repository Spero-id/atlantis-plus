import React from "react";
import "../styles/Pendaftaran.css";

const PendaftaranSMP = () => {
  return (
    <div className="pendaftaran-container">
      <h2>Pendaftaran SMP Online</h2>
      <div className="ppdb-tutup-box">
        <div className="ppdb-tutup-icon">🔒</div>
        <h3>PPDB SMP Telah Ditutup</h3>
        <p>
          Pendaftaran Peserta Didik Baru (PPDB) SMP Atlantis Plus untuk tahun
          ajaran ini telah ditutup karena kuota telah terpenuhi.
        </p>
        <p>
          Untuk informasi lebih lanjut, silakan hubungi pihak sekolah secara
          langsung.
        </p>
      </div>
    </div>
  );
};

export default PendaftaranSMP;
