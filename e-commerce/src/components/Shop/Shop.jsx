import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShopStyles.module.css";
import { products } from "../../assets/assets";
import Product from "../Product/Product";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";

const Shop = () => {
  const [items, setItems] = useState(products);
  const [sortOrder, setSortOrder] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [filterCategory, setFilterCategory] = useState(null);
  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) =>
      sortOrder === "asc" ? b.price - a.price : a.price - b.price
    );
    setItems(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    console.log(sortedItems);
  };

  const toggleCategories = () => {
    setIsClicked(!isClicked);
  };
  const handleFilter = (category) => {
    if (filterCategory === category) {
      setItems(products); // Reset filter
      setFilterCategory(null);
    } else {
      const filteredItems = products.filter(
        (item) => item.category === category
      );
      setItems(filteredItems);
      setFilterCategory(category);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Logo />
      <div className={styles.buttonsContainer}>
        <div>
          <button onClick={toggleCategories}>filter</button>{" "}
          <button onClick={handleSort}>
            price {sortOrder == "asc" ? "high to low" : "low to high"}
          </button>
        </div>
        <div className={styles.categoriesContainer}>
          {isClicked == true ? (
            <div className={styles.categories}>
              <button
                className={`${styles.button} ${
                  filterCategory === "t-shirt" ? styles.active : ""
                }`}
                onClick={() => handleFilter("t-shirt")}
              >
                t-shirts
              </button>{" "}
              <button
                className={`${styles.button} ${
                  filterCategory === "hoodie" ? styles.active : ""
                }`}
                onClick={() => handleFilter("hoodie")}
              >
                hoodies
              </button>
            </div>
          ) : (
            ""
          )}{" "}
        </div>
      </div>

      <div className={styles.container}>
        {items.map((item, index) => (
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
