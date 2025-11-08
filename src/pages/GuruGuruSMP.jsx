import React from "react";
import "../styles/GuruGuruSMP.css"

const GuruGuruSMP = () => {

  const StrukturSekolahData = [
    {
      title: "Kepala Sekolah",
      name: "NURHASYANAH SE, M.PD",
      img: "/Guru1.png"
    },
    {
      title: "Wakil Bidang Kurikulum",
      name: "Fitri Farhana, M.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Wakil Bidang Kesiswaan",
      name: "Egy Samisdi, S.Kom",
      img: "/Guru2.png"
    },
    {
       title: "Wakil Bidang Humas",
      name: "Hanifa Nurdin",
      img: "/Guru1.png"
    },
    { title: "Wakil Bidang Sarpas",
      name: "Asril Kasim, S.E.I",
      img: "/Guru2.png"
    },
    {
      title: "Pendidikan Agama Islam & Al Qur’an Hadist",
      name: "Fitria Wilda S. Ag",
      img: "/Guru1.png"
    },
    {
      title: "Entrepreneur",
      name: "Hanifa Nurdin, MM",
      img: "/Guru1.png"
    },
    {
      title: "Bahasa Indonesia",
      name: "Herlin, SS",
      img: "/Guru1.png"
    },
    {
      title: "Bahasa Inggris",
      name: "Dewi Astuti, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Ilmu Pengetahuan Sosial",
      name: "Tasya Fadillah Ananti",
      img: "/Guru1.png"
    },
    {
      title: "Ilmu Pengetahuan Sosial",
      name: "Hanifa Nurdin, MM",
      img: "/Guru1.png"
    },
    {
      title: "Matematika",
      name: "Maliki, S.Mat",
      img: "/Guru2.png"
    },
    {
      title: "Matematika",
      name: "Ferdy Moidady",
      img: "/Guru2.png"
    },
    {
      title: "Ilmu Pengetahuan Alam",
      name: "Vira Arnedi Putri, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Seni Budaya",
      name: "Tasya Fadillah Ananti, S.Mat",
      img: "/Guru1.png"
    },
    {
      title: "Pendidikan Jasmani Olahraga & Kesehatan",
      name: "Luckman Nurhakis Naseri, S.Pd",
      img: "/Guru2.png"
    },
    {
      title: "Pendidikan Pancasila",
      name: "Zulkarnain, S. Pd",
      img: "/Guru2.png"
    },
    {
      title: "Informatika",
      name: "M. Reza Maulana Saputra",
      img: "/Guru2.png"
    },
    {
      title: "Bahasa Sunda",
      name: "Nia Rosiana, A.Md",
      img: "/Guru1.png"
    },
  ];

  const StaffData  = [
    {
      title: "Kepala Tata Usaha",
      name: "Sri Novita, SKM",
      img: "/Guru1.png"
    },
    {
      title: "Staff Kurikulum Pengarsipan",
      name: "Nia Rosiana, A.Md",
      img: "/Guru1.png"
    },
    {
      title: "Operator & IT Sekolah",
      name: "Zabbar Mulya Sanjaya, A.Md",
      img: "/Guru2.png"
    },
    {
      title: "Bendahara",
      name: "Mirdah Rizanah, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Laboran IPA",
      name: "Vira Arnedi Putri, S.Pd",
      img: "/Guru1.png"
    },
    {
      title: "Pustakawan",
      name: "Asril Kasim, S.E.I",
      img: "/Guru2.png"
    },
    {
      title: "Pembina OSIS",
      name: "Maliki, S.Mat",
      img: "/Guru2.png"
    },
    
  ]
    
  

  return (
    <div className="GuruSMP-container">
      <section className="GuruSMP-hero">
        <div className="GuruSMP-hero-overlay">
          <h1 className="GuruSMP-hero-title">
            Guru <br /> <span className="GuruSMP-teks">SMP ATLANTIS PLUS</span>{" "}
            <span className="GuruSMP-teks2"></span>
          </h1>
          <p className="GuruSMP-hero-subtitle">Creative and Entrepreneur School</p>
        </div>
      </section>

      <section className="GuruSMP-section">
        <h2>GURU SMP ATLANTIS</h2>

        {/* Baris 1: 1 kolom */}
        <div className="GuruSMP-row row-2">
          {StrukturSekolahData.slice(0, 1).map((item, index) => (
            <div className="GuruSMP-card" key={index}>
              <div className="GuruSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 4 kolom */}
        <div className="GuruSMP-row row-4">
          {StrukturSekolahData.slice(1, 5).map((item, index) => (
            <div className="GuruSMP-card" key={index}>
              <div className="GuruSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 3: 4 kolom */}
        <div className="GuruSMP-row row-4">
          {StrukturSekolahData.slice(5, 9).map((item, index) => (
            <div className="GuruSMP-card" key={index}>
              <div className="GuruSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 4: 4 kolom */}
        <div className="GuruSMP-row row-4">
          {StrukturSekolahData.slice(9, 13).map((item, index) => (
            <div className="GuruSMP-card" key={index}>
              <div className="GuruSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 5: 4 kolom */}
        <div className="GuruSMP-row row-4">
          {StrukturSekolahData.slice(13, 17).map((item, index) => (
            <div className="GuruSMP-card" key={index}>
              <div className="GuruSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 6: 2 kolom */}
        <div className="GuruSMP-row row-4">
          {StrukturSekolahData.slice(17, 19).map((item, index) => (
            <div className="GuruSMP-card" key={index}>
              <div className="GuruSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="GuruSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="StaffSMP-section">
        <h2>STAFF SMP ATLANTIS</h2>

        {/* Baris 1: 4 kolom */}
        <div className="StaffSMP-row row-4">
          {StaffData.slice(0, 4).map((item, index) => (
            <div className="StaffSMP-card" key={index}>
              <div className="StaffSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMP-text">
                <p>{item.title}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2: 3 kolom */}
        <div className="StaffSMP-row row-4">
          {StaffData.slice(4, 7).map((item, index) => (
            <div className="StaffSMP-card" key={index}>
              <div className="StaffSMP-image">
                <img src={item.img || "/default.png"} alt={item.name} />
              </div>
              <div className="StaffSMP-text">
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

export default GuruGuruSMP;
