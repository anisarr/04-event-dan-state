## Laporan Praktikum - Week 4 Pemprograman Framework

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720216|
| Nama |  Anisa Rahmasari |
| Kelas | TI - 3A |

## Praktikum 1
![alt text](asset-report/01.png)

## Praktikum 2
![alt text](asset-report/02.png)
![alt text](asset-report/02-a.png)
![alt text](asset-report/02-b.png)
![alt text](asset-report/02-c.png)

## Praktikum 3
Mengklik Tombol-1 akan muncul 2 alert sebagai berikut:
![alt text](asset-report/03-a.png)
![alt text](asset-report/03-b.png)


Mengklik Tombol-2 akan muncul 2 alert sebagai berikut:
![alt text](asset-report/03-c.png)
![alt text](asset-report/03-d.png)


## Praktikum 4
![alt text](asset-report/04-a.png)
![alt text](asset-report/04-b.png)

Soal
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?

    jika menekan tombol "Artikel Selanjutnya" sebanyak lebih dari 5x, sistem akan menampilkan pesan error "Unhandled Runtime Error"
    ![alt text](asset-report/04-c.png)

2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.

    Untuk meng-handle masalah tersebut bisa dengan menambahkan funtion baru yang berisi `setIndex(index-1)` supaya bisa kembali ke halaman sebelumnya. Selain itu, bikin tombol baru dengan nama `Artikel Sebelumnya` dan memanggil function tersebut ketika klik button `Artikel Sebelumnya`
![alt text](image-1.png)

3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.
    ![alt text](asset-report/04-d.png)

