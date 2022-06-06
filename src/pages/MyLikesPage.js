/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./MyLikesPage.module.scss";

function MyLikesPage() {
  return (
    <div className={styles["likes-container"]}>
      <h1 className={styles.title}>좋아요 한 유저</h1>
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
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/women/9.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyLikesPage;
