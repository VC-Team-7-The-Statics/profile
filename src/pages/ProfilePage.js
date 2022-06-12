import styles from "./ProfilePage.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";

function ProfilePage() {
  const user = useSelector(selectUser);
  const filteredMatches = user.match
    .map((m) => m.couple.filter((c) => user.id !== c._id))
    .flat();

  return (
    <div className={styles["profile-container"]}>
      <div className={styles.profile}>
        <div className={styles["profile-image"]}>
          <img src={user.image} alt={"profile"} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.username}>{user.name}</h2>
          <div className={styles.work}>
            <span className="at">@</span>
            {user.company}
          </div>
        </div>
      </div>
      <div className={styles["requests-container"]}>
        <h2 className={styles.title}>
          커피챗 요청
          <span className={styles.count}>
            (<span className={styles.number}>{user.requests.length}</span>
          </span>
          )
        </h2>
        <div className={styles.content}>
          <ul className={styles.requests}>
            {user.requests.map((request, i) =>
              i < 3 ? (
                <>
                  <h2 className={styles.name}>{request.from.name}</h2>
                  <span>님의 요청</span>
                </>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="expand">
          <Link to={"/requests"} className={styles.request}>
            <span>내용 보기</span>
          </Link>
        </div>
      </div>

      <div className={styles.matches}>
        <h2 className={styles.title}>
          매칭된 유저
          <span className={styles.count}>
            (<span className={styles.number}>{filteredMatches.length}</span>
          </span>
          )
        </h2>
        <div className={styles.content}>
          <ul className={styles["images"]}>
            {filteredMatches.map((match, i) =>
              i <= 3 ? (
                <li key={i} className={styles["image-container"]}>
                  <img src={match.image} alt={"profile"} />
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="expand">
          <Link to="/my-matches">더보기</Link>
        </div>
      </div>

      <div className={styles.likes}>
        <h2 className={styles.title}>
          좋아요 한 유저
          <span className={styles.count}>
            (<span className={styles.number}>{user.likes.length}</span>
          </span>
          )
        </h2>
        <div className={styles.content}>
          <ul className={styles["images"]}>
            {user.likes.map((user, i) =>
              i <= 3 ? (
                <li className={styles["image-container"]}>
                  <img src={user.image} alt="profile" />
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="expand">
          <Link to="/my-likes">더보기</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
