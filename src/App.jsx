import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './context/ScrollToTop';

import Beranda from './pages/Beranda';
import Informasi from './pages/Informasi';
import Pendaftaran from './pages/Pendaftaran';
import Login from './pages/Login';
import KurikulumSMP from './pages/KurikulumSMP';
import KeunggulanSMP from './pages/KeunggulanSMP';
import PrestasiSMP from './pages/PrestasiSMP';
import GuruGuruSMP from './pages/GuruGuruSMP';
import KurikulumSMK from './pages/KurikulumSMK';
import KeunggulanSMK from './pages/KeunggulanSMK';
import PrestasiSMK from './pages/PrestasiSMK';
import GuruGuruSMK from './pages/GuruGuruSMK';
import GaleriSMP from './pages/GaleriSMP';
import GaleriSMK from './pages/GaleriSMK';
import Jurusan from './pages/Jurusan';
import MoreInfoJurusanTJKT from './pages/MoreInfoJurusanTJKT';
import MoreInfoJurusanDKV from './pages/MoreInfoJurusanDKV';
import MoreInfoJurusanBC from './pages/MoreInfoJurusanBC';
import MoreInfoJurusanLK from './pages/MoreInfoJurusanLK';
import Jurusanmanagement from './pages/Jurusanmanagement';
import StrukturSekolah from './pages/StrukturSekolah';
import EkstrakurikulerSMP from './pages/EkstrakurikulerSMP';
import EkstrakurikulerSMK from './pages/EkstrakurikulerSMK';
import OlimpiadeSMP from './pages/OlimpiadeSMP';
import OlimpiadeSMK from './pages/OlimpiadeSMK';
import TheBestTahfidz from './pages/TheBestTahfidz';
import TheBestEnglish from './pages/TheBestEnglish';
import TheBestCharacter from './pages/TheBestCharacter';
import TheBestEntrepeneur from './pages/TheBestEntrepeneur';
import PancakSilat from './pages/PancakSilat';
import './App.css';

function AppWrapper() {
  const location = useLocation();

  // Auto scroll ke atas tiap kali ganti halaman
  useEffect(() => {
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";

    const root = document.scrollingElement || document.documentElement;
    root.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const containers = document.querySelectorAll(
      ".main-content, main, .page-wrapper, [data-scrollable]"
    );
    containers.forEach(el => {
      if (el.scrollHeight > el.clientHeight) {
        el.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/struktursekolah" element={<StrukturSekolah />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kurikulumsmp" element={<KurikulumSMP />} />
          <Route path="/keunggulansmp" element={<KeunggulanSMP />} />
          <Route path="/prestasismp" element={<PrestasiSMP />} />
          <Route path="/gurugurusmp" element={<GuruGuruSMP />} />
          <Route path="/galerismp" element={<GaleriSMP />} />
          <Route path="/kurikulumsmk" element={<KurikulumSMK />} />
          <Route path="/keunggulansmk" element={<KeunggulanSMK />} />
          <Route path="/prestasismk" element={<PrestasiSMK />} />
          <Route path="/jurusan" element={<Jurusan />} />
          <Route path="/gurugurusmk" element={<GuruGuruSMK />} />
          <Route path="/galerismk" element={<GaleriSMK />} />
          <Route path="/moreinfotjkt" element={<MoreInfoJurusanTJKT />} />
          <Route path="/moreinfodkv" element={<MoreInfoJurusanDKV />} />
          <Route path="/moreinfobc" element={<MoreInfoJurusanBC />} />
          <Route path="/moreinfolk" element={<MoreInfoJurusanLK />} />
          <Route path="/Jurusanmanagement" element={<Jurusanmanagement />} />
          <Route path="/eksrasmp" element={<EkstrakurikulerSMP />} />
          <Route path="/eksrasmk" element={<EkstrakurikulerSMK />} />
          <Route path="/olimpiadesmp" element={<OlimpiadeSMP />} />
          <Route path="/olimpiadesmk" element={<OlimpiadeSMK />} />
          <Route path="/thebesttahfidz" element={<TheBestTahfidz />} />
          <Route path="/thebestenglish" element={<TheBestEnglish />} />
          <Route path="/thebestcharacter" element={<TheBestCharacter />} />
          <Route path="/thebestentrepeneur" element={<TheBestEntrepeneur />} />
          <Route path="/pancaksilat" element={<PancakSilat />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  );
}

export default App;
