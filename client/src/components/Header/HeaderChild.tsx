import type { ChatHeaderChildProps } from "../types";

const ChatHeaderChild = ({ Icon, onClick }: ChatHeaderChildProps) => {
  return (
    <div className="headerChild">
      <button className="themeToggle" onClick={onClick}>
        {typeof Icon === "string" ? (
          <span style={{ fontSize: "15px", textDecoration:"underline grey 1.7px"}}>{Icon}</span>
        ) : (
          <Icon size={20} strokeWidth={2} />
        )}
      </button>
    </div>
  );
};

export default ChatHeaderChild;
