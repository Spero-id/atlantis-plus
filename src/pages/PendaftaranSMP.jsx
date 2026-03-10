import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/Pendaftaran.css";

const PendaftaranSMP = () => {
  const [form, setForm] = useState({
    nama: "",
    jenisKelamin: "",
    email: "",
    sekolahAsal: "",
    orangTua: "",
    telpSiswa: "",
    telpOrtu: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Map form fields to API requirements
    const payload = {
      jenjang: "SMP",
      nama: form.nama,
      jenis_kelamin: form.jenisKelamin === "Laki-laki" ? "L" : "P",
      email: form.email,
      asal_sekolah: form.sekolahAsal,
      nama_orang_tua: form.orangTua,
      no_hp_siswa: form.telpSiswa,
      no_hp_orang_tua: form.telpOrtu,
      jurusan: null // SMP tidak perlu jurusan
    };

    try {
      const response = await fetch("https://manajemen-sekolah.spero.id/api/pendaftaran", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Tambahkan Authorization jika API butuh token
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Pendaftaran Berhasil!",
          text: "Silakan cek email Anda untuk melihat nomor pendaftaran.",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
          },
          didClose: () => {
            document.body.style.overflow = "visible";
            document.body.style.paddingRight = "0";
          },
        });
        setForm({
          nama: "",
          jenisKelamin: "",
          email: "",
          sekolahAsal: "",
          orangTua: "",
          telpSiswa: "",
          telpOrtu: "",
        });
      } else {
        let errorMessage = "Silakan cek kembali data Anda.";
        let errorTitle = "Gagal Mendaftar";
        
        // Check untuk error email duplikat
        if (data.errors && data.errors.email) {
          errorMessage = "Email Anda sudah terdaftar di sistem. Silakan gunakan email lain.";
          errorTitle = "Email Sudah Terdaftar";
        } else if (data.message) {
          if (data.message.toLowerCase().includes("unique") || data.message.toLowerCase().includes("email")) {
            errorMessage = "Email Anda sudah terdaftar di sistem. Silakan gunakan email lain.";
            errorTitle = "Email Sudah Terdaftar";
          } else {
            errorMessage = data.message;
          }
        }
        
        Swal.fire({
          icon: "error",
          title: errorTitle,
          text: errorMessage,
          confirmButtonText: "OK",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
          },
          didClose: () => {
            document.body.style.overflow = "visible";
            document.body.style.paddingRight = "0";
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Kesalahan Koneksi",
        text: "Terjadi kesalahan saat terhubung ke server. Silakan coba lagi.",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = "15px";
        },
        didClose: () => {
          document.body.style.overflow = "visible";
          document.body.style.paddingRight = "0";
        },
      });
    }
  };

  return (
    <div className="pendaftaran-container">
      <h2>Pendaftaran SMP Online</h2>
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
          Daftar
        </button>
      </form>
    </div>
  );
};

export default PendaftaranSMP;
