import styles from "./RequestsPage.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../features/user/userSlice";
import ApiService from "../services/Api";
import Header from "../components/Header";
import RequestCard from "../components/RequestCard";

const ApiInstance = new ApiService(axios);

function RequestsPage() {
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const [error, setError] = useState("");

  const handleClick = (requesterId) => () => {
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

        if (window.isNativeApp) {
          const requesterId = data.attendants.filter(
            (attendant) => attendant !== user.id
          )[0];

          const link = {
            type: "CHATROOM_FROM_PROFILE",
            userId: user.id,
            roomId: data.roomId,
            friendId: requesterId,
          };

          window.ReactNativeWebView.postMessage(`${JSON.stringify(link)}`);
        }

        navigate("/");
      },
      onError: () => {
        setError("네트워크 요청을 실패했습니다.");
      },
    }
  );

  return (
    <div className={styles["requests-container"]}>
      <Header title="커피챗 요청" />
      <div className={styles.content}>
        {user.requests.length ? (
          <ul className={styles.requests}>
            {user.requests.map((request, i) => (
              <RequestCard
                name={request.from.name}
                title={request.title}
                content={request.content}
                key={i}
                onClick={handleClick(request.from._id)}
              />
            ))}
          </ul>
        ) : (
          <span>아직 커피챗 요청이 없습니다.</span>
        )}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default RequestsPage;
