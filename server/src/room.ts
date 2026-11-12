import { randomInt } from "node:crypto";

interface Room {
  id: string;
  createdAt: number;
  expiresAt: number;
}

const ROOM_LIFETIME = 72 * 60 * 60 * 1000;

export const rooms = new Map<string, Room>();

export function createRoom(): Room {
  if (rooms.size >= 1_000_000) {
    throw new Error("Room capacity reached");
  }

  let roomId: string;

  do {
    roomId = randomInt(0, 1_000_000).toString().padStart(6, "0");
  } while (rooms.has(roomId));

  const now = Date.now();

  const room: Room = {
    id: roomId,
    createdAt: now,
    expiresAt: now + ROOM_LIFETIME,
  };

  rooms.set(roomId, room);

  return room;
}

export function getRoom(roomId: string): Room | null {
  const room = rooms.get(roomId);

  if (!room) return null;

    if (Date.now() >= room.expiresAt) {
     rooms.delete(roomId)
      return null;
    }

  return room;
}
