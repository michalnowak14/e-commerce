import React, { useContext, useState } from "react";
import styles from "./ProductStyles.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Product = ({ img, img2, name, price, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? img2 : img} alt={name} />
      <div className={styles.infoContainer}>
        <h2>{name}</h2>
        <h3>{price}$</h3>
      </div>
    </div>
  );
};

export default Product;
