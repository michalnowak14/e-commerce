import React from "react";
import styles from "./HomeStyles.module.css";
import alien from "../../assets/alien.webp";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={alien} alt="" />
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => navigate(`/shop`)}>shop now</button>
      </div>
    </div>
  );
};

export default Home;
