# Dokumentasi website MetaPlay

Nama proyek: MetaPlay  
Jenis proyek: katalog dan review game  
Bahasa: HTML, CSS, JavaScript  
Penyimpanan data: localStorage browser

## Gambaran singkat

MetaPlay adalah website praktikum untuk mencari game, membaca review, menulis review, dan menyimpan game ke wishlist. Website ini tidak memakai backend. Data akun, wishlist, dan review user disimpan di browser lewat localStorage.

Tampilan website sudah dibuat lebih sederhana dari versi awal. Efek dekoratif yang terlalu ramai dikurangi supaya halaman lebih bersih dan CSS lebih mudah diikuti. Bagian login, register, profil, wishlist, search, dan about juga sudah dirapikan agar tampilannya lebih konsisten.

## Struktur file utama

- `index.html` untuk halaman utama.
- `games.html` untuk daftar semua game.
- `game.html` untuk detail satu game.
- `reviews.html` untuk daftar review satu game.
- `search.html` untuk hasil pencarian.
- `wishlist.html` untuk game yang disimpan.
- `login.html` dan `register.html` untuk akun user.
- `profile.html` untuk profil user.
- `about.html` untuk informasi proyek.

CSS utama ada di `css/style.css`. CSS khusus halaman ada di `css/pages/`. JavaScript dipisah ke `js/core/`, `js/components/`, `js/features/`, dan `js/pages/`.

## Cara mencari bagian kode

Di VS Code, tekan `Ctrl + F`, lalu cari kata ini:

- `navbar` untuk menu atas.
- `hero section` untuk bagian pembuka halaman utama.
- `review page` untuk halaman review.
- `game card` untuk kartu game.
- `wishlist` untuk fitur simpan game.
- `search page` untuk halaman pencarian.
- `profile page` untuk halaman profil.
- `all games page` untuk halaman semua game.
- `about page` untuk halaman about.

Komentar di kode sengaja memakai kata kunci itu supaya bagian penting cepat ditemukan.

## Halaman utama

![Screenshot halaman utama](screenshots/index.png)

Halaman utama menjadi pintu masuk website. Di bagian atas ada navbar, search, tombol tema, wishlist, dan tombol login atau profil. Hero section dibuat lebih sederhana dan sekarang sudutnya bulat penuh.

Fitur utama:

- Hero section.
- Tombol menuju daftar semua game.
- Statistik singkat.
- Trending Now.
- Game of the Week.
- Top Rated.

File penting:

- `index.html`
- `css/pages/home.css`
- `js/pages/home.js`

## Halaman semua game

![Screenshot halaman semua game](screenshots/games.png)

Halaman ini menampilkan semua game dalam bentuk list. User bisa mencari, memfilter, dan mengurutkan game. Mode terang juga sudah diperbaiki supaya teks filter tetap terbaca.

Fitur utama:

- Filter platform.
- Filter genre.
- Sort A-Z, score, atau tahun.
- Search kecil di halaman.
- Reset filter.
- Kartu game berbentuk list.

File penting:

- `games.html`
- `css/pages/games.css`
- `js/pages/games.js`
- `js/features/filters.js`

## Halaman detail game

![Screenshot halaman detail game](screenshots/game.png)

Halaman detail dipakai untuk melihat satu game secara lengkap. Game dipilih dari URL, misalnya `game.html?id=elden-ring`.

Fitur utama:

- Banner game.
- Trailer.
- Info genre, platform, developer, dan tahun.
- Metascore.
- Review critic dan user.
- Form tulis review.
- Tombol wishlist.
- Rekomendasi 3 game lain.

File penting:

- `game.html`
- `css/pages/game.css`
- `js/pages/game.js`
- `js/features/reviews.js`
- `js/features/wishlist.js`

## Halaman review

![Screenshot halaman review](screenshots/reviews.png)

Halaman review menampilkan semua review dari satu game. Halaman ini enak dipakai kalau user ingin membaca komentar tanpa membuka detail game terus-menerus.

Fitur utama:

- Header nama game.
- Jumlah review.
- Sort review.
- Kartu review.
- Panel untuk membaca review panjang.

File penting:

- `reviews.html`
- `css/pages/reviews.css`
- `js/pages/reviewsPage.js`
- `js/components/reviewViewer.js`

## Halaman pencarian

![Screenshot halaman pencarian](screenshots/search.png)

Halaman search muncul saat user mencari game dari navbar. Kartu hasil pencarian sekarang mengikuti gaya kartu game utama supaya tidak terlihat berbeda sendiri.

Fitur utama:

- Menampilkan kata pencarian.
- Menampilkan jumlah hasil.
- Filter platform.
- Filter genre.
- Sort hasil.
- Kartu game hasil pencarian.

File penting:

- `search.html`
- `css/pages/search.css`
- `js/pages/search.js`

## Halaman wishlist

![Screenshot halaman wishlist](screenshots/wishlist.png)

Wishlist menyimpan game yang disukai user. Kartu wishlist sekarang dibuat 4 kolom di desktop dan mengikuti gaya kartu game di halaman utama.

Fitur utama:

- Daftar game yang disimpan.
- Tombol remove.
- Empty state kalau belum ada game.
- Jumlah wishlist di navbar ikut berubah.

File penting:

- `wishlist.html`
- `css/pages/wishlist.css`
- `js/pages/wishlistPage.js`
- `js/features/wishlist.js`

## Halaman login

![Screenshot halaman login](screenshots/login.png)

Halaman login dipakai untuk masuk ke akun yang sudah dibuat. Sistem ini sederhana karena hanya untuk praktikum, bukan website produksi.

Fitur utama:

- Input username.
- Input password.
- Validasi login.
- Redirect ke profile kalau berhasil.
- Redirect otomatis kalau user sudah login.

File penting:

- `login.html`
- `css/pages/auth.css`
- `js/pages/login.js`
- `js/core/auth.js`

## Halaman register

![Screenshot halaman register](screenshots/register.png)

Halaman register dipakai untuk membuat akun baru. User bisa menambahkan foto profil, tetapi bagian itu opsional.

Fitur utama:

- Input username.
- Input password.
- Konfirmasi password.
- Upload foto profil.
- Preview foto.
- Validasi username dan password.

File penting:

- `register.html`
- `css/pages/auth.css`
- `js/pages/register.js`
- `js/core/auth.js`

## Halaman profil

![Screenshot halaman profil](screenshots/profile.png)

Halaman profil menampilkan data user yang sedang login. User bisa melihat review yang pernah dibuat, mengubah username, mengubah foto profil, dan menghapus review sendiri.

Fitur utama:

- Foto profil.
- Username.
- Tanggal akun dibuat.
- Jumlah review.
- Jumlah wishlist.
- Riwayat review.
- Edit username.
- Hapus review.

File penting:

- `profile.html`
- `css/pages/profile.css`
- `js/pages/profile.js`
- `js/core/auth.js`

## Halaman about

![Screenshot halaman about](screenshots/about.png)

Halaman about menjelaskan tujuan proyek MetaPlay dan data pembuat. Lima kartu informasi dibuat sejajar di desktop. Statistik seperti `50+ Games`, `6 Platforms`, `8 Pages`, dan `0 Frameworks` dibuat seperti pill supaya lebih rapi.

Fitur utama:

- Penjelasan singkat proyek.
- Lima kartu informasi.
- Statistik berbentuk pill.
- Academic context.
- Profil pembuat.

File penting:

- `about.html`
- `css/pages/about.css`
- `js/pages/about.js`

## Fitur global

### Navbar

Navbar muncul di semua halaman. Isinya logo, menu halaman, dropdown platform, search, jam, tombol tema, wishlist, dan login atau profil.

File utama:

- `js/components/navbar.js`
- `css/style.css`

### Theme toggle

Website punya tema gelap dan terang. Pilihan tema disimpan di localStorage, jadi pilihan user tetap dipakai saat halaman dibuka lagi.

File utama:

- `js/core/theme.js`
- `css/style.css`

### Search

Search di navbar memberi saran game saat user mengetik. User bisa membuka detail game langsung atau masuk ke halaman search.

File utama:

- `js/components/navbar.js`
- `js/pages/search.js`

### Review

User bisa menulis review di halaman detail game. Review disimpan di localStorage dan muncul lagi di halaman review atau profil.

File utama:

- `js/features/reviews.js`
- `js/pages/game.js`
- `js/pages/reviewsPage.js`

### Wishlist

Wishlist menyimpan id game ke localStorage. Game bisa ditambahkan dari kartu game atau halaman detail game.

File utama:

- `js/features/wishlist.js`
- `js/components/gameCard.js`
- `js/pages/wishlistPage.js`

### Auth sederhana

Login dan register dibuat untuk simulasi akun. Karena datanya ada di localStorage, fitur ini cocok untuk tugas praktikum dan demo lokal.

File utama:

- `js/core/auth.js`
- `js/pages/login.js`
- `js/pages/register.js`
- `js/pages/profile.js`

## Catatan untuk pemula

Kalau ingin mengubah tampilan halaman tertentu, buka CSS di `css/pages/`. Misalnya ingin mengubah wishlist, buka `css/pages/wishlist.css`.

Kalau ingin mengubah fungsi halaman tertentu, buka JS di `js/pages/`. Misalnya ingin mengubah halaman profil, buka `js/pages/profile.js`.

Kalau ingin mengubah data game, buka `js/core/data.js`. Tambahkan data baru ke `fullGameData` dengan format yang sama seperti data lain.

Kalau bingung mulai dari mana, pakai `Ctrl + F` dan cari nama fiturnya. Komentar di kode sudah dibuat untuk membantu pencarian itu.
