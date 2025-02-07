import styles from "./LogoStyles.module.css";
import alien from "../../assets/alien.webp";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        onClick={() => navigate("/")}
        src={alien}
        alt=""
      />
    </div>
  );
};

export default Logo;
