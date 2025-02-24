import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/assets";
import styles from "./ProductDisplayStyles.module.css";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import SizeChart from "../SizeChart/SizeChart";

const ProductDisplay = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products[id];
  const [selectedSize, setSelectedSize] = useState("");
  const [error, setError] = useState("");
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <h2>Product not found!</h2>;

  const toggleSizeChart = () => {
    setModalIsDisplayed(!modalIsDisplayed);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setError("");
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size!");
      return;
    }

    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div className={styles.productDisplay}>
      {modalIsDisplayed ? (
        <SizeChart
          modalIsDisplayed={modalIsDisplayed}
          setModalIsDisplayed={setModalIsDisplayed}
          toggleSizeChart={toggleSizeChart}
        />
      ) : (
        ""
      )}
      <img className={styles.productImg} src={product.img} alt={product.name} />
      <div className={styles.infoContainer}>
        <h2>{product.name}</h2>
        <h2>{product.price} $</h2>
      </div>

      <div className={styles.sizeChartContainer}>
        <p>Size</p>
        <p onClick={toggleSizeChart}>Size chart</p>
      </div>

      <div className={styles.sizesContainer}>
        {["S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            className={`${styles.button} ${
              selectedSize === size ? styles.active : ""
            }`}
            onClick={() => handleSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button onClick={handleAddToCart} className={styles.addCart}>
        Add to cart
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
