import styles from "./MyLikesPage.module.scss";
import { useSelector } from "react-redux";

import { selectUser } from "../features/user/userSlice";
import Header from "../components/Header";
import UserCard from "../components/UserCard";

function MyLikesPage() {
  const user = useSelector(selectUser);

  return (
    <div className={styles["likes-container"]}>
      <Header title="내가 좋아하는 사람들" />
      <div className={styles.content}>
        {user.likes.length ? (
          <ul className={styles.images}>
            {user.likes.map((user, i) => (
              <UserCard name={user.name} image={user.image} key={i} />
            ))}
          </ul>
        ) : (
          <div className={styles["notification-container"]}>
            <p className={styles.notification}>
              아직 좋아요를 누른 사용자가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyLikesPage;
