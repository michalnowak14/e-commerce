import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShopStyles.module.css";
import { products } from "../../assets/assets";
import Product from "../Product/Product";
import Logo from "../Logo/Logo";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <>
      <Logo />
      <div className={styles.buttonsContainer}>
        <div>
          <button>Filtruj</button>
          <button>Sortuj</button>
        </div>
      </div>
      <div className={styles.container}>
        {products.map((item, index) => (
          <Product
            key={index}
            id={index}
            onClick={() => navigate(`/product/${index}`)}
            name={item.name}
            price={item.price}
            img={item.img}
            img2={item.img2}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
