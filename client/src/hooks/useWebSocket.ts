import { useEffect, useRef, useState } from "react";
import type { Message } from "../components/types";

export function useWebSocket(roomId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    setMessages([]);
    setConnected(false);

    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: { room: roomId },
        }),
      );
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "joined") {
          setConnected(true);
        }

        if (data.type == "message") {
          const message = data.payload;

          setMessages((prev) => [
            ...prev,
            {
              id: message.id,
              username: message.username,
              text: message.text,
              timestamp: new Date(message.timestamp),
            },
          ]);
        }

        if (data.type === "error") {
          console.error(data.payload?.message);
        }
      } catch (err) {
        console.error("Invalid message recieved: ", err);
      }
    };

    ws.onclose = () => setConnected(false);
    ws.onerror = (err) => console.error(err);

    return () => {
      ws.close();
      if (wsRef.current === ws) {
        wsRef.current = null;
      }
    };
  }, [roomId]);

  function sendMessage(username: string, text: string) {
    if (!connected || wsRef.current?.readyState !== WebSocket.OPEN) {
      return;
    }

    wsRef.current.send(
      JSON.stringify({
        type: "message",
        payload: { username, text },
      }),
    );
  }

  return { messages, sendMessage, connected };
}
