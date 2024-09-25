"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      Recomendações
      <MinhaDIV l="320px" a="240px" />
    </main>
  );
}

function MinhaDIV({ l, a }) {
  const [dice, setDice] = useState(1);

  const images = [
    { src: "https://cdn.novelupdates.com/images/2022/04/Hard-Carry-Support.png", name: "Hard Carry Support" },
    { src: "https://preview.redd.it/player-thoughts-on-this-series-v0-y3op5g0yerbc1.jpg?width=1080&crop=smart&auto=webp&s=84167cffa4aea1e95a540ed09d177a91c5b82a78", name: "Player" },
    { src: "https://www.harum.io/cdn/shop/products/1_718d3ace-9912-4763-a122-5edab7d3de60.jpg?v=1663859374&width=975", name: "Leviathan" },
    { src: "https://m.media-amazon.com/images/I/5155ilXFJEL._SY445_SX342_.jpg", name: "The Begin After the End" }
  ];

  const rollDice = () => {
    setDice(Math.floor(Math.random() * 4) + 1);
  };

  return (
    <div
      style={{
        width: l,
        height: a,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {images.map((img, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img src={img.src} alt={img.name} style={{ width: "50%", height: "100%" }} />
          <div style={{ marginLeft: "10px", width: "50%" }}>
            <p>{img.name}</p>
            <textarea placeholder={`Escreva algo sobre ${img.name}...`} style={{ width: "100%", marginTop: "10px" }} />
            <textarea placeholder="Escreva sua descrição aqui..." style={{ width: "100%", height: "50px", marginTop: "10px" }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>Valor do dado: {dice}</p>
        <button onClick={rollDice}>Qual você irá ler</button>
      </div>
    </div>
  );
}