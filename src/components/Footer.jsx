import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-new-inner">

        {/* KIRI: Logo + Nama + Alamat */}
        <div className="footer-col footer-col-brand">
          <img src="/LOGO BARU.png" alt="Atlantis Plus" className="footer-logo" />
          <div className="footer-brand-info">
            <p className="footer-school-name">Atlantis Technopreneur School</p>
            <p className="footer-school-sub">SMP & SMK Atlantis Plus</p>
            <p className="footer-address">
              <FaMapMarkerAlt className="footer-icon-inline" />
              Jalan Bukit Sikumbang No. 103, Depok, Jawa Barat
            </p>
          </div>
        </div>

        {/* TENGAH: Kontak + Sosmed (bawah) */}
        <div className="footer-col footer-col-contact">
          <p className="footer-contact-item">
            <span className="footer-icon-circle"><FaPhone /></span>
            +62 87733565126
          </p>
          <p className="footer-contact-item">
            <span className="footer-icon-circle"><MdPhone /></span>
            (021) 77973872 / 22779687
          </p>
          <p className="footer-contact-item">
            <span className="footer-icon-circle"><FaEnvelope /></span>
            admatlantisplus@gmail.com
          </p>

          {/* Ikon IG di bawah kontak */}
          <div className="footer-socmed-wrapper">
            <p className="footer-socmed-label-title">Follow Us</p>
            <div className="footer-socmed">
              <div className="footer-socmed-item">
                <a
                  href="https://www.instagram.com/smpatlantiplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-socmed-btn"
                  title="Instagram SMP"
                >
                  <FaInstagram />
                </a>
                <span className="footer-socmed-handle">@smpatlantiplus</span>
              </div>
              <div className="footer-socmed-item">
                <a
                  href="https://www.instagram.com/smkatlantisplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-socmed-btn"
                  title="Instagram SMK"
                >
                  <FaInstagram />
                </a>
                <span className="footer-socmed-handle">@smkatlantisplus</span>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN: Link navigasi */}
        <div className="footer-col footer-col-links">
          <h4 className="footer-links-title">Halaman</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/informasi">Informasi</Link></li>
            <li><Link to="/pendaftaran">Pendaftaran</Link></li>
            <li><Link to="/jurusan">Jurusan</Link></li>
            <li><Link to="/galerismp">Galeri SMP</Link></li>
            <li><Link to="/galerismk">Galeri SMK</Link></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-copyright">
        © Atlantis Technopreneur School {new Date().getFullYear()} — SMP & SMK Atlantis Plus
      </div>
    </footer>
  );
};

export default Footer;
