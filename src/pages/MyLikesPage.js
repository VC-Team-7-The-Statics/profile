import styles from "./MyLikesPage.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function MyLikesPage() {
  const user = useSelector(selectUser);

  return (
    <div className={styles["likes-container"]}>
      <h1 className={styles.title}>내가 좋아하는 사람들</h1>
      <div className={styles.content}>
        <ul className={styles.images}>
          {user.likes.map((user, i) => (
            <li key={i} className={styles["image-container"]}>
              <div className={styles["image-wrapper"]}>
                <h2 className={styles.name}>{user.name}</h2>
                <img src={user.image} alt="profile" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyLikesPage;
