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
        <ul className={styles.images}>
          {user.likes.map((user, i) => (
            <UserCard name={user.name} image={user.image} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyLikesPage;
