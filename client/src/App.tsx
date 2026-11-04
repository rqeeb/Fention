import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
