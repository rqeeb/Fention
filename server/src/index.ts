import { WebSocket, WebSocketServer } from "ws";
import { randomUUID } from "node:crypto";

const wss = new WebSocketServer({ port: 8080 });

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

    if (data.type == "join") {
      const room = data.payload?.room;
    }
  });

  // socket.on("close", () => {
  //   allSockets = allSockets.filter((x) => x != socket);
  // });
});
