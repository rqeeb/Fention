import ChatHeader from "../components/Header/ChatHeader";
import MessageInput from "../components/MessageInput";
import MessageList from "../components/MessageList";
import { useWebSocket } from "../hooks/useWebSocket";
import { useParams } from "react-router";

const ChatRoom = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { messages, sendMessage } = useWebSocket(roomId ?? "");

  return (
    <div className="container">
      <div className="box">
        <ChatHeader />
        <br />
        <hr />
        <br />
        <MessageList messages={messages} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default ChatRoom;
