import styles from "./MyMatchesPage.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function MyMatchesPage() {
  const user = useSelector(selectUser);
  const filteredMatches = user.match
    .map((m) => m.couple.filter((c) => user.id !== c._id))
    .flat();

  return (
    <div className={styles["likes-container"]}>
      <h1 className={styles.title}>나랑 매칭된 사람들</h1>
      <div className={styles.content}>
        <ul className={styles.images}>
          {filteredMatches.map((match, i) => (
            <li key={i} className={styles["image-container"]}>
              <div className={styles["image-wrapper"]}>
                <h2 className={styles.name}>{match.name}</h2>
                <img src={match.image} alt="profile" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyMatchesPage;
