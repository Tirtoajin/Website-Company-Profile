# Company Profile Website

Website profil perusahaan modern untuk industri konstruksi dan distributor material bangunan. Dibangun menggunakan **React (Vite)** dan **Tailwind CSS v4** dengan desain bertema *Industrial* yang gagah dan responsif.

## Demo Aplikasi

https://port-site-v1.vercel.app/



## Fitur Utama

* **Desain Industrial Premium:** Menggunakan palet warna Merah (#EE3539), Hitam (#111827), dan Oranye (#FAA954) yang mencerminkan kekuatan dan keberanian.
* **Responsive Layout:** Tampilan optimal di Desktop, Tablet, dan Mobile.
* **Hero Section Dinamis:** Tampilan awal yang menarik dengan CTA yang jelas.
* **Katalog Produk:** Grid produk yang rapi dengan link ke detail.
* **About Us & Timeline:** Halaman "Tentang Kami" dengan visualisasi sejarah perusahaan (Timeline) dan pemutar Video Profil Perusahaan.
* **Contact Page:** Formulir kontak interaktif dan integrasi Google Maps.
* **Marketplace Links:** Integrasi tombol ke Official Store (Shopee/Tokopedia).

## Tech Stack

* **Framework:** [React.js](https://react.dev/) (via Vite)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Routing:** React Router DOM
* **Icons:** [Lucide React](https://lucide.dev/)
* **Slider/Carousel:** Swiper.js

## Struktur Folder

Proyek ini menggunakan struktur *Clean Code* untuk memudahkan pengembangan:

```bash
src/
├── components/          # Komponen UI yang dapat digunakan kembali
│   ├── cards/           # Komponen kartu (ProductCard, dll)
│   ├── layout/          # Layout utama (Navbar, Footer)
│   └── ...
├── data/                # Data statis (JSON like)
│   ├── products.js      # Data daftar produk
│   └── content.js       # Data konten lainnya
├── pages/               # Halaman utama website
│   ├── Home.jsx         # Halaman Beranda
│   ├── About.jsx        # Halaman Tentang Kami (Timeline & Video)
│   ├── Contact.jsx      # Halaman Kontak
│   └── ProductDetail.jsx
├── App.jsx              # Routing utama
└── index.css            # Global CSS & Tailwind imports    
```
<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/e53ec41c-8900-4258-93fb-8984c670630b"
    alt="Company Profile Home"
    width="800"
  />
</p>

