import { RequestCard } from "@the-statics/shared-components";

function RequestsPage() {
  return (
    <div>
      <h1>커피챗 요청</h1>
      <RequestCard
        requester="ken"
        title="안녕하세요 고수님~"
        content="채팅 기능을 못만들어서 연락드렸어요"
      />
      <RequestCard
        requester="ken"
        title="안녕하세요 고수님~"
        content="채팅 기능을 못만들어서 연락드렸어요"
      />
    </div>
  );
}

export default RequestsPage;
