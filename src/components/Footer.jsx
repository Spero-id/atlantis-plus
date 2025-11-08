import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Pastikan Anda memiliki file CSS ini

// Import ikon dari react-icons
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'; // Menggunakan ikon Font Awesome dari react-icons

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState({}); // State untuk mengelola dropdown yang aktif

  // Fungsi untuk toggle dropdown/submenu spesifik di footer
  const handleToggleDropdown = (key, event) => {
    if (event) {
      event.preventDefault(); // Mencegah navigasi Link
      event.stopPropagation(); // Mencegah event bubble
    }

    setActiveDropdown(prev => {
      // Jika key yang sama diklik lagi, tutup
      if (prev[key]) {
        return { ...prev, [key]: false };
      } else {
        // Logika untuk menutup dropdown/submenu lain saat yang baru dibuka
        const newState = {};
        // Tutup semua dropdown lain, kecuali yang baru akan dibuka
        Object.keys(prev).forEach(k => {
          newState[k] = false;
        });
        newState[key] = true; // Buka dropdown yang baru diklik
        return newState;
      }
    });
  };

  // Fungsi untuk menutup semua dropdown saat link sub-menu diklik
  const handleNavLinkClick = () => {
    setActiveDropdown({});
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/smklogonav.png" alt="SMK Atlantis Plus" />
        <img src="/smplogonav.png" alt="SMP Atlantis Plus" />
      </div>

      <div className="footer-right">
        <div className="footer-section">
          <h4>Link Terkait</h4>
          <ul>
            <li><Link to="/" onClick={handleNavLinkClick}>Beranda</Link></li>
            <li><Link to="/pendaftaran" onClick={handleNavLinkClick}>Pendaftaran</Link></li>
            <li><Link to="/informasi" onClick={handleNavLinkClick}>Informasi</Link></li>
            {/* Tambahkan link sekolah jika ada halaman spesifik */}
            {/* <li><Link to="/sekolah" onClick={handleNavLinkClick}>Sekolah</Link></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tentang</h4>
          <ul>
            {/* Kurikulum Dropdown */}
            <li className={`footer-dropdown-item ${activeDropdown['kurikulum'] ? 'open' : ''}`}>
              <div
                className="footer-dropdown-toggle"
                onClick={(e) => handleToggleDropdown('kurikulum', e)}
              >
                Kurikulum <span className="footer-arrow-down">&#9660;</span>
              </div>
              <ul className={`footer-dropdown-menu ${activeDropdown['kurikulum'] ? 'open' : ''}`}>
                <li><Link to="/kurikulumsmp" onClick={handleNavLinkClick}>SMP</Link></li>
                <li><Link to="/kurikulumsmk" onClick={handleNavLinkClick}>SMK</Link></li>
              </ul>
            </li>

            {/* Keunggulan Dropdown */}
            <li className={`footer-dropdown-item ${activeDropdown['keunggulan'] ? 'open' : ''}`}>
              <div
                className="footer-dropdown-toggle"
                onClick={(e) => handleToggleDropdown('keunggulan', e)}
              >
                Keunggulan <span className="footer-arrow-down">&#9660;</span>
              </div>
              <ul className={`footer-dropdown-menu ${activeDropdown['keunggulan'] ? 'open' : ''}`}>
                <li><Link to="/keunggulansmp" onClick={handleNavLinkClick}>SMP</Link></li>
                <li><Link to="/keunggulansmk" onClick={handleNavLinkClick}>SMK</Link></li>
              </ul>
            </li>

            {/* Jurusan - Langsung Link */}
            <li><Link to="/jurusan" onClick={handleNavLinkClick}>Jurusan</Link></li>

            {/* Prestasi Dropdown */}
            <li className={`footer-dropdown-item ${activeDropdown['prestasi'] ? 'open' : ''}`}>
              <div
                className="footer-dropdown-toggle"
                onClick={(e) => handleToggleDropdown('prestasi', e)}
              >
                Prestasi <span className="footer-arrow-down">&#9660;</span>
              </div>
              <ul className={`footer-dropdown-menu ${activeDropdown['prestasi'] ? 'open' : ''}`}>
                <li><Link to="/prestasismp" onClick={handleNavLinkClick}>SMP</Link></li>
                <li><Link to="/prestasismk" onClick={handleNavLinkClick}>SMK</Link></li>
              </ul>
            </li>

            {/* Galeri Dropdown */}
            <li className={`footer-dropdown-item ${activeDropdown['galeri'] ? 'open' : ''}`}>
              <div
                className="footer-dropdown-toggle"
                onClick={(e) => handleToggleDropdown('galeri', e)}
              >
                Galeri <span className="footer-arrow-down">&#9660;</span>
              </div>
              <ul className={`footer-dropdown-menu ${activeDropdown['galeri'] ? 'open' : ''}`}>
                <li><Link to="/galerismp" onClick={handleNavLinkClick}>SMP</Link></li> {/* Perbaiki typo path jika ada, dari galer/smp menjadi galeri/smp */}
                <li><Link to="/galerismk" onClick={handleNavLinkClick}>SMK</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>087733565126</p>
          <p>smpatlantisplus@gmail.com</p>
          <p>smkatlantisplus@yahoo.com</p>
          <p>
            Jl. Bukit Sikumbang No.103<br />
            Rangkapan Jaya Baru, Kec. Pancoran Mas,<br />
            Kota Depok, Jawa Barat 16433
          </p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          {/* Mengganti <i> dengan React Icons */}
          <p><FaInstagram /> @atlantisplus</p>
          <p><FaYoutube /> atlantisplus</p>
          <p><FaFacebook /> atlantisplus</p>
          <p className="footer-desc">
            Atlantis Technopreneur School | English Day | Character | Creative | Digital School | Tahfidz Al-Qur’an<br />
            Program Keahlian: DKV | LK | BC | TKT | MPLB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;