import React, { useState } from "react";
import "../styles/Pendaftaran.css";

const Pendaftaran = () => {
  const [form, setForm] = useState({
    nama: "",
    jenisKelamin: "",
    email: "",
    agama: "",
    jenjang: "",
    sekolahAsal: "",
    orangTua: "",
    telpSiswa: "",
    telpOrtu: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminNumber = "6283817903824"; // Ganti dengan nomor WhatsApp Admin
    const message = `Halo, saya ingin mendaftar:\n\n
    Nama: ${form.nama}\n
    Jenis Kelamin: ${form.jenisKelamin}\n
    Email: ${form.email}\n
    Agama: ${form.agama}\n
    Jenjang Pendidikan: ${form.jenjang}\n
    Sekolah Asal: ${form.sekolahAsal}\n
    Orang Tua/Wali: ${form.orangTua}\n
    No. Telp Siswa: ${form.telpSiswa}\n
    No. Telp Ortu: ${form.telpOrtu}`;

    window.open(
      `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="pendaftaran-container">
      <h2>Tahapan Pendaftaran</h2>
      <ol className="petunjuk">
        <li>
          1.Format isian formulir ini sesuai dengan arahan sistem pendataan di
          KEMENDIKBUD, aplikasi Dapodik.
        </li>
        <li>
          2.Mengisi kolom formulir dengan lengkap, data calon peserta didik
          baru, orang tua/wali.
        </li>
        <li>
          3.Setelah melakukan pengisian, cek kembali data apakah sudah benar,
          lalu klik daftar.
        </li>
        <li>
          4.Setelah sukses melakukan pendaftaran, silahkan cek email yang telah
          didaftarkan untuk melihat nomor pendaftaran.
        </li>
      </ol>

      <form className="formulir-pendaftaran" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="full-width-input">
            <label>Nama</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Jenis Kelamin</label>
            <select
              name="jenisKelamin"
              value={form.jenisKelamin}
              onChange={handleChange}
              required
            >
              <option value="">-- Pilih Jenis Kelamin --</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div>
            <label>Email Siswa / Wali</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        

        <div className="form-row">
          <div>
            <label>Nama Sekolah Asal</label>
            <input
              type="text"
              name="sekolahAsal"
              value={form.sekolahAsal}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Nama Orang Tua / Wali</label>
            <input
              type="text"
              name="orangTua"
              value={form.orangTua}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>No. Telp / Handphone Siswa</label>
            <input
              type="number"
              name="telpSiswa"
              value={form.telpSiswa}
              onChange={handleChange}
              placeholder="08123456789"
              required
            />
          </div>
          <div>
            <label>No. Telp Orang Tua / Wali</label>
            <input
              type="number"
              name="telpOrtu"
              value={form.telpOrtu}
              onChange={handleChange}
              placeholder="08123456789"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Daftar via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Pendaftaran;
