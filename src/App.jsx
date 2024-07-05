import React from "react";
import NavBar from "./components/NavBar";
import ImagenPrincipal from "./components/ImagenPrincipal";
import ItemListContainer from "./components/ItemListContainer";

const perfumes = [
  {
    name: "YVES SAINT LAURENT",
    description: "Y EDP 100ML",
    image: "images/yves.webp",
  },
  {
    name: "CAROLINA HERRERA",
    description: "BAD BOY LE PARFUM EDP 150ML",
    image: "images/badboy.webp",
  },
  {
    name: "RABANNE",
    description: "PHANTOM EDT 100ML",
    image: "images/phantom.webp",
  },
  {
    name: "YVES SAINT LAURENT",
    description: "BLACK OPIUM EDP 90ML",
    image: "images/blackopium.webp",
  },
  {
    name: "CALVIN KLEIN",
    description: "CK EVERYONE EDT 200ML",
    image: "images/CK.webp",
  },
  {
    name: "ARMANI",
    description: "SI EDP 100ML",
    image: "images/si.webp",
  },
  {
    name: "CALVIN KLEIN",
    description: "CK BE EDT 200ML",
    image: "images/CK2.webp",
  },
  {
    name: "AZZARO",
    description: "SPORT EDT 100ML",
    image: "images/Azz.webp",
  },
  {
    name: "RABANNE",
    description: "OLYMPEA SOLAR EDP INTENSE 80ML",
    image: "images/Olympea.webp",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <ImagenPrincipal />
      <ItemListContainer perfumes={perfumes} />
    </div>
  );
}

export default App;
