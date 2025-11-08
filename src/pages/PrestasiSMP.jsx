import React from "react";
import "../styles/PrestasiSMP.css";

const PrestasiSMP = () => {
    return (
        <div className="prestasi-smp-container-smp">
            {/* Hero Section */}
            <section className="prestasi-smp-hero-smp">
                <div className="prestasi-smp-hero-overlay-smp">
                    <h1 className="prestasi-smp-hero-title-smp">
                        PRESTASI <br />{" "}
                        <span className="prestasi-smp-jenis-teks-smp">SMP</span>{" "}
                        <span className="atlantis-plus-teks-smp">ATLANTIS PLUS</span>
                    </h1>
                    <p className="prestasi-smp-hero-subtitle-smp">
                        We Make Your Dreams Come True!
                    </p>
                </div>
            </section>

            <div className="prestasi-info-section-smp">
                <div className="prestasi-content-placeholder-smp">
                    {/* Konten Prestasi Akademik */}
                    <div className="prestasi-akademi-section-smp">
                        <h2 className="prestasi-section-title-smp">PRESTASI AKADEMIK</h2>
                        <p className="prestasi-section-dekripsi-smp">Prestasi merupakan pencapaian seseorang yang berhasil meraih sebuah keberhasilan dalam menciptakan, membuat atau bahkan menghasilkan sesuatu yang bermanfaat untuk dirinya juga orang lain, maka murid yang mendapatkan prestasi layak untuk mendapatkan sesuatu yang berharga seperti sertifikat penghargaan, piala atau medali</p>
                        <div className="akademi-cards-container-smp">
                            <div className="akademi-card-smp">
                                <div className="akademi-card-trophy-wrapper-smp">
                                    <img src="/trophy yellow.png" alt="Trophy Icon" className="akademi-card-trophy-smp" />
                                </div>
                                <img src="/PrestasiSMP1.jpg" alt="English Achievement" className="akademi-card-image-smp" />
                                <span className="akademi-card-text-smp">The best <br /> ENGLISH</span>
                            </div>
                            <div className="akademi-card-smp">
                                <div className="akademi-card-trophy-wrapper-smp">
                                    <img src="/trophy yellow.png" alt="Trophy Icon" className="akademi-card-trophy-smp" />
                                </div>
                                <img src="/PrestasiSMP2.png" alt="Tahfidz Achievement" className="akademi-card-image-smp" />
                                <span className="akademi-card-text-smp">The best <br /> TAHFIDZ</span>
                            </div>
                            <div className="akademi-card-smp">
                                <div className="akademi-card-trophy-wrapper-smp">
                                    <img src="/trophy yellow.png" alt="Trophy Icon" className="akademi-card-trophy-smp" />
                                </div>
                                <img src="/PrestasiSMP3.png" alt="Entrepreneur Achievement" className="akademi-card-image-smp" />
                                <span className="akademi-card-text-smp">The best <br /> ENTREPRENEUR</span>
                            </div>
                            {/* Kontainer baru untuk deskripsi dan card keempat */}
                            <div className="akademi-description-and-card-wrapper-smp">
                                <div className="akademi-description-box-smp akademi-description-left-smp">
                                    <p>
                                        Siswa Siswi SMP ATLANTIS PLUS memiliki 4 keunggulan dan dari setiap 4, masing masing akan
                                        dipilih siapa yang menjadi the best dalam dari masing masing keunggulan, dan mereka yang
                                        diberi penghargaan seperti piala dan sertifikat. Untuk prestasi
                                        akademik, mereka mendapatkan piala sebagai penghargaan setiap
                                        tahunnya. Penghargaan ini diberikan saat acara bernama
                                        ATLANTIS TALENT DAY (ATD) yang diadakan setiap tahun.
                                    </p>
                                </div>
                                <div className="akademi-card-smp akademi-character-card-smp">
                                    <div className="akademi-card-trophy-wrapper-smp">
                                        <img src="/trophy yellow.png" alt="Trophy Icon" className="akademi-card-trophy-smp" />
                                    </div>
                                    <img src="/PrestasiSMP4.png" alt="Character Achievement" className="akademi-card-image-smp" />
                                    <span className="akademi-card-text-smp">The best <br /> CHARACTER</span>
                                </div>
                                {/* Trophy Ilustrasi di kanan card keempat */}
                                <div className="trophy-illustration-right-card-smp">
                                    <img src="/trophy3.png" alt="Trophy Illustration" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Konten Prestasi Non-Akademik */}
                    <div className="prestasi-non-akademi-section-smp">
                        <h2 className="prestasi-section-title-smp non-akademi-title-smp">PRESTASI NON - AKADEMIK</h2>
                        <div className="non-akademi-cards-container-smp">
                            <div className="non-akademi-card-smp">
                                <div className="non-akademi-card-trophy-wrapper-smp">
                                    <img src="/trophy yellow.png" alt="Trophy Icon" className="non-akademi-card-trophy-smp" />
                                </div>
                                <img src="/NonAkademiSMP1.jpg" alt="Olimpiade Achievement" className="non-akademi-card-image-smp" />
                                <span className="non-akademi-card-text-smp">Juara <br /> OLIMPIADE</span>
                            </div>
                            <div className="non-akademi-card-smp">
                                <div className="non-akademi-card-trophy-wrapper-smp">
                                    <img src="/trophy yellow.png" alt="Trophy Icon" className="non-akademi-card-trophy-smp" />
                                </div>
                                <img src="/NonAkademiSMP2.jpg" alt="Story Telling Achievement" className="non-akademi-card-image-smp" />
                                <span className="non-akademi-card-text-smp">Juara <br /> STORY TELLING</span>
                            </div>
                            <div className="non-akademi-card-smp">
                                <div className="non-akademi-card-trophy-wrapper-smp">
                                    <img src="/trophy yellow.png" alt="Trophy Icon" className="non-akademi-card-trophy-smp" />
                                </div>
                                <img src="NonAkademiSMP3.jpg" alt="Pencak Silat Achievement" className="non-akademi-card-image-smp" />
                                <span className="non-akademi-card-text-smp">Juara <br /> PENCAK SILAT</span>
                            </div>
                        </div>
                    </div>
                    {/* Bagian Deskripsi dan Gambar Besar Bawah */}
                    <div className="prestasi-description-image-section-smp">

                        {/* Deskripsi */}
                        <div className="description-text-container-smp">
                            {/* Elemen Bintang */}
                            <div className="star-wrapper-smp left-star-smp">
                                <img src="/star icon.png" alt="Star" />
                            </div>
                            <div className="star-wrapper-smp right-star-smp">
                                <img src="/star icon.png" alt="Star" />
                            </div>

                            {/* Elemen Trofi Baru di bawah */}
                            <div className="trophy-wrapper-smp left-trophy-smp">
                                <img src="/trophykiri.png" alt="Trophy" />
                            </div>
                            <div className="trophy-wrapper-smp right-trophy-smp">
                                <img src="/trophykiri.png" alt="Trophy" />
                            </div>

                            <p className="prestasi-main-description-smp">
                                Di SMP Atlantis Plus, kami percaya bahwa pendidikan yang baik tidak hanya ditentukan oleh pencapaian akademik,
                                tetapi juga oleh perkembangan karakter, kreativitas, dan potensi siswa secara menyeluruh. Oleh karena itu, kami
                                memberikan perhatian besar pada pengembangan non-akademik melalui berbagai kegiatan ekstrakurikuler, lomba,
                                dan program pembinaan minat dan bakat. Siswa-siswi SMP Atlantis Plus telah berhasil meraih berbagai prestasi
                                membanggakan di tingkat kota, provinsi, bahkan nasional, dalam bidang olahraga seperti futsal dan pencak silat,
                                seni seperti lomba tari daerah dan menggambar, serta bidang kepemimpinan dan karakter seperti lomba pramuka
                                dan kegiatan keorganisasian. Tidak hanya itu, siswa kami juga aktif dalam lomba pidato, story telling, dan literasi
                                digital yang menunjukkan kemampuan komunikasi dan berpikir kritis mereka.
                            </p>
                        </div>



                        {/* Gambar Group dan Caption */}
                        <img src="/PrestasiPageSMP.jpg" alt="Students Group Achievement" className="prestasi-group-image-smp" />
                        <p className="prestasi-group-image-caption-smp">NEVER SURRENDER TO ACHIEVE YOUR DREAM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrestasiSMP;