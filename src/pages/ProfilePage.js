/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./ProfilePage.module.scss";

function ProfilePage() {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles.profile}>
        <div className={styles["profile-image"]}>
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt={"profile image"}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.username}>stefmax@gmail.com</h2>
          <div className={styles.work}>
            <span className="at">@</span>
            와이어드 컴퍼니
          </div>
        </div>
        <a href="/" className={styles.setting}>
          설정
        </a>
      </div>

      <div className={styles["requests-container"]}>
        <h2 className={styles.title}>
          커피챗 요청
          <span className={styles.count}>
            (<span className={styles.number}>5</span>
          </span>
          )
        </h2>
        <div className={styles.content}>
          <ul className={styles.requests}>
            <li className={styles.request}>
              <a href="/">
                <h2 className={styles.name}>공유정</h2>
                <span>님의 요청</span>
              </a>
            </li>
            <li className={styles.request}>
              <a href="/">
                <h2 className={styles.name}>공희정</h2>
                <span>님의 요청</span>
              </a>
            </li>
            <li className={styles.request}>
              <a href="/">
                <h2 className={styles.name}>공유좀</h2>
                <span>님의 요청</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="/" className={styles.more}>
          더보기
        </a>
      </div>

      <div className={styles.matches}>
        <h2 className={styles.title}>
          매칭된 유저
          <span className={styles.count}>
            (<span className={styles.number}>6</span>
          </span>
          )
        </h2>
        <div className={styles.content}>
          <ul className={styles["images"]}>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
          </ul>
        </div>
        <a href="/" className={styles.more}>
          더보기
        </a>
      </div>

      <div className={styles.likes}>
        <h2 className={styles.title}>
          좋아요 한 유저
          <span className={styles.count}>
            (<span className={styles.number}>7</span>
          </span>
          )
        </h2>
        <div className={styles.content}>
          <ul className={styles["images"]}>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/5.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/7.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
            <li className={styles["image-container"]}>
              <a href="/">
                <img
                  src="https://randomuser.me/api/portraits/women/8.jpg"
                  alt={"profile image"}
                />
              </a>
            </li>
          </ul>
        </div>
        <a href="/" className={styles.more}>
          더보기
        </a>
      </div>
    </div>
  );
}

export default ProfilePage;
