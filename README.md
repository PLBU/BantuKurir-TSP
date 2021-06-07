# BantuKurir-TSP
## Latar Belakang
Suatu hari, sebuah perusahaan jasa pengiriman barang memiliki keinginan mulia untuk membuat jalur pengiriman barang menjadi lebih efisien agar kurir-kurirnya bisa menyelesaikan pekerjaan secepat mungkin dan kembali ke rumahnya untuk berkumpul bersama keluarga :hugs:. Untuk mewujudkan keinginan mulianya tersebut, perusahaan membuat sebuah sayembara besar-besaran, siapapun yang berhasil menyuguhkan solusi terbaik dan tercepat akan mendapatkan hadiah yang tak ternilai dari BOS BESAR Perusahaan. 

Kamu sebagai mahasiswa Teknik Informatika ITB, ca-IRK, anak kebanggaan ayahibu tentunya tak mau kalah dan ingin segera menunjukkan bakat terpendammu kepada sang BOS BESAR Perusahaan, bukannnn???!!

## Spesifikasi Wajib (1500)
Buatlah sebuah aplikasi web dengan spesifikasi sebagai berikut:
1. Pengguna dapat memasukkan informasi pengiriman secara **langsung dari website** ataupun melalui **berkas eksternal**, yang terdiri atas:
  - Nama lokasi yang dituju (termasuk lokasi asal: Perusahaan)
  - Koordinat dari setiap lokasi
  - Identitas Kurir (nama)
  - Lokasi yang menjadi titik asal
  - Waktu pengiriman
  - Kecepatan rata-rata kurir
3. Aplikasi **mampu menerima berkas eksternal lebih dari satu** dan menampilkan semua jalur yang mungkin
4. Aplikasi mampu **menampilkan jalur ter-efektif** untuk melakukan pengiriman ke semua lokasi yang dimasukkan, dengan lokasi asal merupakan Perusahaan dan akhirnya kembali ke lokasi asal. Hasil yang ditampilkan yang terdiri atas:
  - Jalur dalam bentuk tulisan
  - Jalur dalam bentuk graf (lokasi sesuai koordinat)
  - _Cost_/jarak terpendek yang akan ditempuh sang kurir
  - Estimasi waktu kurir selesai melakukan pengiriman dan kembali ke Perusahaan
6. Perhitungan jarak dilakukan dengan jarak Euclidean
7. Algoritma penyelesaian TSP **dibebaskan** sesuai dengan teknik yang sudah kalian dipelajari di mata kuliah Strategi Algorigma
8. Framewordk serta Bahasa untuk backend dan frontend **dibebaskan**, silakan explore sebanyak-banyaknya
9. Tampilan website dibuat **semenarik**, **sekreatif** dan **sejelas** mungkin
10. **Readme** seminimal mungkin menjelaskan:
  - Algoritma TSP yang digunakan dan alasan penggunaan
  - Teknologi yang digunakan untuk backend dan frontend serta alasan penggunaan
  - Library yang digunakan serta (jika ada) 
  - Cara menjalankan program

## Spesifikasi Bonus (1000)
Tambahkan sebuah fitur untuk menampilkan informasi pengiriman kurir dengan spesifikasi sebagai berikut:
1. Pengguna dapat memasukkan informasi pengiriman berupa:
  - Identitas kurir (nama)
  - Tanggal Pengiriman
2. Aplikasi mampu menampilkan informasi pengiriman berupa:
  - Jalur yang ditempuh kurir (dalam tulisan saja)
  - Waktu pengiriman
  - Estimasi waktu pengiriman selesai
  - _Cost_/jarak terpendek dari jalur yang ditempuh
4. Teknologi penyimpanan data (database) **dibebaskan** (**tidak boleh** menggunakan berkas txt, csv)

## Asumsi Pengerjaan
1. Jalur antar dua lokasi adalah garis lurus
2. Setiap jalur yang ada berlaku dua arah
3. Tanggal pengiriman sama dengan tanggal pencarian jalur

## Komponen Penilaian
1. Kebenaran program dan fungsionalitasnya
2. Algoritma yang digunakan beserta alasan penggunaannya
3. Clean Code
4. Modularitas
5. Keindahan UI

## Pengumpulan
Silakan buat repository pada github atau gitlab dan invite **gilliantuerah** pada repository kalian.

Pastikan repository kalian dalam mode Private.

Jika sudah selesai, silakan kontak melalui line (id line: gillian_tuerah) untuk menjadwalkan waktu demo. 
    
## Lain-lain
Jika terdapat pertanyaan silakan buat **issue** github pada repo ini dan pc aku di line (id line: gillian_tuerah).  
Terakhirrr, selamat mengerjakan kawan-kawan, usahakan expore sebanyak-banyaknya dan buatnya dengan hati yaaa biar hasilnya juga bisa menyentuh hati PAK BOS BESAR :hugs:.
