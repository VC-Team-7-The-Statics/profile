/* eslint-disable jsx-a11y/img-redundant-alt */
import { RequestCard } from "@the-statics/shared-components";
import styles from "./RequestsPage.module.scss";

function RequestsPage() {
  return (
    <div className={styles["requests-container"]}>
      <h1 className={styles.title}>커피챗 요청</h1>
      <div className={styles.content}>
        <ul className={styles.requests}>
          <li className={styles.request}>
            <RequestCard
              className={styles["request-card"]}
              requester="ken"
              title="안녕하세요 고수님~"
              content="채팅 기능을 못만들어서 연락드렸어요"
            />
          </li>
          <li className={styles.request}>
            <RequestCard
              className={styles["request-card"]}
              requester="ken"
              title="안녕하세요 고수님~"
              content="채팅 기능을 못만들어서 연락드렸어요"
            />
          </li>
          <li className={styles.request}>
            <RequestCard
              className={styles["request-card"]}
              requester="ken"
              title="안녕하세요 고수님~"
              content="채팅 기능을 못만들어서 연락드렸어요"
            />
          </li>
          <li className={styles.request}>
            <RequestCard
              className={styles["request-card"]}
              requester="ken"
              title="안녕하세요 고수님~"
              content="채팅 기능을 못만들어서 연락드렸어요"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RequestsPage;
