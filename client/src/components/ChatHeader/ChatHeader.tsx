import { Moon, Sun, Users } from "lucide-react";
import { useEffect, useState } from "react";
import type { ChatHeaderProps } from "../types";
import ChatHeaderChild from "./ChatHeaderChild";
import "../../index.css";

const ChatHeader = ({ connected }: ChatHeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", darkMode);
  }, [darkMode]);

  return (
    <div className="headerContainer">
      <div className="headerSplit">
        <span className={connected ? "dot" : "dot grey"}></span>
        Fention.chat
      </div>
      <div className="headerSplit">
        <ChatHeaderChild
          Icon={darkMode ? Sun : Moon}
          onClick={() => setDarkMode(!darkMode)}
        />
        <ChatHeaderChild
          Icon={Users}
          onClick={() => {
            setDarkMode(!darkMode);
            console.log("changed bg");
          }}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
