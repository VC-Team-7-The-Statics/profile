import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RedirectPage() {
  const { roomId } = useParams();

  useEffect(() => {
    window.location.replace(
      `http://localhost:9999/chat/${roomId}?from=profile`
    );
  }, [roomId]);
}

export default RedirectPage;
