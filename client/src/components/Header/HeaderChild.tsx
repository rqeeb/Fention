import type { ChatHeaderChildProps } from "../types";

const ChatHeaderChild = ({ Icon, onClick }: ChatHeaderChildProps) => {
  return (
    <div className="headerChild">
      <button className="themeToggle" onClick={onClick}>
        <Icon size={20} strokeWidth={2} />
      </button>
    </div>
  );
};

export default ChatHeaderChild;
