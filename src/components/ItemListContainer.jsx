import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ perfumes }) => {
  return (
    <div className="item-list-container">
      {perfumes.map((perfume, index) => (
        <div key={index} className="item">
          <img src={perfume.image} alt={perfume.name} className="item-image" />
          <h3>{perfume.name}</h3>
          <p>{perfume.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
