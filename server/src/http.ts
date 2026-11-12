import express from "express";
import { getRoom, createRoom } from "./room.js";

export const app = express();

app.use(express.json());

app.post("/room", (_req, res) => {
  const room = createRoom();

  res.status(200).json({
    roomId: room.id,
    expiresAt: room.expiresAt,
  });
  console.log("roomCreated POST /room");
});

app.get("/room/:rooomId", (req, res) => {
  const roomId = req.params.rooomId;
  const room = getRoom(roomId);

  if (typeof roomId != "string" || !/^\d{6}$/.test(roomId) || !room) {
    res.status(400).json({
      error: "Room not found or expired",
    });
    return;
  }

  res.status(200).json(room);
});
