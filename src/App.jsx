import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


import Card from "./components/Card";
import Nav from "./components/Nav";
import ReactState from "./components/ReactState";
import Form from "./components/Form";
//Untuk komponen app.jsx kita masukkan seluruh data yang sudah kita import dari komponen seblumnya

const menuMakanan = [
  {
    gambar: "https://cdn1.katadata.co.id/media/images/thumb/2021/11/11/Soto_Ayam-2021_11_11-16_34_42_5f526ac236adec3bcaa4bae05a665afa_620x413_shared1.jpg",
    title: "Soto Ayam",
    content:
      "Soto ayam adalah makanan khas Indonesia yang berupa sejenis sup ayam dengan kuah yang berwarna kekuningan. Warna kuning ini dikarenakan oleh kunyit yang digunakan sebagai bumbu.",
  },
  {
    gambar: "https://blog.tokowahab.com/wp-content/uploads/2020/06/Resep-Soto-Daging-yang-Empuk-dan-Lezat.jpg",
    title: "Soto Daging",
    content:
      "makanan khas Indonesia seperti sop yang terbuat dari kaldu daging dan sayuran. Daging yang paling sering digunakan adalah daging sapi dan daging ayam",
  },
  {
    gambar: "https://www.gramedia.com/blog/content/images/2019/09/dudung-roxy-detikcom-body.jpg",
    title: "Betawi Kambing",
    content:
      "Soto Betawi merupakan soto yang khas dari daerah DKI Jakarta. Seperti halnya Soto Madura dan Soto Sulung, soto Betawi juga menggunakan jeroan. Selain jeroan, sering kali organ-organ lain juga disertakan, seperti mata, terpedo, dan juga hati. Daging sapi juga menjadi bahan campuran dalam soto Betawi. Kuah soto Betawi merupakan campuran santan dan susu. Kedua campuran inilah yang membuat rasa soto Betawi begitu khas.",
  },
  {
    gambar: "https://www.seriouseats.com/thmb/1-lucdS7A6rTh5TUsCFNtV0Eh_I=/2100x1181/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__06__20190604-nasi-goreng-fried-rice-vicky-wasik-7-617f5404fb49463a8b37e02df7d78def.jpg",
    title: "Nasi Goreng",
    content:
      "Nasi goreng adalah sebuah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng, margarin, atau mentega. Biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya; seperti telur, ayam, dan kerupuk.",
  },
  {
    gambar: "https://anakjajan.files.wordpress.com/2019/04/dscf8342.jpg",
    title: "mie ayam bakso",
    content:
      "Mi ayam, mie ayam atau bakmi ayam adalah hidangan Indonesia yang terbuat dari mie gandum kuning yang dibumbui dengan daging ayam yang biasanya dipotong dadu. Hidangan ini banyak terpengaruh dengan teknik penyajian kuliner yang digunakan dalam hidangan Tiongkok.",
  },
  {
    gambar: "https://assets-pergikuliner.com/4o-dKncqKNS6QQbFDqM52WkrK0o=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/12013/picture-1537766225.jpeg",
    title: "Nasi Padang",
    content:
      "Nasi padang adalah sebuah hidangan yang disajikan secara lengkap secara prasmanan dengan daging, ikan, sayuran, dan makanan pedas dimakan dengan nasi putih, itu adalah komoditas ekspor paling terkenal dan masyarakat Minangkabau mempunyai kontribusi yang besar untuk masakan Indonesia.",
  },
  //buat const yang berisi file gambar,ttle dan content yang akan dimasukkan ke dalam kerangka komponen card
];

function App() {
  return (
    <div>
      <Nav />
      <div className="container mb-4 mt-4">
        
      </div>
      <div className="container">
        <div className="row">
          {menuMakanan.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card
                gambar={agt.gambar}
                title={agt.title}
                content={agt.content}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="container">
        <h2>State</h2>
        <ReactState />
      </div>
    </div>
  );
}
export default App;