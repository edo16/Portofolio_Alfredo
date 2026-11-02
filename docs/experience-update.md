# Dokumentasi Pembaruan Experience

## Ringkasan

Bagian Experience pada portofolio diperbarui untuk menampilkan pengalaman kerja,
magang, dan organisasi secara lebih lengkap. Konten tersedia dalam bahasa Inggris
dan bahasa Indonesia melalui sistem terjemahan pada aplikasi.

## Daftar pengalaman

| Periode | Posisi | Organisasi |
|---|---|---|
| Jun–Agu 2026 | Field Enumerator | Badan Pusat Statistik · South Lampung |
| Feb 2024–Feb 2026 | Lampung Sub-Region Coordinator | IKAHIMATIKA Indonesia · Region 2 |
| Jan–Feb 2025 | Information Retrieval Intern | BRIN · Bandung |
| Jan–Des 2024 | Head of External Affairs | HIMATIKA · Universitas Lampung |
| Feb–Des 2023 | Staff of Interests and Talents | HIMATIKA · Universitas Lampung |
| Jun–Nov 2023 | Head of Competition Division | HIMATIKA · Universitas Lampung |

## Perubahan konten

- Menambahkan pengalaman Enumerator Lapangan di BPS Kabupaten Lampung Selatan.
- Menambahkan pengalaman Koordinator Subwilayah Lampung di IKAHIMATIKA Indonesia Region 2.
- Memperbarui pengalaman magang BRIN dengan fokus pembelajaran machine learning,
  preprocessing data, dan eksperimen text generation menggunakan LSTM.
- Memperbarui pengalaman sebagai Kepala Divisi Hubungan Eksternal HIMATIKA,
  termasuk koordinasi tim beranggotakan 14 orang.
- Menambahkan pengalaman sebagai Staf Divisi Minat dan Bakat HIMATIKA.
- Menambahkan pengalaman sebagai Kepala Divisi Perlombaan HIMATIKA.
- Menghapus pengalaman KKN dari bagian Experience.

## File yang diperbarui

- `src/App.jsx` — data utama pengalaman, periode, posisi, organisasi, dan deskripsi.
- `src/translations.js` — teks Experience dalam bahasa Inggris (`en`) dan Indonesia (`id`).
- `docs/experience-update.md` — dokumentasi perubahan bagian Experience.

## Catatan implementasi

Urutan pengalaman ditampilkan berdasarkan periode akhir terbaru ke terlama.
Periode pengalaman yang saling beririsan tetap ditampilkan sesuai informasi
yang diberikan. Pergantian bahasa mengikuti sistem bahasa yang sudah tersedia
pada aplikasi tanpa memerlukan halaman terpisah.
