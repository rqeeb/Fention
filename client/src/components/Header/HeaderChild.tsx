import type { ChatHeaderChildProps } from "../types";

const ChatHeaderChild = ({ Icon, onClick }: ChatHeaderChildProps) => {
  return (
    <button className="themeToggle" onClick={onClick}>
      <span className="headerLink">{Icon}</span>
    </button>
  );
};

export default ChatHeaderChild;