import styles from "./RequestCard.module.scss";
import { Button02 } from "@the-statics/shared-components";

function RequestCard({ title, content, name, onClick }) {
  return (
    <li className={styles.request}>
      <div className={styles["request-card"]}>
        <details className={styles.request}>
          <summary className={styles.title}>{title}</summary>
          <p className={styles.content}>
            {content}
            <div className={styles.requester}>
              <span className={styles.name}> from.{name}</span>
            </div>
          </p>
        </details>
        <Button02 onClick={onClick}>대화 수락하기</Button02>
      </div>
    </li>
  );
}

export default RequestCard;
