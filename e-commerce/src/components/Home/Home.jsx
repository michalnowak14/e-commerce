import React, { useState, useEffect } from "react";
import styles from "./HomeStyles.module.css";
import alien from "../../assets/alien.webp";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/lookbook1.jpg";
import img2 from "../../assets/lookbook2.jpg";
import img3 from "../../assets/lookbook3.jpg";
import img4 from "../../assets/lookbook4.jpg";

const Home = () => {
  const lookbookImages = [img1, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lookbookImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={alien} alt="Alien" />
        </div>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(`/shop`)}>shop now</button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${lookbookImages[currentIndex]})` }}
        className={styles.containerLookbook}
      >
        <div className={styles.lookbook}>Lookbook</div>
      </div>
    </div>
  );
};

export default Home;
