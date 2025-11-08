import React from "react";
import "../styles/GuruGuruSMK.css"

const GuruGuruSMK = () => {

  const StrukturSekolahSMKData = [
    {
      title: "Kepala Sekolah",
      name: "FATIMAH WARDAH S,Pd.,M.Pd.",
      img: "/Guru1.png"
    },
    {
      title: "Wakil Bidang Kurikulum",
      name: "Chichi Marthalia, S.Pd., MM",
      img: "/Guru1.png"
    },
    {
      title: "Wakil Bidang Kesiswaan",
      name: "Yusrinaldi, S.Pd",
      img: "/Guru2.png"
    },
    {
       title: "Wakil Bidang Hubungan Industri",
      name: "Annisa Kumala Dewi, S.Pd",
      img: "/Guru1.png"
    },
    { title: "Wakil Bidang Sarpas",
      name: "Asril Kasim, S.E.I",
      img: "/Guru2.png"
    },
    {
      title: "Pendidikan Agama Islam X & XI",
      name: "Hudzaifah Ghani A.N.",
      img: "/Guru2.png"
    },
    {
      title: "Pendidikan Agama Islam XII",
      name: "Fitria Wilda, S.Ag",
      img: "/Guru1.png"
    },
    {
      title: "Bahasa Inggris X",
      name: " Erma Damayanti, S.Pd,M.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Bahasa Inggris XI",
      name: " Gery Pratama Arisulastio,M.Pd",
      img: "/Guru2.png"
    },
    {
      title: "Bahasa Inggris XII",
      name: "Fitri Farhana, M.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Pendidikan Pancasila X",
      name: "Wirdah, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Pendidikan Pancasila XI",
      name: "Indah Susanti, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Pendidikan Pancasila XII",
      name: "Ferdy Moidady",
      img: "/Guru2.png"
    },
    {
      title: "Bahasa Indonesia X & XII",
      name: " Siti Khoiriyah, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Bahasa Indonesia XI",
      name: "Indra Yeni, M.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Matematika X & XII",
      name: " Yusrinaldi, S.Pd",
      img: "/Guru2.png"
    },
    {
      title: "Pendidikan Pancasila XI",
      name: "Ferdy Moidady",
      img: "/Guru2.png"
    },
    {
      title: "Informatika",
      name: "Syamsul Maolana, ST",
      img: "/Guru2.png"
    },
    {
      title: "Seni Budaya",
      name: "Chichi Marthalia, S.Pd, M.M",
      img: "/Guru1.png"
    },
    {
      title: "Ilmu Pengetahuan Alam Sosial",
      name: "Tuti K. Saragih, M.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Pendidikan Jasmani Olahraga & Kesehatan",
      name: " Luckman Nurhakis Naseri, S.Pd",
      img: "/Guru2.png"
    },
    {
      title: "Projek Penguatan Profil Pelajar Pancasila X",
      name: "Tuti K. Saragih, M.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Projek Penguatan Profil Pelajar Pancasila XI",
      name: "Wirdah, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Projek Penguatan Profil Pelajar Pancasila XII",
      name: "Desi Satriani, S.Pd, M.M",
      img: "/Guru1.png"
    },
    {
      title: "Produk Kreatif  Kewirausahaan XI",
      name: "Andimas Riski",
      img: "/Guru2.png"
    },
    {
      title: "Produk Kreatif  Kewirausahaan XII",
      name: "Strie Rani Pratami, SE",
      img: "/Guru1.png"
    },
  ];

  const DKVData  = [
    {
      title: "Desain Komunikasi Visual",
      name: "Muhammad Rizqy, S.S.Kom",
      img: "/Guru2.png"
    },
    {
      title: "Bisnis Desain",
      name: "Muhammad Rizqy, S.S.Kom",
      img: "/Guru2.png"
    },
    {
      title: "Desain Media Interaktif",
      name: "Muhammad Rizqy, S.S.Kom",
      img: "/Guru2.png"
    },
    {
      title: "Sketsa Ilustrasi",
      name: "Ferdi Firdaus, S. Ds",
      img: "/Guru2.png"
    },
    {
      title: "Animasi 2D",
      name: "Ferdi Firdaus, S. Ds",
      img: "/Guru2.png"
    },
    {
      title: "Teknik Pengelolaan Audio Vidio",
      name: "Andimas Riski",
      img: "/Guru2.png"
    },
    {
      title: "3D Modeling",
      name: "Fakhri Rizdzaki",
      img: "/Guru2.png"
    },
    
  ]

  const TJKTData  = [
    {
      title: " Pemograman Dasar",
      name: "   Syamsul Maolana, ST",
      img: "/Guru2.png"
    },
    {
      title: " Pemograman Web",
      name: "   Aby Rohmansah",
      img: "/Guru2.png"
    },
    {
      title: " Sistem Komputer",
      name: "   Aby Rohmansah",
      img: "/Guru2.png"
    },
    {
      title: " Administrasi Sistem Jaringan",
      name: "   Aby Rohmansah",
      img: "/Guru2.png"
    },
    {
      title: " Komputer & Jaringan Dasar",
      name: "   Zulkarnain, S.Pd  ",
      img: "/Guru2.png"
    },
    {
      title: " Administrasi Infrastruktur Jaringan",
      name: "   Zulkarnain, S.Pd",
      img: "/Guru2.png"
    },
    {
      title: " Teknologi Jaringan Berbasis Luas",
      name: "   Zulkarnain, S.Pd",
      img: "/Guru2.png"
    },
    {
      title: " IT Esensial",
      name: "   Zulkarnain, S.Pd",
      img: "/Guru2.png"
    },
    
  ]

  const BCData  = [
    {
      title: "Tata Kamera, Pencahayaan & Suara",
      name: "   Nabila Prastenty",
      img: "/Guru1.png"
    },
    {
      title: " Menpro dan Penyutradaraan",
      name: "   Dhesi Dwinar Rumsari, M.Si",
      img: "/Guru1.png"
    },
    {
      title: "Tata Artistik",
      name: "   Dhesi Dwinar Rumsari, M.Si",
      img: "/Guru1.png"
    },
    {
      title: " Man. Pro dan Penyutradaraan",
      name: "   Suwanto, S.Pd., M. I. Kom",
      img: "/Guru2.png"
    },
    {
      title: "Estetika Seni Audio Visual",
      name: "   Suwanto, S.Pd., M. I. Kom",
      img: "/Guru2.png"
    },
    {
      title: "Editing",
      name: " Almer Adriel",
      img: "/Guru2.png"
    },
    {
      title: "Desain Grafis",
      name: "   Fakhri Rizdzaki",
      img: "/Guru2.png"
    },
  ]

  const LKData  = [
    {
      title: "Alat Laboratorium Kesehatan",
      name: "   Ns. Rendy Rachmawan, S.Kep",
      img: "/Guru1.png"
    },
    {
      title: "Inspeksi, Palpasi, Perkusi, Dan Diagnosa",
      name: "   Ns. Rendy Rachmawan, S.Kep",
      img: "/Guru1.png"
    },
    {
      title: "Kesehatan Dasar & Teknik Keperawatan",
      name: "   Cintia Imami Amd, Kep",
      img: "/Guru1.png"
    },
    {
      title: "Keterampilan Dasar Laboratorium Kesehatan",
      name: " Desi Karmila, A.M.Kep",
      img: "/Guru1.png"
    },
    {
      title: "Kesehatan Reproduksi",
      name: "   Nindi Fakhira Amd.Kep",
      img: "/Guru1.png"
    },
    {
      title: "Anatomi Fisiologi",
      name: "   Nindi Fakhira Amd.Kep",
      img: "/Guru1.png"
    },
    {
      title: "Keterampilan Dasar Medik",
      name: " Indah Kusuma",
      img: "/Guru1.png"
    },
  ]

  const MPLBData  = [
    {
      title: "Elemen I & Elemen II",
      name: "   Danella Martias, S.Sos",
      img: "/Guru1.png"
    },
    {
      title: "Hubungan Masyarakat",
      name: "   Danella Martias, S.Sos",
      img: "/Guru1.png"
    },
    {
      title: "Revolusi Industri MPLB",
      name: "   Desi Satriani, S.Pd, M.M",
      img: "/Guru1.png"
    },
    {
      title: "Keuangan",
      name: "   Intan Nurvitasari, S.E, M. Si",
      img: "/Guru1.png"
    },
    {
      title: "Administrasi & SDM",
      name: "   Strie Rani Pratami, SE",
      img: "/Guru1.png"
    },
  ]

  const STAFFData  = [
    {
      title: "Kepala Tata Usaha",
      name: "Kadam Malik, S.Pd., M.Pd",
      img: "/Guru2.png"
    },
    {
      title: "Bendahara",
      name: "Umi Nurhidayah, S.Ak",
      img: "/Guru1.png"
    },
    {
      title: "Operator & IT Sekolah",
      name: "Zabbar Mulya Sanjaya, A.Md",
      img: "/Guru2.png"
    },
    {
      title: "Bagian Umum",
      name: "Fachrizan",
      img: "/Guru2.png"
    },
    {
      title: "Bagian Keamanan",
      name: "Yayan",
      img: "/Guru2.png"
    },
    {
      title: "Pembina OSIS",
      name: "Emilda Hediyana",
      img: "/Guru2.png"
    },
  ]
    
  

  return (
    <div className="GuruSMK-container">
      <section className="GuruSMK-hero">
        <div className="GuruSMK-hero-overlay">
          <h1 className="GuruSMK-hero-title">
            Guru <br /> <span className="GuruSMK-teks">SMK ATLANTIS PLUS</span>{" "}
            <span className="GuruSMK-teks2"></span>
          </h1>
          <p className="GuruSMK-hero-subtitle">Creative and Entrepreneur School</p>
        </div>
      </section>

      <section className="GuruSMK-section">
        <h2>GURU SMK ATLANTIS</h2>

        {/* Baris 1: 1 kolom */}
        <div className="GuruSMK-row row-2">
          {StrukturSekolahSMKData.slice(0, 1).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 4 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(1, 5).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 3: 4 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(5, 9).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 4: 4 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(9, 13).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 5: 4 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(13, 17).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 6: 2 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(17, 21).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
         {/* Baris 6: 2 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(21, 25).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
        {/* Baris 6: 2 kolom */}
        <div className="GuruSMK-row row-4">
          {StrukturSekolahSMKData.slice(25, 26).map((item, index) => (
            <div className="GuruSMK-card" key={index}>
              <div className="GuruSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMK-section">
        <h2>Mapel Unggulan Desain Komunikasi Visual</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMK-row row-4">
          {DKVData.slice(0, 4).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMK-row row-4">
          {DKVData.slice(4, 7).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMK-section">
        <h2>Mapel Unggulan Teknik Jaringan Komputer & Telekomunikasi</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMK-row row-4">
          {TJKTData.slice(0, 4).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMK-row row-4">
          {TJKTData.slice(4, 8).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMK-section">
        <h2>Mapel Unggulan Broadcasting & Perfilman</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMK-row row-4">
          {BCData.slice(0, 4).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMK-row row-4">
          {BCData.slice(4, 7).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMK-section">
        <h2>Mapel Unggulan Layanan Kesehatan</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMK-row row-4">
          {LKData.slice(0, 4).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMK-row row-4">
          {LKData.slice(4, 7).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMK-section">
        <h2>Mapel Unggulan Manajemen Perkantoran Layanan Bisnis</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMK-row row-4">
          {MPLBData.slice(0, 4).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMK-row row-4">
          {MPLBData.slice(4, 5).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMK-section">
        <h2>STAFF SMK ATLANTIS</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMK-row row-4">
          {STAFFData.slice(0, 4).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMK-row row-4">
          {STAFFData.slice(4, 6).map((item, index) => (
            <div className="StaffSMK-card" key={index}>
              <div className="StaffSMK-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMK-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuruGuruSMK;
