/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./MyMatchesPage.module.scss";

function MyMatchesPage() {
  return (
    <div className={styles["likes-container"]}>
      <h1 className={styles.title}>매칭 된 유저</h1>
      <div className={styles.content}>
        <ul className={styles["images"]}>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/6.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/7.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/8.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/9.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
          <li className={styles["image-container"]}>
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt={"profile image"}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyMatchesPage;
