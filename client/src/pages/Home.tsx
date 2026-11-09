import {
  ArrowRight,
  Plus,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import HomeHeader from "../components/Header/HomeHeader";
import "./Home.css";


export default function Home() {
  const [roomCode, setRoomCode] = useState("");

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

                <button className="createButton" type="button">
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

          
        </main>

        <footer className="homeFooter">
          
        </footer>
      </div>
    </div>
  );
}
