import { WebSocket, WebSocketServer } from "ws";
import { randomUUID } from "node:crypto";
import { getRoom } from "./room.js";
import { app } from "./http.js";
import { createServer } from "node:http";

// const wss = new WebSocketServer({ port: 8080 });

const server = createServer(app);

const wss = new WebSocketServer({ server });

server.listen(8080, () => {
  console.log("server running on port 8080");
});

const users = new Map<WebSocket, string>();

wss.on("connection", function (socket) {
  socket.on("message", (rawMsg) => {
    let data;

    try {
      data = JSON.parse(rawMsg.toString());
    } catch {
      socket.send(
        JSON.stringify({
          type: "error",
          payload: { message: "Invalid JSON" },
        }),
      );
      return;
    }

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      socket.send(
        JSON.stringify({
          type: "error",
          payload: { message: "Invalid message format" },
        }),
      );
      return;
    }

    if (data.type == "join") {
      const room = data.payload?.room;

      if (typeof room !== "string" || !/^\d{6}$/.test(room) || !getRoom(room)) {
        socket.send(
          JSON.stringify({
            type: "error",
            payload: { message: "Room does not exist or has expired" },
          }),
        );
        return;
      }

      users.set(socket, room);

      socket.send(
        JSON.stringify({
          type: "joined",
          payload: { room },
        }),
      );
    }

    if (data.type == "message") {
      const room = users.get(socket);

      if (!room) return;

      const username = data.payload?.username;
      const text = data.payload?.text;

      if (
        typeof username !== "string" ||
        typeof text !== "string" ||
        !username.trim() ||
        !text.trim()
      ) {
        return;
      }

      const outgoingMessage = JSON.stringify({
        type: "message",
        payload: {
          id: randomUUID(),
          username: username.trim(),
          text: text.trim(),
          timestamp: new Date().toISOString(),
        },
      });

      for (const [client, clientRoom] of users) {
        if (clientRoom === room && client.readyState == WebSocket.OPEN) {
          client.send(outgoingMessage);
        }
      }
    }
  });

  socket.on("close", () => {
    users.delete(socket);
  });
});

console.log("WebSocket servr sniping or PORT 8080");
