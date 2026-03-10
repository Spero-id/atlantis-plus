import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState({});
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveDropdown({});
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      hamburger.classList.toggle("open", !isMobileMenuOpen);
    }
  };

  const handleToggleDropdown = (key, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    setActiveDropdown((prev) => {
      if (prev[key]) {
        return { ...prev, [key]: false };
      } else {
        const newState = {};
        Object.keys(prev).forEach((k) => {
          if (key.startsWith(k + "-") || k.startsWith(key + "-")) {
            newState[k] = prev[k];
          } else if (k === key.split("-")[0] && key.includes("-")) {
            newState[k] = true;
          } else {
            newState[k] = false;
          }
        });
        newState[key] = true;
        return newState;
      }
    });

    if (window.innerWidth <= 768 && !isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      const hamburger = document.querySelector(".hamburger");
      if (hamburger) hamburger.classList.add("open");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown({});
        const hamburger = document.querySelector(".hamburger");
        if (hamburger) {
          hamburger.classList.remove("open");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setActiveDropdown({});
      const hamburger = document.querySelector(".hamburger");
      if (hamburger) {
        hamburger.classList.remove("open");
      }
    } else {
      setActiveDropdown({});
    }
  };

  return (
    <nav className="navbar-atlantis" ref={navbarRef}>
      <div className="navbar-left">
        <img src="/smplogonav.png" alt="Logo SMP" className="navbar-logo" />
        <img src="/smklogonav.png" alt="Logo SMK" className="navbar-logo" />
      </div>

      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " active" : "")
            }
            onClick={handleNavLinkClick}
          >
            Beranda
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/Informasi"
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " active" : "")
            }
            onClick={handleNavLinkClick}
          >
            Informasi
          </NavLink>
        </li>

        {/* SEKOLAH */}
        <li
          className={`navbar-item dropdown-submenu ${
            activeDropdown["sekolah"] ? "open" : ""
          }`}
        >
          <div
            role="button"
            className={`navbar-link dropdown-toggle ${
              activeDropdown["sekolah"] ? "active" : ""
            }`}
            onClick={(e) => handleToggleDropdown("sekolah", e)}
          >
            Sekolah <span className="arrow-down">&#9660;</span>
          </div>

          <ul
            className={`dropdown-menu ${activeDropdown["sekolah"] ? "open" : ""}`}
          >
            {/* SMP */}
            <li
              className={`dropdown-submenu ${
                activeDropdown["sekolah-smp"] ? "open" : ""
              }`}
            >
              <div
                role="button"
                className="dropdown-item"
                onClick={(e) => handleToggleDropdown("sekolah-smp", e)}
              >
                SMP <span className="arrow-down">&#9660;</span>
              </div>
              <ul
                className={`sub-submenu ${
                  activeDropdown["sekolah-smp"] ? "open" : ""
                }`}
              >
                <li>
                  <Link
                    to="/kurikulumsmp"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Kurikulum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/keunggulansmp"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Keunggulan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/prestasismp"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Prestasi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/eksrasmp"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Ekstrakurikuler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/olimpiadesmp"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Olimpiade
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thebestentrepeneur"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    The Best Entrepeneur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thebesttahfidz"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    The Best Tahfidz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thebestenglish"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    The Best English
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thebestcharacter"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    The Best Character
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pancaksilat"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Pancak Silat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gurugurusmp"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Guru - Guru
                  </Link>
                </li>
              </ul>
            </li>

            {/* SMK */}
            <li
              className={`dropdown-submenu ${
                activeDropdown["sekolah-smk"] ? "open" : ""
              }`}
            >
              <div
                role="button"
                className="dropdown-item"
                onClick={(e) => handleToggleDropdown("sekolah-smk", e)}
              >
                SMK <span className="arrow-down">&#9660;</span>
              </div>
              <ul
                className={`sub-submenu ${
                  activeDropdown["sekolah-smk"] ? "open" : ""
                }`}
              >
                <li>
                  <Link
                    to="/kurikulumsmk"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Kurikulum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jurusan"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Jurusan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/keunggulansmk"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Keunggulan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/prestasismk"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Prestasi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/eksrasmk"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Ekstrakurikuler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/olimpiadesmk"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Olimpiade
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gurugurusmk"
                    className="submenu-item"
                    onClick={handleNavLinkClick}
                  >
                    Guru - Guru
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* GALERI */}
        <li
          className={`navbar-item dropdown-submenu ${
            activeDropdown["galeri"] ? "open" : ""
          }`}
        >
          <div
            role="button"
            className={`navbar-link dropdown-toggle ${
              activeDropdown["galeri"] ? "active" : ""
            }`}
            onClick={(e) => handleToggleDropdown("galeri", e)}
          >
            Galeri <span className="arrow-down">&#9660;</span>
          </div>
          <ul
            className={`dropdown-menu ${activeDropdown["galeri"] ? "open" : ""}`}
          >
            <li>
              <Link
                to="/galerismp"
                className="submenu-item"
                onClick={handleNavLinkClick}
              >
                SMP
              </Link>
            </li>
            <li>
              <Link
                to="/galerismk"
                className="submenu-item"
                onClick={handleNavLinkClick}
              >
                SMK
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* PPDB Buttons (SMP & SMK) */}
      <div className="navbar-actions">
        <Link
          to="/ppdbsmp"
          className="ppdb-button ppdb-smp"
          onClick={handleNavLinkClick}
        >
          PPDB SMP
        </Link>

        <Link
          to="/ppdbsmk"
          className="ppdb-button ppdb-smk"
          onClick={handleNavLinkClick}
        >
          PPDB SMK
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
