import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div className={styles["title-container"]} onClick={() => navigate(-1)}>
      <img src="/icons/back-button.png" alt="back" />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Header;
