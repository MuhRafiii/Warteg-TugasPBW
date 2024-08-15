// configuration express

const express = require("express");

let app = express();

let path = require("path");

const port = 8000;

// static file

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/modules", express.static(__dirname + "public/css"));

// View engine
app.set("views", "./views");
app.set("view engine", "ejs");

// Routing
app.get("/", (req, res) => {
  const lauk = [
    { nama: "Ayam Goreng", ket: "Rp. 7.000", img: "images/ayam goreng.jpg" },
    { nama: "Tempe Orek", ket: "Rp. 3.000", img: "images/orek.jpg" },
    { nama: "Ikan Lele", ket: "Rp. 4.000", img: "images/lele.jpeg" },
    { nama: "Kikil", ket: "Rp. 3.000", img: "images/kikil.jpg" },
    { nama: "Ikan Tongkol", ket: "Rp. 5.000", img: "images/tongkol.jpg" },
    { nama: "Telor Balado", ket: "Rp. 4.000", img: "images/telor balado.jpg" },
    { nama: "Telor Dadar", ket: "Rp. 3.000", img: "images/telor dadar.jpg" },
    { nama: "Usus", ket: "Rp. 3.000", img: "images/usus.jpg" },
    { nama: "Kentang Kering", ket: "Rp. 3.000", img: "images/kentang.jpg" },
  ];

  const sayur = [
    { nama: "Sayur Kangkung", ket: "Rp. 2.000", img: "images/kangkung.jpg" },
    { nama: "Sayur Asem", ket: "Rp. 3000", img: "images/sayur asem.jpg" },
    { nama: "Sayur Lodeh", ket: "Rp. 3.000", img: "images/lodeh.webp" },
    { nama: "Sayur Sawi Tahu", ket: "Rp. 2000", img: "images/sawi tahu.jpg" },
    {
      nama: "Sayur Daun Singkong",
      ket: "Rp. 3000",
      img: "images/daun singkong.png",
    },
    { nama: "Terong Balado", ket: "Rp. 2.000", img: "images/terong.jpg" },
  ];

  const minuman = [
    { nama: "Teh Manis", ket: "Rp. 4.000", img: "images/teh manis.jpg" },
    { nama: "Es Jeruk", ket: "Rp. 4.000", img: "images/es jeruk.webp" },
    { nama: "Kopi Hitam", ket: "Rp. 3.000", img: "images/kopi item.jpg" },
    { nama: "Kopi Susu", ket: "Rp. 5.000", img: "images/kopi susu.webp" },
  ];

  const manajemen = [
    {
      nama: "Direktur",
      ket: "Prof. Dr. (H.C.) Hj. Megawati Soekarnoputri sebagai direktur utama saat ini yang akan meneruskan perjalanan bisnis Makmur Group",
      img: "images/Direktur.jpg",
    },
    {
      nama: "Manager",
      ket: "Ir. H. Joko Widodo sebagai manager pusat Makmur Group yang mengatur alur strategi pada bisnis Makmur Group",
      img: "images/Manager.jpg",
    },
    {
      nama: "Developer",
      ket: "Dr. (H.C.) Puan Maharani Nakshatra Kusyala Devi, S.Sos sebagai pengembang sekaligus penyalur ide inovasi agar Makmur Group dapat selalu berkembang.",
      img: "images/developer.jpg",
    },
  ];
  res.render("index", {
    lauk: lauk,
    sayur: sayur,
    minuman: minuman,
    manajemen: manajemen,
  });
});

// Server
app.listen(port, () => {
  console.log("8000 is magic port");
});
