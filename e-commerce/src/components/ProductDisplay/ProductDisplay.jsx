import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/assets";
import styles from "./ProductDisplayStyles.module.css";
import Logo from "../Logo/Logo";
import { CartContext } from "../../context/CartContext";

const ProductDisplay = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products[parseInt(id, 10)]; // Ensure proper indexing
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className={styles.productDisplay}>
      <Logo />
      <img className={styles.productImg} src={product.img} alt={product.name} />
      <div className={styles.infoContainer}>
        <h2>{product.name}</h2>
        <h2>{product.price} zł</h2>
      </div>
      <div className={styles.sizeChartContainer}>
        <p>Size</p>
        <p>Tabela rozmiarów</p>
      </div>
      <div className={styles.sizesContainer}>
        {["S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            className={selectedSize === size ? styles.active : ""}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={() => addToCart({ ...product, size: selectedSize })}
        className={styles.addCart}
      >
        Dodaj do koszyka
      </button>
      <div>
        <ul>
          <li>100% Heavy Cotton</li>
          <li>Huge Front Print</li>
          <li>Chaos Oversize Fit</li>
          <li>Black</li>
          <li>Made in Poland</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDisplay;
