import { RequestCard, Button02 } from "@the-statics/shared-components";
import styles from "./RequestsPage.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import ApiService from "../services/Api";
import { useNavigate } from "react-router-dom";

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
              <RequestCard
                className={styles["request-card"]}
                requester={request.from.name}
                title={request.title}
                content={request.content}
              />
              <Button02
                type="submit"
                onClick={onChatStartClick(request.from._id)}
              >
                대화 신청
              </Button02>
            </li>
          ))}
        </ul>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default RequestsPage;
