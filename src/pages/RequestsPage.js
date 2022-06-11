/* eslint-disable jsx-a11y/img-redundant-alt */
import { RequestCard } from "@the-statics/shared-components";
import styles from "./RequestsPage.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

function RequestsPage() {
  const user = useSelector(selectUser);

  return (
    <div className={styles["requests-container"]}>
      <h1 className={styles.title}>커피챗 요청</h1>
      <div className={styles.content}>
        <ul className={styles.requests}>
          {user.requests.map((request, i) => (
            <li key={i} className={styles.request}>
              <RequestCard
                className={styles["request-card"]}
                requester={request.from.name}
                title={request.title}
                content={request.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RequestsPage;
