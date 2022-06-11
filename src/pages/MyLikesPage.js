/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./MyLikesPage.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function MyLikesPage() {
  const user = useSelector(selectUser);

  return (
    <div className={styles["likes-container"]}>
      <h1 className={styles.title}>좋아요 한 유저</h1>
      <div className={styles.content}>
        <ul className={styles["images"]}>
          {user.likes.map((user, i) => (
            <li key={i} className={styles["image-container"]}>
              <img src={user.image} alt={"profile image"} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyLikesPage;
