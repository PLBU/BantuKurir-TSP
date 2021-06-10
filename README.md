# Bantu Kurir TSP
> Dibuat oleh Renaldi Arlin / 13519114
### Fitur
* Menerima input dalam UI ataupun file eksternal .txt
* Menampilkan Jalur Kurir dalam graf dan tulisan
* Menampilkan jarak terpendek jalur
* Estimasi durasi pengiriman dan waktu pengiriman selesai 

### Format Input Teks
File input berupa format .txt dengan konten:
```
Jumlah lokasi yang tertera (termasuk perusahaan/asal)
Nama lokasi perusahaan/asal
Koordinat lokasi perusahaan (x y)
Semua nama lokasi yang dituju (diselangi koordinatnya)
Koordinat semua titik yang ada (x y)
Nama Kurir
Kecepatan kurir (1 satuan kotak xy/menit)
Waktu Pengiriman (HH:MM)
Tanggal Pengiriman (DD-MM-YYYY)
```
Contoh:
```
5
ITB.co
0 0
A
1 1
B
0 1
C
10 3
D
1 2
Kurirando Johndo
14:05
09-06-2021
5
```

### Algoritma TSP
Algoritma TSP yang saya pakai menggunakan strategi Program Dinamis. Alasannya karena kompleksitas waktu lebih cepat dibandingkan strategi lain, yaitu O(n^2 * 2^n) sedangkan strategi lain seperti Brute Force O(n!). Dalam implementasinya saya juga menggunakan bitmask dalam penyimpanan visited node agar tidak memakan ruang memori yang lebih banyak.
### Tech Stack
* React
* CSS
### Libraries used
* Material UI
* React Graph Vis
* React Router
* Moment.js

### How to Run
* installed Node.js
* `npm install`
* `npm start`