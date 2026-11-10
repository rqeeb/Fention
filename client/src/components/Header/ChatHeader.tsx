import { Moon, Sun, Users } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import ChatHeaderChild from "./HeaderChild";

const ChatHeader = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  return (
    <div className="headerContainer">
      <div className="headerChild">
        <Logo className="brandLogo" />
      </div>
      <div className="headerChild">
        <ChatHeaderChild
          Icon={lightMode ? <Sun/> : <Moon/>}
          onClick={() => setLightMode(!lightMode)}
        />
        <ChatHeaderChild
          Icon={<Users/>}
          onClick={() => {
            setLightMode(!lightMode);
            console.log("changed bg");
          }}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
