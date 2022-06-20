import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Title } from "@the-statics/shared-components";

function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div className={styles["title-container"]} onClick={() => navigate(-1)}>
      <img src="/icons/back-button.png" alt="back" />
      <Title value={title} />
    </div>
  );
}

export default Header;
