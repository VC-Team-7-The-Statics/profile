import styles from "./MyMatchesPage.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../features/user/userSlice";
import ApiService from "../services/Api";
import { useMutation } from "react-query";
import Header from "../components/Header";
import UserCard from "../components/UserCard";

const ApiInstance = new ApiService(axios);

function MyMatchesPage() {
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const [error, setError] = useState("");

  const filteredMatches = user.match.map(
    (m) => m.couple.filter((c) => user.id !== c._id)[0]
  );

  const handleClick = (opponentId) => () => {
    const attendants = { attendants: [opponentId, user.id] };

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
    <div className={styles["likes-container"]}>
      <Header title="나와 매칭된 사람들" />
      {error && <span>{error}</span>}
      <div className={styles.content}>
        <ul className={styles.images}>
          {filteredMatches.map((match, i) => (
            <UserCard
              name={match.name}
              image={match.image}
              key={i}
              onClick={handleClick(match._id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyMatchesPage;
