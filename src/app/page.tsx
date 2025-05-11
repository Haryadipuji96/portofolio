'use client';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 text-indigo-700 shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-indigo-400 transition">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition">Tentang</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Proyek</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Kontak</a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-800 text-white px-4 pb-4 space-y-2">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">Tentang</a>
            <a href="#projects" className="block">Proyek</a>
            <a href="#contact" className="block">Kontak</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-indigo-800 to-purple-800 px-4 pt-28 text-center">
        <Image src="/Foto Saya.jpg" alt="Profil" width={140} height={140} className="rounded-full border-4 border-white mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-2" data-aos="fade-down">Halo, saya Puji Haryadi</h1>
        <p className="text-base md:text-lg" data-aos="fade-up">Frontend Developer | UI/UX Enthusiast</p>
        <Link href="#contact">
          <button className="mt-6 bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition" data-aos="fade-up">Hubungi Saya</button>
        </Link>
      </section>

      {/* About */}
<section id="about" className="py-20 bg-gray-100 text-gray-800">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Tentang Saya</h2>
    <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-gray-700" data-aos="fade-up" data-aos-delay="100">
      Saya adalah seorang Frontend Developer yang fokus pada pembuatan website modern dan responsif.
      Berpengalaman dengan Next.js, Tailwind CSS, dan Laravel.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {[
        { title: 'Frontend', desc: 'React, Next.js, Tailwind CSS', delay: 200 },
        { title: 'UI/UX', desc: 'Desain antarmuka dengan Figma', delay: 300 },
        { title: 'Backend', desc: 'Laravel, Firebase, REST API', delay: 400 },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay={item.delay}
        >
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Projects */}
<section id="projects" className="py-20 bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-800 text-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up">Proyek Saya</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          img: '/project1.png',
          title: 'Website Desa Indrajaya',
          desc: 'Website desa berbasis Laravel dan Tailwind. Menampilkan berita, agenda, dan statistik penduduk.',
          aos: 'fade-right'
        },
        {
          img: '/project2.png',
          title: 'Aplikasi Booking Hotel',
          desc: 'Platform pemesanan hotel berbasis Next.js dan Firebase dengan login, dashboard admin dan filter pencarian.',
          aos: 'fade-left'
        }
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden"
          data-aos={project.aos}
        >
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-left text-gray-800">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <div className="flex gap-4">
              <Link href="https://github.com/Haryadipuji96/Sistem-Informasi.git"><span className="text-indigo-600 hover:underline">GitHub</span></Link>
              <Link href="https://github.com/Haryadipuji96/tugasdoang.git"><span className="text-indigo-600 hover:underline">Live Demo</span></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Contact */}
<section id="contact" className="py-20 bg-white text-gray-800">
  <div className="max-w-2xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Kontak Saya</h2>
    <p className="text-gray-600 mb-10" data-aos="fade-up" data-aos-delay="100">
      Tertarik bekerja sama atau punya pertanyaan? Silakan kirim pesan melalui form di bawah.
    </p>
    <div
      className="bg-gray-100 p-8 rounded-xl shadow-lg"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <form
  action="https://formspree.io/f/xyzwdpkv"  // <- ganti dengan URL milikmu
  method="POST"
  className="space-y-4 text-left"
>
  <input type="text" name="name" placeholder="Nama" required className="w-full border border-gray-300 p-3 rounded" />
  <input type="email" name="email" placeholder="Email" required className="w-full border border-gray-300 p-3 rounded" />
  <textarea name="message" placeholder="Pesan" rows={5} required className="w-full border border-gray-300 p-3 rounded"></textarea>

  {/* Optional honeypot field (anti-bot) */}
  <input type="text" name="_gotcha" style={{ display: 'none' }} />

  <button type="submit" className="bg-indigo-700 text-white px-6 py-3 rounded hover:bg-indigo-800 transition">
    Kirim
  </button>
</form>

    </div>
  </div>
</section>``

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-indigo-700 text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
