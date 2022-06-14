/* eslint-disable no-unused-vars */
import styles from "./RequestsPage.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import ApiService from "../services/Api";
import { useNavigate } from "react-router-dom";
import { Button02 } from "@the-statics/shared-components";

const ApiInstance = new ApiService(axios);

function RequestsPage() {
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const [error, setError] = useState("");

  const onChatStartClick = (requesterId) => () => {
    const attendants = { attendants: [requesterId, user.id] };

    mutate(attendants);
  };

  const { mutate } = useMutation(
    (attendants) => ApiInstance.initiateChatting({ ...attendants }),
    {
      onSuccess: ({ data }) => {
        if (!data.success) {
          return setError(data.message);
        }

        navigate(`/chat/${data.roomId}`);
      },
      onError: () => {
        setError("네트워크 요청을 실패했습니다.");
      },
    }
  );

  return (
    <div className={styles["requests-container"]}>
      <h1 className={styles.title}>커피챗 요청</h1>
      <div className={styles.content}>
        <ul className={styles.requests}>
          {user.requests.map((request, i) => (
            <li key={i} className={styles.request}>
              <div className={styles["request-card"]}>
                <details className={styles.request}>
                  <summary className={styles.title}>{request.title}</summary>
                  <p className={styles.content}>
                    {request.content}
                    <div className={styles.requester}>
                      <span className={styles.name}>
                        {" "}
                        from.{request.from.name}
                      </span>
                    </div>
                  </p>
                </details>
                <Button02 onClick={onChatStartClick}>대화 신청하기</Button02>
                {/* <div className={styles["button-container"]}>대화 신청하기</div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RequestsPage;
