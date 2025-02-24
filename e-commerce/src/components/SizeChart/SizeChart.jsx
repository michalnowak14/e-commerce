import React from "react";
import styles from "./SizeChartStyles.module.css";
import sizeChart from "../../assets/size-chart.webp";

const SizeChart = ({ toggleSizeChart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={sizeChart} alt="" />
        <button onClick={toggleSizeChart}>
          {" "}
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default SizeChart;
