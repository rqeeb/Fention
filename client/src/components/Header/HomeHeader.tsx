import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import ChatHeaderChild from "./HeaderChild";
import { ExternalLink } from "lucide-react";

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
          Icon={"FAQs"}
          onClick={() => {
            console.log("changed bg");
          }}
        />
        <ChatHeaderChild
          Icon={"Contact Us"}
          onClick={() => {
            console.log("fbhg");
          }}
        />
        <ChatHeaderChild
          Icon={
            <>
              Report a bug <ExternalLink size={13} />
            </>
          }
          onClick={() => {
            console.log("changed bg");
          }}
        />
        <ChatHeaderChild
          Icon={lightMode ? "Light" : "Dark"}
          onClick={() => setLightMode(!lightMode)}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
