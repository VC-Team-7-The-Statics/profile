import styles from "./UserCard.module.scss";

function UserCard({ name, image, ...otherProps }) {
  return (
    <li className={styles["image-container"]}>
      <div className={styles["image-wrapper"]} {...otherProps}>
        <h2 className={styles.name}>{name}</h2>
        <img src={image} alt="profile" />
      </div>
    </li>
  );
}

export default UserCard;
