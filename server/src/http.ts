import express from "express";
import { getRoom, createRoom } from "./room.js";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

// create room
app.post("/room", (_req, res) => {
  const room = createRoom();

  res.status(201).json({
    roomId: room.id,
    expiresAt: room.expiresAt,
  });
  console.log("roomCreated POST /room");
});

// get room
app.get("/room/:rooomId", (req, res) => {
  const roomId = req.params.rooomId;
  if (typeof roomId != "string" || !/^\d{6}$/.test(roomId)) {
    res.status(404).json({
      error: "Room not found or expired",
    });
    return;
  }
  const room = getRoom(roomId);

  if (!room)
    res.status(404).json({
      error: "Room not found or expired",
    });
  return;

  res.status(200).json(room);
});
