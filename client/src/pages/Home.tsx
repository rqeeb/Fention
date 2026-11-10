
import {
  ArrowRight,
  Plus,
  LogIn,
  Link2,
  MessageCircle,
  Clock3,
  Shield,
} from "lucide-react";
import { useState } from "react";
import HomeHeader from "../components/Header/HomeHeader";
import "./Home.css";
import { useNavigate } from "react-router";

const faqs = [
  {
    question: "What is Fention?",
    answer:
      "Fention is a temporary group chat platform designed for conversations that don't need to exist forever. You can create a room, invite other people using a link or join code, and communicate in real time without creating an account. It's intended for quick discussions, collecting opinions, and sharing thoughts within a group.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Fention is designed to work without registration, passwords, or personal profiles. Participants join rooms using a chosen username. This makes it convenient for one-time discussions where creating an account would be unnecessary.",
  },
  {
    question: "How do I create a chat room?",
    answer:
      "Select Create room on the homepage. Once room creation is connected to the backend, Fention will generate a unique room identifier and an invitation that you can share with others. Anyone with valid invitation details can join the corresponding room.",
  },
  {
    question: "How do I join an existing room?",
    answer:
      "If someone has invited you to a conversation, enter the six-digit room code they provided. Alternatively, you can open a shared invitation link. You'll be taken to the associated chat room, where you can choose a username and participate.",
  },
  {
    question: "How long are messages stored?",
    answer:
      "Fention is being designed with a maximum retention period of three days. Once a room expires, its associated messages are intended to be deleted from the service. The exact retention behavior will depend on the completed storage and expiration implementation.",
  },
  {
    question: "Are my conversations private?",
    answer:
      "Fention is designed to minimize unnecessary collection and long-term retention of information. However, temporary messaging does not automatically mean end-to-end encryption or complete anonymity. People with access to a room can read its messages, and the server may process message content to deliver it.",
  },
  {
    question: "Can someone join without my permission?",
    answer:
      "Room access is based on valid invitation information, such as a shareable link or join code. Anyone who obtains those details may be able to join, so avoid sharing them publicly. Additional access controls and safeguards are planned as development progresses.",
  },
  {
    question: "Can I close a room before it expires?",
    answer:
      "The planned room-management functionality will allow room creators to end conversations before their scheduled expiration. When implemented, closing a room will prevent further participation and trigger the appropriate cleanup process.",
  },
];

export default function Home() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="homeBox">
        <HomeHeader />

        <main>
          <section className="columnContainer">
            <div className="leftColumn">
              <h1 className="columnTagLine">
                Simple, Private,
                <br />
                Temporary Chat.
              </h1>

              <p className="columnTagLine2">
                Fention is a simple way to have conversations
                that don't need to last forever. Create a room,
                invite your friends, and chat in real time.
                No accounts, no unnecessary setup.
              </p>
            </div>

            <div className="rightColumn">
              <section className="createRoom">
                <Plus size={30} strokeWidth={1.5} />

                <h2>Create a room</h2>

                <p>
                  Start a temporary group conversation.
                  Create a room and share the invitation
                  with anyone you'd like to join.
                </p>

                <button className="createButton" type="button" onClick={()=> navigate("/room/:4")}>
                  Create room
                  <ArrowRight size={17} />
                </button>
              </section>

              <section className="joinRoom">
                <LogIn size={30} strokeWidth={1.5} />

                <h2>Join a room</h2>

                <p>
                  Have a room invitation? Enter the
                  six-digit code below to join an
                  existing conversation.
                </p>

                <input
                  className="roomCodeInput"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={6}
                  placeholder="000000"
                  aria-label="Six-digit room code"
                  value={roomCode}
                  onChange={(e) =>
                    setRoomCode(
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                />

                <button
                  className="joinButton"
                  type="button"
                  disabled={roomCode.length !== 6}
                >
                  Join room
                  <ArrowRight size={17} />
                </button>
              </section>
            </div>
          </section>

          <section className="homeSection">
            <h2>How it works</h2>

            <p className="sectionDescription">
              Getting started with Fention is straightforward.
              You don't need to register or configure anything.
              Just create a conversation and invite the people
              you want to talk to.
            </p>

            <div className="stepsGrid">
              <div className="step">
                <Plus size={23} strokeWidth={1.5} />
                <h3>1. Create a room</h3>
                <p>
                  Start by creating a temporary chat room.
                  Each room receives its own unique
                  identifier, allowing conversations
                  to remain separate from one another.
                </p>
              </div>

              <div className="step">
                <Link2 size={23} strokeWidth={1.5} />
                <h3>2. Share the invitation</h3>
                <p>
                  Invite friends, classmates, or other
                  participants by sharing the room link
                  or six-digit join code. They won't
                  need to create an account.
                </p>
              </div>

              <div className="step">
                <MessageCircle size={23} strokeWidth={1.5} />
                <h3>3. Start chatting</h3>
                <p>
                  Once everyone joins, messages appear
                  in real time across connected devices.
                  Use the room for discussions, opinions,
                  or conversations with your group.
                </p>
              </div>
            </div>
          </section>

          <section className="homeSection">
            <h2>Why Fention?</h2>

            <p className="sectionDescription">
              Not every conversation needs an account,
              a permanent group, or years of stored
              messages. Fention is being built for
              the conversations you only need right now.
            </p>

            <div className="featuresGrid">
              <div className="feature">
                <Shield size={23} strokeWidth={1.5} />
                <h3>No registration required</h3>
                <p>
                  Join conversations using a username
                  rather than creating another online
                  account. Fention aims to make joining
                  short-lived discussions as simple
                  as possible.
                </p>
              </div>

              <div className="feature">
                <Clock3 size={23} strokeWidth={1.5} />
                <h3>Temporary conversations</h3>
                <p>
                  Rooms are designed around a limited
                  lifespan, with a planned maximum
                  retention period of three days.
                  This reduces the need to maintain
                  permanent conversation histories.
                </p>
              </div>
            </div>
          </section>

          <section className="homeSection faqSection">
            <h2>Frequently Asked Questions</h2>

            <p className="sectionDescription">
              Everything you might want to know about
              creating rooms, joining conversations,
              and how temporary messaging works.
            </p>

            <div className="faqList">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <footer className="homeFooter">
          <span>Made with :3 </span>
        </footer>
      </div>
    </div>
  );
}
