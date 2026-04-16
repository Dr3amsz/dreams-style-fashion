# Dreams Style - Fashion Landing Page

Website landing page untuk produk fashion dengan tema **Baby Blue** yang elegan dan modern.

## 📋 Deskripsi Proyek

Proyek ini adalah landing page interaktif untuk brand fashion "Dreams Style" yang dibuat untuk memenuhi kebutuhan Ujian Tengah Semester Praktikum Pemrograman Berbasis Web.

## 🎨 Tema

**Fashion - Dreams Style**
- Warna utama: Baby Blue (#64b5f6)
- Konsep: Elegansi dan kenyamanan
- Target: Fashion premium dengan harga terjangkau

## ✨ Fitur Utama

### 1. Hero Section
- Judul produk yang menarik
- Deskripsi singkat brand
- Call-to-Action button

### 2. Features Section
- 3 fitur utama produk dalam bentuk card
- Icon SVG yang menarik
- Hover effect yang smooth

### 3. Pricing Section
- 2 paket membership (Basic & Premium)
- Toggle bulanan/tahunan dengan JavaScript
- Highlight pada paket terbaik
- Animasi perubahan harga

### 4. Contact Form
- Validasi lengkap menggunakan JavaScript:
  - Semua field wajib diisi
  - Email harus valid (mengandung '@')
  - Format email yang benar
- Pesan error yang jelas
- Success message setelah submit

### 5. Navbar Interaktif
- Responsive untuk mobile
- Smooth scroll navigation
- Sticky navbar dengan shadow effect
- Hover animation pada menu

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan animasi
- **JavaScript (Vanilla)** - Interaktivitas dan validasi
- **Bootstrap 5.3** - Framework CSS untuk responsiveness

## 📁 Struktur File

```
dreams-style/
│
├── index.html         # Halaman utama
├── koleksi.html       # Halaman untuk melihat koleksi style 
├── kontak.html        # Halaman kontak
├── harga.html         # Halaman harga membership
├── style.css          # Custom styling
├── js.js              # JavaScript untuk interaktivitas
└── README.md         # Dokumentasi
```

## 🚀 Cara Menggunakan

1. Download semua file
2. Pastikan struktur folder sesuai
3. Buka `index.html` di browser
4. Website siap digunakan!

## 📱 Responsive Design

Website ini fully responsive dan dapat diakses dengan baik di:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ✅ Checklist Requirements

- [x] Hero Section dengan judul, deskripsi, dan CTA
- [x] Features Section dengan minimal 3 fitur dalam card
- [x] Pricing Section dengan minimal 2 paket dan highlight
- [x] Contact Form dengan nama, email, dan pesan
- [x] Validasi Form JavaScript:
  - [x] Semua field wajib diisi
  - [x] Email harus valid (minimal '@')
  - [x] Menampilkan pesan error
- [x] Interaksi Pricing dengan JavaScript
- [x] Navbar interaktif dan responsif
- [x] Smooth scrolling
- [x] Hover effects dan animations

## 🎯 Validasi Form

Form contact memiliki validasi sebagai berikut:

1. **Field Wajib Diisi**
   - Semua field (Nama, Email, Pesan) tidak boleh kosong
   - Jika ada yang kosong, muncul error: "Semua field wajib diisi!"

2. **Validasi Email**
   - Email harus mengandung karakter '@'
   - Email harus dalam format yang benar (contoh@email.com)
   - Jika tidak valid, muncul error sesuai masalah

3. **Visual Feedback**
   - Field yang error akan di-highlight merah
   - Pesan error ditampilkan di atas tombol submit
   - Success message muncul setelah submit berhasil

## 💡 Interaksi Pricing

1. **Toggle Bulanan/Tahunan**
   - Klik tombol "Bulanan" untuk melihat harga bulanan
   - Klik tombol "Tahunan" untuk melihat harga tahunan

2. **Animasi**
   - Perubahan harga dengan fade effect
   - Button active state berubah otomatis

3. **Data Harga**
   - Basic: Rp 99k/bulan atau Rp 990k/tahun
   - Premium: Rp 199k/bulan atau Rp 1.9M/tahun

## 🎨 Color Palette

```css
--baby-blue-bg: #e3f2fd      /* Background utama */
--baby-blue-light: #bbdefb   /* Background gradient */
--baby-blue-primary: #64b5f6 /* Warna utama brand */
--baby-blue-dark: #42a5f5    /* Hover state */
--text-dark: #333333         /* Text utama */
--text-muted: #6c757d        /* Text secondary */
```

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk UTS Praktikum Pemrograman Berbasis Web

## 📝 Lisensi

Proyek ini dibuat untuk keperluan edukasi - Ujian Tengah Semester.

---

**Dreams Style** - Elegansi Style untuk Gaya Harianmu
