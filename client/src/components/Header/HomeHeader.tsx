import Logo from "../Logo/Logo";
import ChatHeaderChild from "./HeaderChild";
import { ExternalLink } from "lucide-react";

const ChatHeader = () => {
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
              Report a Bug <ExternalLink size={13} />
            </>
          }
          onClick={() => {
            console.log("changed bg");
          }}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
