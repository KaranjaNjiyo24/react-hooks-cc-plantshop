import React, { useState} from "react";

function PlantCard({name, image, price}) {
  const [inStock, setInStock] = useState(true)

  const handleStockToggle = () => {
    setInStock(!inStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleStockToggle} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
